import { withInstall } from '@mjt/utils/with-install'
import _FromItem from './src/form-item.vue'

const FormItem = withInstall(_FromItem)

export { FormItem }
export default {}
export type { formItemProps } from './src/form-item'

declare module 'vue' {
  export interface GlobalComponents {
    ZFormItem: typeof FormItem
  }
}
