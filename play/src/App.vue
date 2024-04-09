<template>
  <WIcon color="red" size="30">
    <AddCircle></AddCircle>
  </WIcon>
  <WTree
    :data="data"
    label-field="label"
    key-field="key"
    children-field="children"
    :default-expanded-keys="['40', '41']"
  ></WTree>
</template>

<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5'
import { ref } from 'vue'

function createData(level = 4, parentKey = '') {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, index) => {
    const key = parentKey + level + index
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}
function createLabel(level: number): string {
  if (level === 4) return '道生一'
  if (level === 3) return '一生二'
  if (level === 2) return '二生三'
  if (level === 1) return '三生万物'
  return ''
}
const data = ref(createData())
console.log('data', data)
</script>

<style scoped></style>
