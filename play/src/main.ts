import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@nova-ui/components/icon'
import Tree from '@nova-ui/components/tree'
import Checkbox from '@nova-ui/components/checkbox'
import Button from '@nova-ui/components/button'
import Input from '@nova-ui/components/input'
import { FormItem, Form } from '@nova-ui/components/form'
import Upload from '@nova-ui/components/upload'
import Calendar from '@nova-ui/components/calendar'
import VirtualScrollList from '@nova-ui/components/virtual-scroll-list'
import '@nova-ui/theme-chalk/src/index.scss'

const plugins = [
  Calendar,
  Upload,
  Form,
  Icon,
  Tree,
  Checkbox,
  Button,
  Input,
  FormItem,
  VirtualScrollList
]
const app = createApp(App)
plugins.forEach((plugin) => app.use(plugin))

app.mount('#app')
