# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

<demo>

```vue
<template>
  <z-tree :data="data" />
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    label: '一级 1',
    key: '1',
    children: [
      {
        label: '二级 1-1',
        key: '1-1',
        children: [
          { label: '三级 1-1-1', key: '1-1-1' }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    key: '2',
    children: [
      { label: '二级 2-1', key: '2-1' },
      { label: '二级 2-2', key: '2-2' }
    ]
  },
  {
    label: '一级 3',
    key: '3',
    children: [
      { label: '二级 3-1', key: '3-1' },
      { label: '二级 3-2', key: '3-2' }
    ]
  }
])
</script>
```

</demo>

## 可选择

通过 `selectable` 属性开启节点选择功能。

<demo>

```vue
<template>
  <div>
    <z-tree
      :data="data"
      :selected-keys="selectedKeys"
      @update:selected-keys="handleSelect"
    />
    <p>已选择：{{ selectedKeys }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedKeys = ref(['1-1'])

const data = ref([
  {
    label: '一级 1',
    key: '1',
    children: [
      { label: '二级 1-1', key: '1-1' },
      { label: '二级 1-2', key: '1-2' }
    ]
  },
  {
    label: '一级 2',
    key: '2',
    children: [
      { label: '二级 2-1', key: '2-1' },
      { label: '二级 2-2', key: '2-2' }
    ]
  }
])

const handleSelect = (keys) => {
  selectedKeys.value = keys
  console.log('选中的节点：', keys)
}
</script>
```

</demo>

## 多选

通过 `multiple` 属性开启多选模式。

<demo>

```vue
<template>
  <div>
    <z-tree
      :data="data"
      :selected-keys="selectedKeys"
      multiple
      @update:selected-keys="handleSelect"
    />
    <p>已选择：{{ selectedKeys.join(', ') }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedKeys = ref(['1-1', '2-1'])

const data = ref([
  {
    label: '一级 1',
    key: '1',
    children: [
      { label: '二级 1-1', key: '1-1' },
      { label: '二级 1-2', key: '1-2' }
    ]
  },
  {
    label: '一级 2',
    key: '2',
    children: [
      { label: '二级 2-1', key: '2-1' },
      { label: '二级 2-2', key: '2-2' }
    ]
  }
])

const handleSelect = (keys) => {
  selectedKeys.value = keys
}
</script>
```

</demo>

## 复选框

通过 `show-checkbox` 属性显示复选框。

<demo>

```vue
<template>
  <div>
    <z-tree
      :data="data"
      :default-checked-keys="checkedKeys"
      show-checkbox
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const checkedKeys = ref(['1-1', '2-1'])

const data = ref([
  {
    label: '一级 1',
    key: '1',
    children: [
      { label: '二级 1-1', key: '1-1' },
      { label: '二级 1-2', key: '1-2' }
    ]
  },
  {
    label: '一级 2',
    key: '2',
    children: [
      { label: '二级 2-1', key: '2-1' },
      { label: '二级 2-2', key: '2-2' }
    ]
  }
])
</script>
```

</demo>

## 默认展开

通过 `default-expanded-keys` 属性设置默认展开的节点。

<demo>

```vue
<template>
  <z-tree :data="data" :default-expanded-keys="['1', '2']" />
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    label: '一级 1',
    key: '1',
    children: [
      { label: '二级 1-1', key: '1-1' },
      { label: '二级 1-2', key: '1-2' }
    ]
  },
  {
    label: '一级 2',
    key: '2',
    children: [
      { label: '二级 2-1', key: '2-1' },
      { label: '二级 2-2', key: '2-2' }
    ]
  }
])
</script>
```

</demo>

## 异步加载

通过 `on-load` 属性实现异步加载子节点数据。

<demo>

```vue
<template>
  <z-tree :data="data" :on-load="loadNode" />
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  { label: '一级 1', key: '1', isLeaf: false },
  { label: '一级 2', key: '2', isLeaf: false }
])

const loadNode = (node) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { label: `${node.label} - 子节点 1`, key: `${node.key}-1`, isLeaf: true },
        { label: `${node.label} - 子节点 2`, key: `${node.key}-2`, isLeaf: true }
      ])
    }, 1000)
  })
}
</script>
```

</demo>

## 禁用节点

通过节点的 `disabled` 属性禁用节点。

<demo>

```vue
<template>
  <z-tree :data="data" show-checkbox />
</template>

<script setup>
import { ref } from 'vue'

const data = ref([
  {
    label: '一级 1',
    key: '1',
    children: [
      { label: '二级 1-1（禁用）', key: '1-1', disabled: true },
      { label: '二级 1-2', key: '1-2' }
    ]
  },
  {
    label: '一级 2（禁用）',
    key: '2',
    disabled: true,
    children: [
      { label: '二级 2-1', key: '2-1' },
      { label: '二级 2-2', key: '2-2' }
    ]
  }
])
</script>
```

</demo>

## API

### Tree Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 展示数据 | array | [] |
| default-expanded-keys | 默认展开的节点的 key 数组 | array | [] |
| label-filed | 指定节点标签为节点对象的某个属性值 | string | label |
| key-filed | 指定节点 key 为节点对象的某个属性值 | string | key |
| children-filed | 指定子树为节点对象的某个属性值 | string | children |
| on-load | 加载子树数据的方法，仅当节点 isLeaf 为 false 时生效 | function(node) | - |
| selected-keys | 选中的节点 key 数组 | array | [] |
| selectable | 是否可选择 | boolean | true |
| multiple | 是否支持多选 | boolean | false |
| default-checked-keys | 默认勾选的节点的 key 数组 | array | [] |
| show-checkbox | 是否显示复选框 | boolean | false |

### Tree Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:selected-keys | 选中节点变化时触发 | (keys: array) => void |

### Tree 数据结构

```typescript
interface TreeNode {
  label?: string | number    // 节点标签
  key?: string | number      // 节点唯一标识
  children?: TreeNode[]      // 子节点
  isLeaf?: boolean          // 是否为叶子节点
  disabled?: boolean        // 是否禁用
  [key: string]: any        // 其他自定义属性
}
```
