<template>
  <div :class="bem.b()">
    <z-virtual-list
      :item="flattenTree"
      :remain="8"
      :size="35"
    >
      <template #default="{ node }">
        <z-tree-node
          :loadingKeys="loadingKeyRef"
          @toggle="toggleExpand"
          :expanded="isExpanded(node)"
          :key="node.key"
          :node="node"
          :selectedKeys="selectedKeys"
          @select="handleSelect"
          :showCheckbox="showCheckbox"
          :checked="isChecked(node)"
          :disabled="isDisabled(node)"
          :indeterminate="isIndeterminate(node)"
          @check="toggleCheck"
        ></z-tree-node>
      </template>
    </z-virtual-list>
  </div>
</template>
<script setup lang="ts">
  import { createNamespace } from '@mjt/utils/create'
  import {
    treeProps,
    TreeNode,
    TreeOptions,
    Key,
    treeEmitts,
    treeInjectKey
  } from './tree'
  import { computed, onMounted, provide, ref, useSlots, watch } from 'vue'
  import ZTreeNode from './treeNode.vue'
  import ZVirtualList from '@mjt/components/virtual-list'

  defineOptions({ name: 'z-tree' })
  const props = defineProps(treeProps)

  const bem = createNamespace('tree')
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

  const treeOptions = createOptions(
    props.keyFiled,
    props.labelFiled,
    props.childrenFiled
  )
  function createTree(
    data: TreeOptions[],
    parent: TreeNode | null = null
  ): any {
    console.log('createTree', data)
    function traversal(
      data: TreeOptions[],
      parent: TreeNode | null = null
    ): TreeNode[] {
      return data.map((node) => {
        const children = treeOptions.getChildren(node) || []
        const treeNode: TreeNode = {
          key: treeOptions.getKey(node),
          label: treeOptions.getLabel(node),
          children: [],
          rawNode: node,
          level: parent ? parent.level + 1 : 0,
          isLeaf: node.isLeaf ?? children.length === 0,
          disabled: !!node.disabled,
          parentKey: parent?.key
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

  watch(
    () => props.data,
    (data: TreeOptions[]) => {
      tree.value = createTree(data)
      console.log(tree.value)
    },
    {
      immediate: true
    }
  )

  // 拍平树结构
  const expandedKeysSet = ref(new Set(props.defaultExpandedKeys))
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

  function isExpanded(node: TreeNode): boolean {
    return expandedKeysSet.value.has(node.key)
  }
  function collpase(node: TreeNode) {
    expandedKeysSet.value.delete(node.key)
  }

  const loadingKeyRef = ref(new Set<Key>())
  function triggerLoading(node: TreeNode) {
    if (!node.children.length && !node.isLeaf) {
      const loadingKeys = loadingKeyRef.value
      if (!loadingKeys.has(node.key)) {
        loadingKeys.add(node.key)
        const onLoad = props.onLoad
        if (onLoad) {
          onLoad(node.rawNode).then((children) => {
            node.rawNode.children = children
            node.children = createTree(children, node)
            loadingKeys.delete(node.key)
          })
        }
      }
    }
  }
  function expand(node: TreeNode) {
    expandedKeysSet.value.add(node.key)
    triggerLoading(node)
  }

  function toggleExpand(node: TreeNode) {
    const expandKeys = expandedKeysSet.value
    if (expandKeys.has(node.key) && !loadingKeyRef.value.has(node.key)) {
      collpase(node)
    } else {
      expand(node)
    }
  }

  const emit = defineEmits(treeEmitts)

  const selectedKeysRef = ref<Key[]>([])

  watch(
    () => props.selectedKeys,
    (value) => {
      if (value) {
        selectedKeysRef.value = value
        console.log('selectedKeysRef', value)
      }
    },
    { immediate: true }
  )

  function handleSelect(node: TreeNode) {
    let keys = Array.from(selectedKeysRef.value)
    if (!props.selectable) return

    if (props.multiple) {
      const index = keys.findIndex((key) => key === node.key)
      if (index > -1) {
        keys.splice(index, 1)
      } else {
        keys.push(node.key)
      }
    } else {
      if (keys.includes(node.key)) {
        keys = []
      } else {
        keys = [node.key]
      }
    }

    emit('update:selectedKeys', keys)
  }
  provide(treeInjectKey, {
    slots: useSlots()
  })
  const checkedKeysRef = ref(new Set(props.defaultCheckedKeys))

  function isChecked(node: TreeNode) {
    return checkedKeysRef.value.has(node.key)
  }
  function isDisabled(node: TreeNode) {
    return !!node.disabled
  }

  const indeterminateRefs = ref<Set<Key>>(new Set())
  function isIndeterminate(node: TreeNode) {
    return indeterminateRefs.value.has(node.key)
  }
  function toogle(node: TreeNode, checked: boolean) {
    let checkedKeys = checkedKeysRef.value
    checkedKeys[checked ? 'add' : 'delete'](node.key)
    if (checked) {
      indeterminateRefs.value.delete(node.key)
    }
    let children = node.children
    if (children) {
      children.forEach((childNode) => {
        if (!childNode.disabled) {
          toogle(childNode, checked)
        }
      })
    }
  }
  function findNode(key: Key) {
    return flattenTree.value.find((node) => node.key === key)
  }
  function updateCheckedKeys(node: TreeNode) {
    if (node.parentKey) {
      let parentNode = findNode(node.parentKey)
      if (parentNode) {
        let allChecked = true
        let hasChecked = false

        let nodes = parentNode.children

        for (let node of nodes) {
          if (checkedKeysRef.value.has(node.key)) {
            hasChecked = true
          } else if (indeterminateRefs.value.has(node.key)) {
            allChecked = false
          } else {
            allChecked = false
          }
        }
        if (allChecked) {
          checkedKeysRef.value.add(node.key)
          indeterminateRefs.value.delete(parentNode.key)
        } else if (hasChecked) {
          checkedKeysRef.value.delete(node.key)
          indeterminateRefs.value.add(parentNode.key)
        }
        updateCheckedKeys(parentNode)
      }
    }
  }
  function toggleCheck(node: TreeNode, checked: boolean) {
    toogle(node, checked)
    updateCheckedKeys(node)
    return true
  }

  onMounted(() => {
    // checkedKeysRef.value.forEach((key) => {
    //   toggleCheck(findNode(key)!, true)
    // })
  })
</script>
