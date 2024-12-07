<template>
    <div>tree</div>
</template>
<script setup lang="ts">
import { treeProps, TreeNode, TreeOptions } from './tree'
import { ref, watch } from 'vue'
defineOptions({ name: 'z-tree' });
const props = defineProps(treeProps)

// 格式化数据
const tree = ref<TreeNode>([])

function createTree(data: TreeOptions[]): any {
    console.log('createTree', data)
}

watch(() => props.data, (data: TreeOptions[]) => {
    tree.value = createTree(data)
},
    {
        immediate: true
    })

</script>
