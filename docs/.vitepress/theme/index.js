import DefaultTheme from 'vitepress/theme'
import Icon from '@vue3-components-monorepo/components/index.ts'
import '@vue3-components-monorepo/theme-chalk/src/index.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(Icon) // 在vitepress中注册全局组件
  }
}
