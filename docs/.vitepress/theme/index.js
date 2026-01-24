import DefaultTheme from 'vitepress/theme';
import './custom.css'

export default {
    ...DefaultTheme,
    enhanceApp({app}) {
        // 组件可以在需要时按需导入
    }
}
