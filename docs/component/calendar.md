# Calendar 日历

显示日期和月份。

## 基础用法

设置 `v-model` 来绑定选中的日期。

<demo>

```vue
<template>
  <div>
    <z-calendar v-model="date" />
    <p>选中的日期：{{ date?.toLocaleDateString() }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date())
</script>
```

</demo>

## 日期范围

通过 `range` 属性设置日历的显示范围。

<demo>

```vue
<template>
  <z-calendar v-model="date" :range="dateRange" />
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date())

// 设置日历范围为当前月份
const now = new Date()
const dateRange = [
  new Date(now.getFullYear(), now.getMonth(), 1),
  new Date(now.getFullYear(), now.getMonth() + 1, 0)
]
</script>
```

</demo>

## 自定义日期内容

可以通过插槽自定义日期单元格的内容。

<demo>

```vue
<template>
  <z-calendar v-model="date">
    <template #dateCell="{ date }">
      <div class="custom-date">
        <span>{{ date.day }}</span>
        <span v-if="isSpecialDay(date)" class="special-mark">•</span>
      </div>
    </template>
  </z-calendar>
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date())

const specialDays = [1, 8, 15, 22, 29]

const isSpecialDay = (date) => {
  return specialDays.includes(date.day)
}
</script>

<style scoped>
.custom-date {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.special-mark {
  position: absolute;
  bottom: 2px;
  color: #42b883;
  font-size: 20px;
}
</style>
```

</demo>

## 切换月份

日历组件内置了月份切换功能。

<demo>

```vue
<template>
  <div>
    <z-calendar v-model="date" @update:modelValue="handleDateChange" />
    <p>当前月份：{{ currentMonth }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const date = ref(new Date())

const currentMonth = computed(() => {
  return `${date.value.getFullYear()}年${date.value.getMonth() + 1}月`
})

const handleDateChange = (newDate) => {
  console.log('日期变化：', newDate)
}
</script>
```

</demo>

## 今天按钮

快速跳转到今天的日期。

<demo>

```vue
<template>
  <div>
    <div class="calendar-header">
      <z-button @click="goToToday">今天</z-button>
    </div>
    <z-calendar v-model="date" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date())

const goToToday = () => {
  date.value = new Date()
}
</script>

<style scoped>
.calendar-header {
  margin-bottom: 12px;
}
</style>
```

</demo>

## API

### Calendar Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | Date | - |
| range | 日期范围，指定日历的显示范围 | [Date, Date] | - |

### Calendar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 选中日期改变时触发 | (value: Date) => void |

### Calendar Slots

| 插槽名 | 说明 | 参数 |
| --- | --- | --- |
| dateCell | 日期单元格的内容 | { date: CalendarDateCell } |

### Calendar 日期对象

```typescript
interface CalendarDateCell {
  text: number                              // 日期数字
  type: 'prev' | 'current' | 'next'       // 日期类型
}
```

## 日期类型说明

- `prev`: 上个月的日期
- `current`: 当前月的日期
- `next`: 下个月的日期
