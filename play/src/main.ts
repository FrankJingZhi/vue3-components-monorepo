import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@vue3-components-monorepo/components/icon/index'
import '@vue3-components-monorepo/theme-chalk/src/index.scss'
import Tree from '@vue3-components-monorepo/components/tree/index'

const plugins = [Icon, Tree]
const app = createApp(App)

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
