<script setup lang="ts">
import { ref } from 'vue'
import { AddCircle } from "@vicons/ionicons5";
function createData(level = 4, parentKey = ''): any {
  if (!level) return []
  const arr = new Array(6 - level).fill(0)
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx
    return {
      label: createLabel(level),
      key: key,
      children: createData(level - 1, key),
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

const data = ref<Array<Record<string, any>>>(createData())
// console.log(data)
</script>

<template>
  <div>
    <z-icon :color="'red'" :size="17">
      <AddCircle />
    </z-icon>
    <z-icon :color="'yellow'" :size="17">
      <AddCircle />
    </z-icon>
    <z-tree :default-checked-keys="['40', '41']" :data="data" label-filed="label" key-filed="key"
      children-filed="children" s></z-tree>
  </div>
</template>
