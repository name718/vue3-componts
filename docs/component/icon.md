# Icon 图标

z-ui 推荐使用 `@vicons/ionicons5` 作为图标库。

```
$ pnpm install @vicons/ionicons5
```

### 使用图标
- 如果你想像用例一样直接使用，你需要全局注册组件，才能够直接在项目中使用

<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5';
</script>

<template>
  <z-icon color="red" size="40">
    <CashOutline />
  </z-icon>

  <z-icon color="green" size="60">
    <CashOutline />
  </z-icon>

  <z-icon color="blue" size="60">
    <CashOutline />
  </z-icon>
</template>

```vue
<script setup lang="ts">
  import { CashOutline } from '@vicons/ionicons5';
</script>
<template>
  <z-icon color="red" size="40">
    <CashOutline />
  </z-icon>
</template>
```
## API

### Icon Props

|名称|类型|默认值|说明|
|---|----|-----|---|
|color|string|undefined|图标颜色|
|size|number\| string|undefined|图片大小|

