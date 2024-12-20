<script setup lang="ts">
  import { ref } from 'vue'
  import { AddCircle } from '@vicons/ionicons5'
  import { Key, TreeOptions } from '@mjt/components/tree'
  function createData(level = 4, parentKey = ''): any {
    if (!level) return []
    const arr = new Array(6 - level).fill(0)
    return arr.map((_, idx: number) => {
      const key = parentKey + level + idx
      return {
        label: createLabel(level),
        key: key,
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
  // function createData() {
  //   return [
  //     {
  //       label: nextLabel(),
  //       key: 1,
  //       isLeaf: false, // 这里修复了 `iSLeal` 为 `isLeaf`
  //     },
  //     {
  //       label: nextLabel(),
  //       key: 2,
  //       isLeaf: false,
  //     },
  //   ]
  // }

  function nextLabel(
    currentLabel?: string | undefined | string | number
  ): string {
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
  // const data = ref<TreeOptions[]>([
  //   {
  //     key: '0',
  //     label: '0',
  //     children: [
  //       {
  //         key: '0-0',
  //         label: '0-0',
  //       },
  //       {
  //         disabled: true,
  //         key: '0-1',
  //         label: '0-1',
  //         children: [
  //           {
  //             key: '0-1-0',
  //             label: '0-1-0',
  //           },
  //           {
  //             key: '0-1-1',
  //             label: '0-1-1',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ])
  // console.log(data)
  function handleLoad(node: TreeOptions) {
    return new Promise<TreeOptions[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            label: nextLabel(node.label),
            key: node.key + nextLabel(node.label),
            isLeaf: false
          }
        ])
      }, 1000)
    })
  }
  const value = ref<Key[]>([])
  const check = ref(true)
  const handleChange = (val: boolean) => {
    console.log(val)
  }
  const handleClick = () => {
    console.log('handleClick')
  }
</script>

<template>
  <div>
    <!-- <z-icon
      :color="'red'"
      :size="17"
    >
      <AddCircle />
    </z-icon>
    <z-icon
      :color="'yellow'"
      :size="17"
    >
      <AddCircle />
    </z-icon>
    {{ value }}
    <z-tree
      :data="data"
      :on-load="handleLoad"
      v-model:selected-keys="value"
      selectable
      show-checkbox
      :default-checked-keys="['40', '41']"
    >
      <template #default="{ node }">{{ node.key }} - {{ node.label }}</template>
    </z-tree>
    <z-checkbox
      v-model="check"
      :disabled="true"
      :indeterminate="true"
      label="节点"
      @change="handleChange"
    ></z-checkbox> -->
    <z-button>按钮</z-button>
    <z-button
      size="medium"
      type="warning"
      @click="handleClick"
    >
      大按钮
    </z-button>
    <z-button :loading="true">loading</z-button>
    <z-button :disabled="true">loading</z-button>
    <z-button :round="true">loading</z-button>
    <z-button>
      <template #icon>
        <z-icon>
          <AddCircle></AddCircle>
        </z-icon>
      </template>
    </z-button>
  </div>
</template>
