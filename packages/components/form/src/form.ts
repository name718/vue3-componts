import { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import { Arrayable, FormItemProps } from './form-item'
import { t } from 'unplugin-vue-define-options/index.d-CEU5siLz'

export const formProps = {
  model: Object,
  rules: {
    type: Object as PropType<Record<string, Arrayable<FormItemProps>>>
  },
  showMessage: {
    type: Boolean,
    default: true
  }
}
export type FormProps = Partial<ExtractPropTypes<typeof formProps>>

export interface FormContext extends FormProps {}
export const formContextKey: InjectionKey<FormContext> = Symbol('formContext')
