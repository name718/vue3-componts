<script setup lang="ts">
import { ref } from 'vue'
import { AddCircle } from "@vicons/ionicons5";
import { TreeOptions } from '@mjt/components/tree';
// function createData(level = 4, parentKey = ''): any {
//   if (!level) return []
//   const arr = new Array(6 - level).fill(0)
//   return arr.map((_, idx: number) => {
//     const key = parentKey + level + idx
//     return {
//       label: createLabel(level),
//       key: key,
//       children: createData(level - 1, key),
//     }
//   })
// }

// function createLabel(level: number): string {
//   if (level === 4) return '道生一'
//   if (level === 3) return '一生二'
//   if (level === 2) return '二生三'
//   if (level === 1) return '三生万物'
//   return ''
// }
function createData() {
  return [
    {
      label: nextLabel(),
      key: 1,
      isLeaf: false, // 这里修复了 `iSLeal` 为 `isLeaf`
    },
    {
      label: nextLabel(),
      key: 2,
      isLeaf: false,
    },
  ]
}

function nextLabel(currentLabel?: string | undefined | string | number): string {
  if (!currentLabel) return 'Out of Tao, One is born'
  if (currentLabel === 'Out of Tao, One is born') return 'Out of One, Two'
  if (currentLabel === 'Out of One, Two') return 'Out of Two, Three'
  if (currentLabel === 'Out of Two, Three') {
    return 'Out of Three, the created universe'
  }
  if (currentLabel === 'Out of Three, the created universe') {
    return 'Out of Tao, One is born'
  }
  return ''
}

const data = ref(createData())
// console.log(data)
function handleLoad(node: TreeOptions) {
  return new Promise<TreeOptions[]>((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        label: nextLabel(node.label),
        key: node.key + nextLabel(node.label),
        isLeaf: false
      }])
    }, 1000)
  })
}
</script>

<template>
  <div>
    <z-icon :color="'red'" :size="17">
      <AddCircle />
    </z-icon>
    <z-icon :color="'yellow'" :size="17">
      <AddCircle />
    </z-icon>
    <z-tree :data="data" :on-load="handleLoad"></z-tree>
  </div>
</template>
