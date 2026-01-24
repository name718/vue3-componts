import {withInstall} from "@nova-ui/utils/with-install";
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon)

export default Icon

export * from './src/icon'

// 这段代码的作用是扩展 Vue 的全局组件类型定义，
// 使得 ZIcon 组件可以在任何地方（无需显式注册）
// 被自动识别和使用，同时能够提供类型推断支持。
declare module 'vue' {
    export interface GlobalComponents {
        ZIcon: typeof Icon
    }
}
