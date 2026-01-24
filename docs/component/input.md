# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

<demo>

```vue
<template>
  <div class="input-demo">
    <z-input v-model="input" placeholder="请输入内容" />
    <p>输入的内容：{{ input }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style scoped>
.input-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

</demo>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

<demo>

```vue
<template>
  <div class="input-demo">
    <z-input v-model="input" placeholder="禁用状态" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

</demo>

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框。

<demo>

```vue
<template>
  <div class="input-demo">
    <z-input v-model="input" placeholder="请输入内容" clearable />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('可清空的内容')
</script>
```

</demo>

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

<demo>

```vue
<template>
  <div class="input-demo">
    <z-input
      v-model="password"
      type="password"
      placeholder="请输入密码"
      show-password
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const password = ref('')
</script>
```

</demo>

## 不同类型

通过 `type` 属性指定输入框类型。

<demo>

```vue
<template>
  <div class="input-demo">
    <z-input v-model="text" placeholder="文本输入" />
    <z-input v-model="number" type="number" placeholder="数字输入" />
    <z-input v-model="email" type="email" placeholder="邮箱输入" />
    <z-input v-model="password" type="password" placeholder="密码输入" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const number = ref('')
const email = ref('')
const password = ref('')
</script>

<style scoped>
.input-demo {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
```

</demo>

## 只读状态

通过 `readonly` 属性指定输入框为只读。

<demo>

```vue
<template>
  <div class="input-demo">
    <z-input v-model="input" placeholder="只读状态" readonly />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('只读内容')
</script>
```

</demo>

## API

### Input Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | string / number | - |
| type | 输入框类型 | string | text |
| placeholder | 输入框占位文本 | string | - |
| clearable | 是否可清空 | boolean | false |
| show-password | 是否显示切换密码图标 | boolean | false |
| disabled | 是否禁用 | boolean | false |
| readonly | 是否只读 | boolean | false |
| label | 输入框关联的 label 文字 | string | - |

### Input Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 在 Input 值改变时触发 | (value: string) => void |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string) => void |
| focus | 在 Input 获得焦点时触发 | (event: FocusEvent) => void |
| blur | 在 Input 失去焦点时触发 | (event: FocusEvent) => void |
| clear | 在点击由 clearable 属性生成的清空按钮时触发 | () => void |

### Input Slots

| 插槽名 | 说明 |
| --- | --- |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
