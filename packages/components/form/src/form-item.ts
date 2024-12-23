import type { RuleItem } from 'async-validator'
import { ExtractPropTypes, PropType } from 'vue'

export type Arratyable<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: Arratyable<string>
}

export const formItemProps = {
  label: {
    type: String,
    default: ''
  },
  prop: {
    type: String,
    default: ''
  },
  rules: {
    type: [Object, Array] as PropType<Arratyable<FormItemRule>>,
    default: () => []
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  error: {
    type: String,
    default: ''
  }
} as const // as const 会将对象的属性变为只读

export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>
