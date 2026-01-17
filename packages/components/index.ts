// 导出所有组件
export { default as Button } from './button'
export { default as Icon } from './icon'
export { default as Input } from './input'
export { default as Checkbox } from './checkbox'
export { default as Tree } from './tree'
export { Form, FormItem } from './form'
export { default as Upload } from './upload'
export { default as Calendar } from './calendar'
export { default as VirtualList } from './virtual-list'
export { default as VirtualScrollList } from './virtual-scroll-list'

// 导出类型
export * from './button'
export * from './icon'
export * from './input'
export * from './checkbox'
export * from './tree'
export * from './form'
export * from './upload'
export * from './calendar'
export * from './virtual-list'
export * from './virtual-scroll-list'

// 全量安装函数
import type { App } from 'vue'
import Button from './button'
import Icon from './icon'
import Input from './input'
import Checkbox from './checkbox'
import Tree from './tree'
import { Form, FormItem } from './form'
import Upload from './upload'
import Calendar from './calendar'
import VirtualList from './virtual-list'
import VirtualScrollList from './virtual-scroll-list'

const components = [
  Button,
  Icon,
  Input,
  Checkbox,
  Tree,
  Form,
  FormItem,
  Upload,
  Calendar,
  VirtualList,
  VirtualScrollList
]

export function install(app: App) {
  components.forEach((component) => {
    app.use(component)
  })
}

export default {
  install
}
