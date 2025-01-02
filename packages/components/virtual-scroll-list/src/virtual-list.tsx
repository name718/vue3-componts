import { defineComponent, h } from 'vue'
import { virtualProps } from './props'

export default defineComponent({
  name: 'ZVirtualScrollList',
  props: virtualProps,
  setup(props, { slots }) {
    return () => {
      return h('div', 'VirtualScrollList')
    }
  }
})
