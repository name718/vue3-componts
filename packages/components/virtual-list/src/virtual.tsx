import { createNamespace } from '@mjt/utils/create'
import { transform } from 'typescript'
import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue'

export default defineComponent({
  name: 'ZVirtualList',
  props: {
    size: {
      type: Number,
      default: 35
    },
    remain: {
      type: Number,
      default: 8
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { slots }) {
    return () => {
      const bem = createNamespace('vl')
      const wrapperRef = ref<HTMLElement>()
      const barRef = ref<HTMLElement>()
      const offset = ref(0)
      const state = reactive({
        start: 0,
        end: props.remain
      })

      const prev = computed(() => {
        return Math.min(props.remain, state.start)
      })
      const next = computed(() => {
        return Math.min(props.remain, props.items.length - state.end)
      })
      const visibleData = computed(() => {
        return props.items.slice(
          state.start - prev.value,
          state.end + next.value
        )
      })

      watch(() => props.items, initWrapper)
      onMounted(() => {
        initWrapper()
      })

      function initWrapper() {
        wrapperRef.value!.style.height = props.size * props.remain + 'px'
        barRef.value!.style.height = props.items.length * props.size + 'px'
      }

      const handleScroll = () => {
        const scrollTop = wrapperRef.value!.scrollTop
        state.start = Math.floor(scrollTop / props.size)
        state.end = state.start + props.remain

        offset.value = state.start * props.size - props.size * prev.value
      }
      return (
        <div
          class={bem.b()}
          ref={wrapperRef}
          onScroll={handleScroll}
        >
          <div
            class={bem.e('scroll-bar')}
            ref={barRef}
          ></div>
          <div
            class={bem.b('scroll-list')}
            style={{ transform: `translate3d(0,${offset.value}px,0)` }}
          >
            {visibleData.value.map((node, idx) => slots.default!({ node }))}
          </div>
        </div>
      )
    }
  }
})
