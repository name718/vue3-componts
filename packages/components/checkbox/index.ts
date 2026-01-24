import { withInstall } from '@nova-ui/utils/with-install'
import _Checkbox from './src/checkbox.vue'
const Checkbox = withInstall(_Checkbox)

export default Checkbox
declare module 'vue' {
  export interface GlobalComponents {
    ZCheckbox: typeof _Checkbox
  }
}
export * from './src/checkbox'
