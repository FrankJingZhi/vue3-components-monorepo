<template>
  <div :class="bem.b()">
    <WTreeNode
      v-for="node in flattenTree"
      :key="node.key"
      :node="node"
      :expanded="isExpanded(node)"
    >
    </WTreeNode>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { TreeNode, TreeOption, treeProps } from './tree'
import { createNamespace } from '@vue3-components-monorepo/utils/create'
import WTreeNode from './treeNode.vue'

const bem = createNamespace('tree')

defineOptions({
  name: 'WTree'
})

const props = defineProps(treeProps)

// 对props格式化为label、key、children
const tree = ref<TreeNode[]>([])

function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOption) {
      return node[key] as string
    },
    getLabel(node: TreeOption) {
      return node[label] as string
    },
    getChildren(node: TreeOption) {
      return node[children] as TreeNode[]
    }
  }
}

const treeOptions = createOptions(
  props.keyField,
  props.labelField,
  props.childrenField
)

const createTree = (data: TreeOption[]) => {
  function traversal(data: TreeOption[], parent: TreeNode | null = null) {
    return data.map(node => {
      let children = treeOptions.getChildren(node) || []
      const treeNode: TreeNode = {
        key: treeOptions.getKey(node),
        label: treeOptions.getLabel(node),
        children, // 默认为空
        rawNode: node,
        level: parent ? parent.level + 1 : 0,
        isLeaf: node.isLeaf ?? children.length === 0
      }
      if (children.length > 0) {
        // 有孩子继续递归，格式化成TreeNode类型
        treeNode.children = traversal(children, treeNode)
      }
      return treeNode
    })
  }
  const result: TreeNode[] = traversal(data)
  return result
}

// 监控数据变化，调用格式化方法，一上来先格式化一次
watch(
  () => props.data,
  (data: TreeOption[]) => {
    tree.value = createTree(data)
  },
  { immediate: true }
)

const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))

const flattenTree = computed(() => {
  const expandedKeys = expandedKeysSet.value
  const flattenNodes: TreeNode[] = []
  const nodes = tree.value || []
  const stack: TreeNode[] = []
  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i])
  }
  while (stack.length) {
    const node = stack.pop()
    if (!node) continue
    flattenNodes.push(node)
    if (expandedKeys.has(node.key)) {
      const children = node.children
      if (children) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i])
          expandedKeys.add(node.children[i].key)
        }
      }
    }
  }
  return flattenNodes
})

function isExpanded(node: TreeNode): boolean {
  return expandedKeysSet.value.has(node.key)
}

console.log('props', props)
console.log('tree', tree.value)
console.log('flattenTree', flattenTree.value)
</script>
