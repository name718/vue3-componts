import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import { Arrayable, FormItemRule } from './form-item'
import { FormItemContext } from './form-item'

export const formProps = {
  model: Object,
  rules: {
    type: Object as PropType<Record<string, Arrayable<FormItemRule>>>
  },
  showMessage: {
    type: Boolean,
    default: true
  }
}
export type FormProps = Partial<ExtractPropTypes<typeof formProps>>

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void
}
export const formContextKey: InjectionKey<FormContext> = Symbol('formContext')
