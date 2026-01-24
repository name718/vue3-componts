# VirtualList 虚拟列表

高性能的虚拟列表组件，用于渲染大量数据。

## 基础用法

虚拟列表只渲染可见区域的元素，大大提升大数据量场景下的性能。

<demo>

```vue
<template>
  <div class="virtual-list-demo">
    <z-virtual-list
      :data="items"
      :item-height="50"
      :height="400"
    >
      <template #default="{ item, index }">
        <div class="list-item">
          {{ index + 1 }}. {{ item.name }}
        </div>
      </template>
    </z-virtual-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(
  Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    name: `Item ${i + 1}`
  }))
)
</script>

<style scoped>
.virtual-list-demo {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list-item {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
}

.list-item:hover {
  background-color: #f5f5f5;
}
</style>
```

</demo>

## 动态高度

支持不同高度的列表项。

<demo>

```vue
<template>
  <div class="virtual-list-demo">
    <z-virtual-list
      :data="items"
      :item-height="getItemHeight"
      :height="400"
    >
      <template #default="{ item, index }">
        <div class="list-item" :style="{ height: getItemHeight(index) + 'px' }">
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </template>
    </z-virtual-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    title: `标题 ${i + 1}`,
    description: i % 3 === 0 
      ? '这是一段较长的描述文字，用于展示不同高度的列表项效果。' 
      : '简短描述'
  }))
)

const getItemHeight = (index) => {
  return index % 3 === 0 ? 80 : 60
}
</script>

<style scoped>
.virtual-list-demo {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.list-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.item-content h4 {
  margin: 0 0 4px 0;
  font-size: 14px;
}

.item-content p {
  margin: 0;
  font-size: 12px;
  color: #666;
}
</style>
```

</demo>

## 大数据量

虚拟列表可以轻松处理数万条数据。

<demo>

```vue
<template>
  <div>
    <p>总数据量：{{ items.length.toLocaleString() }} 条</p>
    <div class="virtual-list-demo">
      <z-virtual-list
        :data="items"
        :item-height="40"
        :height="400"
      >
        <template #default="{ item, index }">
          <div class="list-item">
            <span class="item-index">{{ index + 1 }}</span>
            <span class="item-name">{{ item.name }}</span>
            <span class="item-value">{{ item.value }}</span>
          </div>
        </template>
      </z-virtual-list>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(
  Array.from({ length: 50000 }, (_, i) => ({
    id: i,
    name: `数据项 ${i + 1}`,
    value: Math.floor(Math.random() * 1000)
  }))
)
</script>

<style scoped>
.virtual-list-demo {
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 12px;
}

.list-item {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
  gap: 12px;
}

.item-index {
  color: #999;
  min-width: 60px;
}

.item-name {
  flex: 1;
}

.item-value {
  color: #42b883;
  font-weight: bold;
}
</style>
```

</demo>

## API

### VirtualList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 列表数据 | array | [] |
| item-height | 列表项高度，可以是固定值或函数 | number / function(index) | - |
| height | 列表容器高度 | number | - |
| buffer | 缓冲区大小，渲染可见区域外的额外项数 | number | 5 |

### VirtualList Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 列表项内容 | { item, index } |

## 性能优化建议

1. **固定高度优先**：如果列表项高度一致，使用固定高度可以获得最佳性能
2. **合理设置缓冲区**：增加 buffer 可以减少快速滚动时的白屏，但会增加渲染开销
3. **避免复杂计算**：在列表项模板中避免复杂的计算和方法调用
4. **使用 key**：确保每个列表项有唯一的 key 值以优化 diff 算法
