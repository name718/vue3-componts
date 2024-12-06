import DefaultTheme from 'vitepress/theme';
import ZIcon from '@mjt/components/icon'
import '@mjt/theme-chalk/src/index.scss'

console.log(ZIcon)
export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        console.log(app)
        app.component('z-icon', ZIcon);
    }
}
