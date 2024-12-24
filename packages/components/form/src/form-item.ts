import type { RuleItem } from 'async-validator'
import { ExtractPropTypes, InjectionKey, PropType } from 'vue'

export type Arratyable<T> = T | T[]

export interface FormItemRule extends RuleItem {
  trigger?: Arratyable<string>
}

export const formItemValidateState = [
  'success',
  'error',
  'validating',
  'warning',
  ''
] as const

export type FormItemValidateState = (typeof formItemValidateState)[number]

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

// 定义 FormItemProps 类型，使用 Partial 使所有属性变为可选
export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>

export interface FormItemContext extends FormItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
  ) => Promise<void>
}
// 定义 formItemContextKey 作为依赖注入的键
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContext')
