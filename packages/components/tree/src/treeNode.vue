<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSeleted),
      bem.is('disabled', node.disabled)
    ]"
  >
    <div
      :class="bem.e('content')"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <span
        @click="handleExpand(node)"
        :class="[
          bem.e('expand-icon'),
          { expanded: props.expanded && !node.isLeaf },
          bem.is('leaf', node.isLeaf)
        ]"
      >
        <z-icon size="25">
          <Switcher v-if="!isLoading" />
          <Loading v-else />
        </z-icon>
      </span>
      <z-checkbox
        v-if="props.showCheckbox"
        module-value="checked"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="handleChange"
      ></z-checkbox>
      <span
        :class="bem.e('label')"
        @click="handleSeleted"
      >
        <ZTreeNodeContent :node="node" />
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed, inject } from 'vue'
  import {
    treeNodeProps,
    treeNodeEmitts,
    TreeNode,
    treeInjectKey
  } from './tree'
  import { createNamespace } from '@mjt/utils/create'
  import Switcher from '@mjt/components/internal-icon/Switcher'
  import Loading from '@mjt/components/internal-icon/Loading'
  import ZIcon from '@mjt/components/icon'
  import ZCheckbox from '@mjt/components/checkbox'
  import ZTreeNodeContent from './tree-node-content'

  const props = defineProps(treeNodeProps)
  const bem = createNamespace('tree-node')

  const emit = defineEmits(treeNodeEmitts)
  function handleExpand(node: TreeNode) {
    emit('toggle', props.node)
  }

  const isLoading = computed(() => {
    return props.loadingKeys.has(props.node.key)
  })

  const isSeleted = computed(() => {
    return props.selectedKeys.includes(props.node.key)
  })

  function handleSeleted() {
    if (props.node.disabled) return
    emit('select', props.node)
  }

  // 虚拟节点 不能直接使用
  // const treeContext = inject(treeInjectKey)
  // console.log(treeContext?.slots)

  function handleChange(val: boolean) {
    emit('check', props.node, val)
  }
</script>
