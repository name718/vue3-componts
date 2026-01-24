# 快速上手

本节将介绍如何在项目中使用 Nova UI。

## 安装

::: code-group

```bash [pnpm]
pnpm install @nova-ui/components @nova-ui/theme-chalk
```

```bash [npm]
npm install @nova-ui/components @nova-ui/theme-chalk
```

```bash [yarn]
yarn add @nova-ui/components @nova-ui/theme-chalk
```

:::

## 完整引入

如果你对打包体积不是很在乎，可以完整引入所有组件：

```typescript
// main.ts
import { createApp } from 'vue'
import NovaUI from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(NovaUI)
app.mount('#app')
```

## 按需引入（推荐）

推荐使用按需引入的方式，可以有效减小打包体积。

### 手动引入

```vue
<template>
  <nova-button type="primary" @click="handleClick">
    点击我
  </nova-button>
</template>

<script setup lang="ts">
import { NovaButton } from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### 全局注册

如果某些组件在多个地方使用，可以全局注册：

```typescript
// main.ts
import { createApp } from 'vue'
import { NovaButton, NovaIcon, NovaInput } from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'
import App from './App.vue'

const app = createApp(App)

// 全局注册常用组件
app.use(NovaButton)
app.use(NovaIcon)
app.use(NovaInput)

app.mount('#app')
```

## 基础示例

### 按钮组件

```vue
<template>
  <div class="button-demo">
    <nova-button>默认按钮</nova-button>
    <nova-button type="primary">主要按钮</nova-button>
    <nova-button type="success">成功按钮</nova-button>
    <nova-button type="warning">警告按钮</nova-button>
    <nova-button type="danger">危险按钮</nova-button>
  </div>
</template>

<script setup lang="ts">
import { NovaButton } from '@nova-ui/components'
</script>

<style scoped>
.button-demo {
  display: flex;
  gap: 12px;
}
</style>
```

### 表单组件

```vue
<template>
  <nova-form :model="form" label-width="80px">
    <nova-form-item label="用户名">
      <nova-input v-model="form.username" placeholder="请输入用户名" />
    </nova-form-item>
    
    <nova-form-item label="密码">
      <nova-input 
        v-model="form.password" 
        type="password" 
        placeholder="请输入密码" 
      />
    </nova-form-item>
    
    <nova-form-item label="记住我">
      <nova-checkbox v-model="form.remember">记住密码</nova-checkbox>
    </nova-form-item>
    
    <nova-form-item>
      <nova-button type="primary" @click="handleSubmit">
        登录
      </nova-button>
    </nova-form-item>
  </nova-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { NovaForm, NovaFormItem, NovaInput, NovaCheckbox, NovaButton } from '@nova-ui/components'

const form = reactive({
  username: '',
  password: '',
  remember: false
})

const handleSubmit = () => {
  console.log('提交表单:', form)
}
</script>
```

## TypeScript 支持

Nova UI 提供完整的 TypeScript 类型定义：

```typescript
import type { ButtonType, ButtonSize } from '@nova-ui/components'

interface FormData {
  username: string
  password: string
  remember: boolean
}

const buttonType: ButtonType = 'primary'
const buttonSize: ButtonSize = 'medium'

const form: FormData = {
  username: '',
  password: '',
  remember: false
}
```

## Volar 支持

如果你使用 Volar，可以在 `tsconfig.json` 中配置组件类型：

```json
{
  "compilerOptions": {
    "types": ["@nova-ui/components/global"]
  }
}
```

这样可以获得更好的组件属性提示和类型检查。

## 开始使用

现在你可以开始使用 Nova UI 了！查看 [组件文档](/component/button) 了解每个组件的详细用法。
