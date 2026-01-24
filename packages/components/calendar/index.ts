import { withInstall } from '@nova-ui/utils/with-install'
import _Calendar from './src/calendar.vue'

const Calendar = withInstall(_Calendar)

export default Calendar

export * from './src/calendar'

// 这段代码的作用是扩展 Vue 的全局组件类型定义，
// 使得 ZIcon 组件可以在任何地方（无需显式注册）
// 被自动识别和使用，同时能够提供类型推断支持。
declare module 'vue' {
  export interface GlobalComponents {
    ZCalendar: typeof Calendar
  }
}
