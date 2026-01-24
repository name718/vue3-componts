# Icon 图标

语义化的矢量图形，支持自定义颜色和大小。

## 基础用法

Nova UI 推荐使用 `@vicons/ionicons5` 作为图标库。

::: tip
如果你想直接使用图标，需要先安装图标库：
```bash
pnpm install @vicons/ionicons5
```
:::

<script setup lang="ts">
import { CashOutline, HeartOutline, StarOutline } from '@vicons/ionicons5';
</script>

<demo>

```vue
<template>
  <div class="icon-demo">
    <z-icon color="red" size="40">
      <CashOutline />
    </z-icon>
    <z-icon color="blue" size="40">
      <HeartOutline />
    </z-icon>
    <z-icon color="orange" size="40">
      <StarOutline />
    </z-icon>
  </div>
</template>

<script setup lang="ts">
import { CashOutline, HeartOutline, StarOutline } from '@vicons/ionicons5'
</script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
```

</demo>

## 不同尺寸

通过 `size` 属性设置图标大小。

<demo>

```vue
<template>
  <div class="icon-demo">
    <z-icon size="20"><CashOutline /></z-icon>
    <z-icon size="30"><CashOutline /></z-icon>
    <z-icon size="40"><CashOutline /></z-icon>
    <z-icon size="50"><CashOutline /></z-icon>
  </div>
</template>

<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5'
</script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
```

</demo>

## 自定义颜色

通过 `color` 属性设置图标颜色。

<demo>

```vue
<template>
  <div class="icon-demo">
    <z-icon color="#42b883" size="40"><CashOutline /></z-icon>
    <z-icon color="#35495e" size="40"><CashOutline /></z-icon>
    <z-icon color="#ff6b6b" size="40"><CashOutline /></z-icon>
    <z-icon color="#4ecdc4" size="40"><CashOutline /></z-icon>
  </div>
</template>

<script setup lang="ts">
import { CashOutline } from '@vicons/ionicons5'
</script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 20px;
  align-items: center;
}
</style>
```

</demo>

## API

### Icon Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 图标颜色 | string | - |
| size | 图标大小 | number / string | - |

### Icon Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 图标内容 |
