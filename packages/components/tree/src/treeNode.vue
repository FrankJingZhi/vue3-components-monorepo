<template>
  <div :class="bem.b()">
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        :class="[bem.e('expand-icon'), { expanded: expanded && !node?.isLeaf }]"
      >
        <WIcon size="16" color="pink">
          <CaretForward />
        </WIcon>
      </span>
      <span>{{ node?.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { createNamespace } from '@vue3-components-monorepo/utils/create'
import { treeNodeProps } from './tree'
import { CaretForward } from '@vicons/ionicons5'
import WIcon from '@vue3-components-monorepo/components/icon/index'

defineOptions({
  name: 'WTreeNode'
})
const bem = createNamespace('tree-node')
defineProps(treeNodeProps)
</script>
