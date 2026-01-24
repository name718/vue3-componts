# VirtualScrollList 虚拟滚动列表

支持虚拟滚动的高性能列表组件，适用于大数据量场景。

## 基础用法

虚拟滚动列表通过只渲染可视区域内的元素来提升性能。

<demo>

```vue
<template>
  <div class="virtual-scroll-demo">
    <z-virtual-scroll-list
      :data="items"
      :item-size="50"
      :container-height="400"
    >
      <template #default="{ item, index }">
        <div class="scroll-item">
          <span class="item-index">{{ index + 1 }}</span>
          <span class="item-content">{{ item.text }}</span>
        </div>
      </template>
    </z-virtual-scroll-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(
  Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `列表项 ${i + 1}`
  }))
)
</script>

<style scoped>
.virtual-scroll-demo {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.scroll-item {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
  gap: 12px;
}

.item-index {
  color: #999;
  min-width: 50px;
}

.item-content {
  flex: 1;
}

.scroll-item:hover {
  background-color: #f5f5f5;
}
</style>
```

</demo>

## 不同尺寸

可以设置不同的列表项尺寸。

<demo>

```vue
<template>
  <div class="size-demo">
    <div class="demo-section">
      <h4>小尺寸 (40px)</h4>
      <z-virtual-scroll-list
        :data="items"
        :item-size="40"
        :container-height="300"
      >
        <template #default="{ item }">
          <div class="scroll-item small">{{ item.text }}</div>
        </template>
      </z-virtual-scroll-list>
    </div>
    
    <div class="demo-section">
      <h4>大尺寸 (80px)</h4>
      <z-virtual-scroll-list
        :data="items"
        :item-size="80"
        :container-height="300"
      >
        <template #default="{ item }">
          <div class="scroll-item large">
            <h5>{{ item.title }}</h5>
            <p>{{ item.description }}</p>
          </div>
        </template>
      </z-virtual-scroll-list>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref(
  Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    text: `项目 ${i + 1}`,
    title: `标题 ${i + 1}`,
    description: `这是第 ${i + 1} 项的描述信息`
  }))
)
</script>

<style scoped>
.size-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.demo-section {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 12px;
}

.demo-section h4 {
  margin: 0 0 12px 0;
}

.scroll-item {
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
}

.scroll-item.small {
  height: 40px;
}

.scroll-item.large {
  height: 80px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.scroll-item h5 {
  margin: 0 0 4px 0;
}

.scroll-item p {
  margin: 0;
  font-size: 12px;
  color: #666;
}
</style>
```

</demo>

## 复杂列表项

支持渲染复杂的列表项内容。

<demo>

```vue
<template>
  <div class="complex-demo">
    <z-virtual-scroll-list
      :data="users"
      :item-size="100"
      :container-height="400"
    >
      <template #default="{ item }">
        <div class="user-item">
          <div class="user-avatar">
            {{ item.name.charAt(0) }}
          </div>
          <div class="user-info">
            <h4>{{ item.name }}</h4>
            <p>{{ item.email }}</p>
            <div class="user-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
          <div class="user-actions">
            <z-button size="small">查看</z-button>
          </div>
        </div>
      </template>
    </z-virtual-scroll-list>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const users = ref(
  Array.from({ length: 5000 }, (_, i) => ({
    id: i,
    name: `用户 ${i + 1}`,
    email: `user${i + 1}@example.com`,
    tags: ['标签1', '标签2'].slice(0, Math.floor(Math.random() * 2) + 1)
  }))
)
</script>

<style scoped>
.complex-demo {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.user-item {
  height: 100px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  gap: 16px;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #42b883, #35495e);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
}

.user-info {
  flex: 1;
}

.user-info h4 {
  margin: 0 0 4px 0;
  font-size: 16px;
}

.user-info p {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #666;
}

.user-tags {
  display: flex;
  gap: 6px;
}

.tag {
  padding: 2px 8px;
  background: #f0f0f0;
  border-radius: 3px;
  font-size: 12px;
  color: #666;
}

.user-actions {
  display: flex;
  gap: 8px;
}
</style>
```

</demo>

## 滚动到指定位置

可以通过方法滚动到指定的列表项。

<demo>

```vue
<template>
  <div>
    <div class="scroll-controls">
      <z-button @click="scrollToTop">滚动到顶部</z-button>
      <z-button @click="scrollToMiddle">滚动到中间</z-button>
      <z-button @click="scrollToBottom">滚动到底部</z-button>
      <z-input
        v-model="scrollIndex"
        type="number"
        placeholder="输入索引"
        style="width: 120px"
      />
      <z-button @click="scrollToIndex">跳转</z-button>
    </div>
    
    <div class="virtual-scroll-demo">
      <z-virtual-scroll-list
        ref="listRef"
        :data="items"
        :item-size="50"
        :container-height="400"
      >
        <template #default="{ item, index }">
          <div class="scroll-item">
            {{ index + 1 }}. {{ item.text }}
          </div>
        </template>
      </z-virtual-scroll-list>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const listRef = ref(null)
const scrollIndex = ref('')

const items = ref(
  Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    text: `列表项 ${i + 1}`
  }))
)

const scrollToTop = () => {
  listRef.value?.scrollToIndex(0)
}

const scrollToMiddle = () => {
  listRef.value?.scrollToIndex(Math.floor(items.value.length / 2))
}

const scrollToBottom = () => {
  listRef.value?.scrollToIndex(items.value.length - 1)
}

const scrollToIndex = () => {
  const index = parseInt(scrollIndex.value)
  if (!isNaN(index) && index >= 0 && index < items.value.length) {
    listRef.value?.scrollToIndex(index)
  }
}
</script>

<style scoped>
.scroll-controls {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.virtual-scroll-demo {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.scroll-item {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #f0f0f0;
}
</style>
```

</demo>

## API

### VirtualScrollList Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 列表数据源 | array | [] |
| item-size | 每个列表项的高度 | number | 50 |
| container-height | 容器高度 | number | 400 |
| buffer-size | 缓冲区大小，额外渲染的项数 | number | 5 |

### VirtualScrollList Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| default | 列表项内容 | { item, index } |

### VirtualScrollList Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| scrollToIndex | 滚动到指定索引的列表项 | (index: number) => void |
| scrollToTop | 滚动到列表顶部 | () => void |
| scrollToBottom | 滚动到列表底部 | () => void |

## 使用场景

虚拟滚动列表适用于以下场景：

1. **大数据量列表**：需要展示成千上万条数据
2. **实时数据流**：需要不断追加新数据的场景
3. **性能敏感**：对渲染性能有较高要求的应用
4. **移动端优化**：需要在移动设备上流畅滚动

## 性能对比

| 数据量 | 普通列表 | 虚拟滚动列表 |
| --- | --- | --- |
| 100 条 | 流畅 | 流畅 |
| 1,000 条 | 较慢 | 流畅 |
| 10,000 条 | 卡顿 | 流畅 |
| 100,000 条 | 无法使用 | 流畅 |
