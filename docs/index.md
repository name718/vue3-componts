---
layout: home

hero:
  name: Nova UI
  text: 基于 Vue 3 的组件库
  tagline: 开箱即用的高质量 Vue 3 组件库，助力快速构建企业级应用
  image:
    src: /logo.svg
    alt: Nova UI
  actions:
    - theme: brand
      text: 开始使用
      link: /component/introduction
    - theme: alt
      text: GitHub
      link: https://github.com/name718/vue3-componts

features:
  - icon: 🎨
    title: Vue 3 Composition API
    details: 基于 Vue 3 最新特性开发，充分利用 Composition API 的强大能力，代码更简洁、更易维护
  - icon: 📦
    title: 开箱即用
    details: 提供丰富的高质量组件，涵盖常见业务场景，让你专注于业务开发而非重复造轮子
  - icon: 🔧
    title: TypeScript 支持
    details: 完整的 TypeScript 类型定义，提供优秀的开发体验和类型安全保障
  - icon: 🎯
    title: 按需加载
    details: 支持按需引入组件，有效减小打包体积，提升应用性能
  - icon: 🌈
    title: 主题定制
    details: 基于 SCSS 变量系统，轻松定制符合品牌风格的主题样式
  - icon: ⚡
    title: 高性能
    details: 内置虚拟列表等高性能组件，轻松处理大数据量场景
---

<div class="doc-content">

## 介绍

Nova UI 是一个基于 Vue 3 的组件库，提供了丰富的高质量组件，帮助开发者快速构建企业级应用。

### 特性

- 🎨 基于 Vue 3 Composition API
- 📦 开箱即用的高质量组件
- 🔧 完整的 TypeScript 支持
- 🎯 按需加载
- 🌈 主题定制
- 🛞 完善的测试
- 📝 详细的文档
- ⚡ 高性能

## 快速上手

### 安装

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

### 引入组件

#### 完整引入

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

#### 按需引入（推荐）

```vue
<template>
  <nova-button type="primary">主要按钮</nova-button>
</template>

<script setup>
import { NovaButton } from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'
</script>
```

### 开始使用

```vue
<template>
  <div class="demo">
    <nova-button type="primary" @click="handleClick">
      点击我
    </nova-button>
    <nova-input v-model="input" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { NovaButton, NovaInput } from '@nova-ui/components'

const input = ref('')

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

## 组件列表

Nova UI 提供了以下组件：

### 基础组件
- **Button** - 按钮组件，支持多种类型和尺寸
- **Icon** - 图标组件，灵活的图标解决方案

### 表单组件
- **Input** - 输入框组件，支持多种输入场景
- **Checkbox** - 复选框组件，单选和多选支持
- **Form / FormItem** - 表单组件，完整的表单验证方案

### 数据展示
- **Tree** - 树形控件，支持异步加载和自定义节点
- **Calendar** - 日历组件，日期选择和展示

### 高级组件
- **Upload** - 上传组件，支持拖拽上传和多文件上传
- **VirtualList** - 虚拟列表，高性能大数据渲染
- **VirtualScrollList** - 虚拟滚动列表，优化滚动性能

## 浏览器支持

现代浏览器和 IE11+（需要 polyfills）

| Chrome | Firefox | Safari | Edge |
| --- | --- | --- | --- |
| ≥ 64 | ≥ 67 | ≥ 12 | ≥ 79 |

## 开源协议

本项目基于 [ISC](https://opensource.org/licenses/ISC) 协议，请自由地享受和参与开源。

## 贡献

欢迎参与 Nova UI 的开发，提交 Issue 或 Pull Request。

查看 [贡献指南](https://github.com/name718/vue3-componts/blob/main/CONTRIBUTING.md) 了解更多。

</div>

<style scoped>
.doc-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 24px;
}

.doc-content h2 {
  margin-top: 48px;
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 600;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 12px;
}

.doc-content h3 {
  margin-top: 32px;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 600;
}

.doc-content ul {
  padding-left: 24px;
}

.doc-content li {
  margin: 8px 0;
}

.doc-content table {
  width: 100%;
  margin: 16px 0;
}

.doc-content th,
.doc-content td {
  text-align: center;
  padding: 12px;
  border: 1px solid var(--vp-c-divider);
}
</style>
