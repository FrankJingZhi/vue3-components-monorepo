import { ExtractPropTypes, PropType } from 'vue'

export type Key = string | number

export interface TreeOption {
  label?: Key
  key?: Key
  children?: TreeOption[]
  isLeaf: boolean
  [key: string]: unknown
}
// vue组件的props
export const treeProps = {
  // props只读
  data: {
    type: Array as PropType<TreeOption[]>,
    default: () => []
  },
  labelField: {
    type: String,
    default: 'label'
  },
  keyField: {
    type: String,
    default: 'key'
  },
  childrenField: {
    type: String,
    default: 'children'
  },
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => []
  }
} as const

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>

export interface TreeNode extends Required<TreeOption> {
  level: number
  rawNode: TreeOption
  children: TreeNode[]
  isLeaf: boolean
}

export const treeNodeProps = {
  node: {
    type: Object as PropType<TreeNode>,
    Required: true
  },
  expanded: {
    type: Boolean,
    default: false
  }
} as const
