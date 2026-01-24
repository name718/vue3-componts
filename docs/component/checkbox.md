# Checkbox 复选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换。

<demo>

```vue
<template>
  <div class="checkbox-demo">
    <z-checkbox v-model="checked">选项</z-checkbox>
    <p>选中状态：{{ checked }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>

<style scoped>
.checkbox-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

</demo>

## 禁用状态

通过 `disabled` 属性指定是否禁用复选框。

<demo>

```vue
<template>
  <div class="checkbox-demo">
    <z-checkbox v-model="checked1" disabled>禁用未选中</z-checkbox>
    <z-checkbox v-model="checked2" disabled>禁用已选中</z-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
</script>

<style scoped>
.checkbox-demo {
  display: flex;
  gap: 16px;
}
</style>
```

</demo>

## 半选状态

通过 `indeterminate` 属性设置半选状态，一般用于实现全选的效果。

<demo>

```vue
<template>
  <div class="checkbox-demo">
    <z-checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
    >
      全选
    </z-checkbox>
    <div class="checkbox-group">
      <z-checkbox
        v-for="item in options"
        :key="item"
        v-model="checkedItems[item]"
        @change="handleItemChange"
      >
        {{ item }}
      </z-checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const options = ['选项1', '选项2', '选项3']
const checkedItems = ref({
  选项1: true,
  选项2: false,
  选项3: false
})

const checkAll = computed(() => {
  return Object.values(checkedItems.value).every(v => v)
})

const isIndeterminate = computed(() => {
  const values = Object.values(checkedItems.value)
  const checkedCount = values.filter(v => v).length
  return checkedCount > 0 && checkedCount < values.length
})

const handleCheckAllChange = (val) => {
  options.forEach(item => {
    checkedItems.value[item] = val
  })
}

const handleItemChange = () => {
  // 触发响应式更新
}
</script>

<style scoped>
.checkbox-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 20px;
}
</style>
```

</demo>

## 带标签

通过 `label` 属性设置复选框的标签文本。

<demo>

```vue
<template>
  <div class="checkbox-demo">
    <z-checkbox v-model="checked" label="同意用户协议">
      我已阅读并同意
    </z-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false)
</script>
```

</demo>

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | boolean / string / number | - |
| disabled | 是否禁用 | boolean | false |
| indeterminate | 设置半选状态，只负责样式控制 | boolean | false |
| label | 复选框的标签 | string | - |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 当绑定值变化时触发的事件 | (value: boolean) => void |

### Checkbox Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 复选框的内容 |
