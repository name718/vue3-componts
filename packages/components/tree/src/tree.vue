<template>
    <div>tree</div>
</template>
<script setup lang="ts">
import { treeProps, TreeNode, TreeOptions } from './tree'
import { computed, ref, watch } from 'vue'
defineOptions({ name: 'z-tree' });
const props = defineProps(treeProps)

// 格式化数据
const tree = ref<TreeNode[]>([])
function createOptions(key: string, label: string, children: string) {
    return {
        getKey(node: TreeOptions) {
            return node[key] as string
        },
        getLabel(node: TreeOptions) {
            return node[label] as string
        },
        getChildren(node: TreeOptions) {
            return node[children] as TreeOptions[]
        }
    }
}

const treeOptions = createOptions(props.keyFiled, props.labelFiled, props.childrenFiled)
function createTree(data: TreeOptions[]): any {
    console.log('createTree', data)
    function traversal(data: TreeOptions[], parent: TreeNode | null = null): TreeNode[] {
        return data.map(node => {
            const children = treeOptions.getChildren(node) || []
            const treeNode: TreeNode = {
                key: treeOptions.getKey(node),
                label: treeOptions.getLabel(node),
                children: [],
                rawNode: node,
                level: parent ? parent.level + 1 : 0,
                isLeaf: node.isLeaf ?? children.length === 0
            }
            if (children.length > 0) {
                treeNode.children = traversal(children, treeNode)
            }
            return treeNode
        })
    }
    const result: TreeNode[] = traversal(data)
    return result
}

watch(() => props.data, (data: TreeOptions[]) => {
    tree.value = createTree(data)
    console.log(tree.value)
},
    {
        immediate: true
    })

// 拍平树结构
const expandedKeysSet = ref(new Set(props.defaultCheckedKeys))
const flattenTree = computed(() => {
    let expandedKeys = expandedKeysSet.value
    let flattenNodes: TreeNode[] = []
    const nodes = tree.value || []

    const stack: TreeNode[] = []

    for (let i = nodes.length - 1; i >= 0; i--) {
        stack.push(nodes[i])
    }
    while (stack.length) {
        const node = stack.pop()
        if (!node) continue
        flattenNodes.push(node)
        if (expandedKeys.has(node.key)) {
            const children = node.children
            if (children) {
                for (let i = node.children.length - 1; i >= 0; i--) {
                    stack.push(node.children[i])
                }
            }
        }
    }

    return flattenNodes
})
console.log(flattenTree.value)
</script>
