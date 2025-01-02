import { DefineComponent, PropType, ExtractPropTypes } from 'vue'

export const virtualProps = {
  dataSources: {
    type: Array,
    default: () => [],
    require: true
  },
  dataKey: {
    type: String,
    default: 'id'
  },
  keeps: {
    type: Number,
    default: 30
  },
  estimateSize: {
    type: Number,
    default: 80
  },
  dataComponent: {
    type: [Object, Function] as PropType<DefineComponent<{}, {}, any>>,
    default: null,
    require: true
  }
} as const

export type VirtualProps = ExtractPropTypes<typeof virtualProps>
