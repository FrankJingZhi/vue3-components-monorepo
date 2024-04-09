import { withInstall } from '@vue3-components-monorepo/utils/with-install'
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon)

console.log(_Icon, Icon)

export default Icon
export * from './src/icon'

// 给vue文件扩展一个全局的声明
declare module 'vue' {
  export interface GlobalComponents {
    // 扩展一个名为 WIcon 的全局组件
    WIcon: typeof Icon
  }
}
