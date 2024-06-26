// 准备组件相关的属性和ts类型
import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const

type iconProps = ExtractPropTypes<typeof iconProps>

// type iconProps1 = {
//   color?: string
//   size?: string | number
// }
