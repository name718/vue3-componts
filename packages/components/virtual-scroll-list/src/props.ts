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

export type RangeOptions = {
  start: number
  end: number
  padFront: number
  padBehind: number
}

export type VirtualOptions = {
  keeps: number
  buffer: number
  uniqueIds: string[]
  estimateSize: number
}

export type updateType = (range: RangeOptions) => void
