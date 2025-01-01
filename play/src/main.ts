import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@mjt/components/icon'
import Tree from '@mjt/components/tree'
import Checkbox from '@mjt/components/checkbox'
import Button from '@mjt/components/button'
import Input from '@mjt/components/input'
import { FormItem, Form } from '@mjt/components/form'
import Upload from '@mjt/components/upload'
import Calendar from '@mjt/components/calendar'
import '@mjt/theme-chalk/src/index.scss'

const plugins = [
  Calendar,
  Upload,
  Form,
  Icon,
  Tree,
  Checkbox,
  Button,
  Input,
  FormItem
]
const app = createApp(App)
plugins.forEach((plugin) => app.use(plugin))

app.mount('#app')
