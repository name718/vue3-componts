import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@mjt/components/icon'
import Tree from '@mjt/components/tree'
import Checkbox from '@mjt/components/checkbox'
import Button from '@mjt/components/button'
import Input from '@mjt/components/input'
import '@mjt/theme-chalk/src/index.scss'

const plugins = [Icon, Tree, Checkbox, Button, Input]
const app = createApp(App)
plugins.forEach((plugin) => app.use(plugin))

app.mount('#app')
