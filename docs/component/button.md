# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type` 属性来定义按钮的样式。

<demo>

```vue
<template>
  <div class="demo-button">
    <mjt-button>默认按钮</mjt-button>
    <mjt-button type="primary">主要按钮</mjt-button>
    <mjt-button type="success">成功按钮</mjt-button>
    <mjt-button type="info">信息按钮</mjt-button>
    <mjt-button type="warning">警告按钮</mjt-button>
    <mjt-button type="danger">危险按钮</mjt-button>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
```

</demo>

## 禁用状态

使用 `disabled` 属性来定义按钮是否被禁用。

<demo>

```vue
<template>
  <div class="demo-button">
    <mjt-button disabled>默认按钮</mjt-button>
    <mjt-button type="primary" disabled>主要按钮</mjt-button>
    <mjt-button type="success" disabled>成功按钮</mjt-button>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  gap: 12px;
}
</style>
```

</demo>

## 不同尺寸

提供三种不同尺寸的按钮。

<demo>

```vue
<template>
  <div class="demo-button">
    <mjt-button size="large">大型按钮</mjt-button>
    <mjt-button>默认按钮</mjt-button>
    <mjt-button size="small">小型按钮</mjt-button>
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
```

</demo>

## 加载状态

点击按钮进行数据加载操作，在按钮上显示加载状态。

<demo>

```vue
<template>
  <div class="demo-button">
    <mjt-button type="primary" :loading="loading" @click="handleClick">
      {{ loading ? '加载中...' : '点击加载' }}
    </mjt-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.demo-button {
  display: flex;
  gap: 12px;
}
</style>
```

</demo>

## 图标按钮

带图标的按钮可增强辨识度或节省空间。

<demo>

```vue
<template>
  <div class="demo-button">
    <mjt-button type="primary" icon="search">搜索</mjt-button>
    <mjt-button type="success" icon="check">确认</mjt-button>
    <mjt-button type="danger" icon="delete">删除</mjt-button>
    <mjt-button type="primary" icon="upload" />
  </div>
</template>

<style scoped>
.demo-button {
  display: flex;
  gap: 12px;
}
</style>
```

</demo>

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

<demo>

```vue
<template>
  <div class="demo-button-group">
    <mjt-button-group>
      <mjt-button type="primary" icon="arrow-left">上一页</mjt-button>
      <mjt-button type="primary" icon="arrow-right">下一页</mjt-button>
    </mjt-button-group>
  </div>
</template>

<style scoped>
.demo-button-group {
  display: flex;
  gap: 12px;
}
</style>
```

</demo>

## API

### Button Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 按钮类型 | string | default / primary / success / info / warning / danger | default |
| size | 按钮尺寸 | string | large / default / small | default |
| disabled | 是否禁用 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| icon | 图标名称 | string | — | — |
| round | 是否圆角按钮 | boolean | — | false |
| circle | 是否圆形按钮 | boolean | — | false |
| plain | 是否朴素按钮 | boolean | — | false |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | (event: MouseEvent) => void |

### Button Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容 |
| icon | 自定义图标 |
