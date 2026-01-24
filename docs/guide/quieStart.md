# 快速开始

本节将介绍如何在项目中使用 MJT UI。

## 完整引入

如果你对打包体积不是很在乎，可以完整引入所有组件：

```typescript
// main.ts
import { createApp } from 'vue'
import MjtUI from '@mjt/components'
import '@mjt/theme-chalk/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(MjtUI)
app.mount('#app')
```

## 按需引入

推荐使用按需引入的方式，可以有效减小打包体积。

### 手动引入

```vue
<template>
  <mjt-button type="primary" @click="handleClick">
    点击我
  </mjt-button>
</template>

<script setup lang="ts">
import { MjtButton } from '@mjt/components'
import '@mjt/theme-chalk/dist/index.css'

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
import { MjtButton, MjtIcon, MjtInput } from '@mjt/components'
import '@mjt/theme-chalk/dist/index.css'
import App from './App.vue'

const app = createApp(App)

// 全局注册常用组件
app.use(MjtButton)
app.use(MjtIcon)
app.use(MjtInput)

app.mount('#app')
```

## 基础示例

### 按钮组件

```vue
<template>
  <div class="button-demo">
    <mjt-button>默认按钮</mjt-button>
    <mjt-button type="primary">主要按钮</mjt-button>
    <mjt-button type="success">成功按钮</mjt-button>
    <mjt-button type="warning">警告按钮</mjt-button>
    <mjt-button type="danger">危险按钮</mjt-button>
  </div>
</template>

<script setup lang="ts">
import { MjtButton } from '@mjt/components'
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
  <mjt-form :model="form" label-width="80px">
    <mjt-form-item label="用户名">
      <mjt-input v-model="form.username" placeholder="请输入用户名" />
    </mjt-form-item>
    
    <mjt-form-item label="密码">
      <mjt-input 
        v-model="form.password" 
        type="password" 
        placeholder="请输入密码" 
      />
    </mjt-form-item>
    
    <mjt-form-item label="记住我">
      <mjt-checkbox v-model="form.remember">记住密码</mjt-checkbox>
    </mjt-form-item>
    
    <mjt-form-item>
      <mjt-button type="primary" @click="handleSubmit">
        登录
      </mjt-button>
    </mjt-form-item>
  </mjt-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { MjtForm, MjtFormItem, MjtInput, MjtCheckbox, MjtButton } from '@mjt/components'

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

### 图标组件

```vue
<template>
  <div class="icon-demo">
    <mjt-icon icon="home" size="24" />
    <mjt-icon icon="user" size="24" color="#42b883" />
    <mjt-icon icon="settings" size="24" color="#35495e" />
  </div>
</template>

<script setup lang="ts">
import { MjtIcon } from '@mjt/components'
</script>

<style scoped>
.icon-demo {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
```

## TypeScript 支持

MJT UI 提供完整的 TypeScript 类型定义：

```typescript
import type { ButtonType, ButtonSize } from '@mjt/components'

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
    "types": ["@mjt/components/global"]
  }
}
```

这样可以获得更好的组件属性提示和类型检查。

## 开始使用

现在你可以开始使用 MJT UI 了！查看 [组件文档](/component/icon) 了解每个组件的详细用法。

## 常见问题

### 样式没有生效？

确保你已经引入了样式文件：

```typescript
import '@mjt/theme-chalk/dist/index.css'
```

### 组件没有类型提示？

确保你的项目中安装了 TypeScript，并且 `tsconfig.json` 配置正确。

### 如何自定义主题？

查看 [主题定制](#) 文档了解如何自定义组件样式。

## 下一步

- 查看 [组件列表](/component/icon) 了解所有可用组件
- 阅读 [API 文档](#) 了解组件的详细配置
- 参考 [最佳实践](#) 学习如何更好地使用组件库

