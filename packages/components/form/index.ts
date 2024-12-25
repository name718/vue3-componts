import { withInstall } from '@mjt/utils/with-install'
import _FromItem from './src/form-item.vue'
import _From from './src/form.vue'

const FormItem = withInstall(_FromItem)
const Form = withInstall(_From)

export { FormItem, Form }
export default {}
export type { FormItemProps } from './src/form-item'
export type { FormProps } from './src/form'
declare module 'vue' {
  export interface GlobalComponents {
    ZFormItem: typeof FormItem
    ZForm: typeof Form
  }
}
