import { defineComponent, onBeforeMount, ref } from 'vue'
import { virtualProps, RangeOptions } from './props'
import { initVirtual } from './virtual'
import VirtualItem from './virtual-item'

export default defineComponent({
  name: 'ZVirtualScrollList',
  props: virtualProps,
  setup(props, { slots }) {
    const range = ref<RangeOptions | null>(null)
    const update = (newRange: RangeOptions) => {
      range.value = newRange
    }
    let virtual: ReturnType<typeof initVirtual> | null = null
    const getUniqueIdFromDataSource = (): string[] => {
      const { dataSources, dataKey } = props
      return dataSources.map(
        (dataSource: any) => dataSource[dataKey as any]
      ) as string[]
    }
    const installVirtual = () => {
      virtual = initVirtual(
        {
          keeps: props.keeps,
          buffer: (props.keeps / 3) | 0,
          uniqueIds: getUniqueIdFromDataSource(),
          estimateSize: props.estimateSize
        },
        update
      )
    }
    onBeforeMount(() => {
      installVirtual()
    })
    function getRenderComponent() {
      const slots: any[] = []
      const { start, end } = range.value!
      const { dataSources, dataComponent, dataKey } = props
      for (let index = start; index <= end; index++) {
        const dataSource = dataSources[index]
        const uniqueKey = (dataSource as any)[dataKey]
        slots.push(
          <VirtualItem
            uniqueKey={uniqueKey}
            source={dataSource}
            component={dataComponent}
            onItemResize={onItemResize}
          ></VirtualItem>
          //   <dataComponent
          //     key={uniqueKey}
          //     source={dataSource}
          //   ></dataComponent>
        )
      }
      return slots
    }
    function onItemResize(id: string | number, size: number) {
      console.log(id, size)
      if (virtual) {
        virtual.saveSize(id, size)
      }
    }
    const root = ref<HTMLElement | null>()
    function onScroll() {
      if (root.value) {
        const offset = root.value.scrollTop
        virtual?.handleScroll(offset)
      }
    }
    return () => {
      const { padFront, padBehind, start, end } = range.value!
      const paddingStyle = {
        padding: `${padFront}px 0 ${padBehind}px`
      }
      return (
        <div
          onScroll={onScroll}
          ref={root}
        >
          <div style={paddingStyle}>{getRenderComponent()}</div>
        </div>
      )
    }
  }
})
