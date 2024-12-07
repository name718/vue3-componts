import {createApp} from 'vue'
import App from './App.vue'
import Icon from '@mjt/components/icon'
import Tree from '@mjt/components/tree'
import '@mjt/theme-chalk/src/index.scss'


const plugins = [Icon,Tree]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
