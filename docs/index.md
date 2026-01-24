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
      text: 快速开始
      link: /guide/installation
    - theme: alt
      text: 组件预览
      link: /component/icon
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
  - icon: 🛞
    title: 完善的测试
    details: 每个组件都经过严格的单元测试，确保代码质量和稳定性
  - icon: 📝
    title: 详细的文档
    details: 提供清晰的文档和示例代码，快速上手，降低学习成本
  - icon: ⚡
    title: 高性能
    details: 内置虚拟列表等高性能组件，轻松处理大数据量场景
---

## 快速安装

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

## 简单使用

```vue
<template>
  <nova-button type="primary">主要按钮</nova-button>
  <nova-button type="success">成功按钮</nova-button>
  <nova-button type="warning">警告按钮</nova-button>
</template>

<script setup>
import { NovaButton } from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'
</script>
```

## 组件列表

Nova UI 提供了以下组件：

- **Button** - 按钮组件，支持多种类型和尺寸
- **Icon** - 图标组件，灵活的图标解决方案
- **Input** - 输入框组件，支持多种输入场景
- **Checkbox** - 复选框组件，单选和多选支持
- **Form / FormItem** - 表单组件，完整的表单验证方案
- **Tree** - 树形控件，支持异步加载和自定义节点
- **Upload** - 上传组件，支持拖拽上传和多文件上传
- **Calendar** - 日历组件，日期选择和展示
- **VirtualList** - 虚拟列表，高性能大数据渲染
- **VirtualScrollList** - 虚拟滚动列表，优化滚动性能

## 为什么选择 Nova UI？

<div class="why-choose">
  <div class="reason">
    <h3>🚀 现代化技术栈</h3>
    <p>采用 Vue 3 + TypeScript + Vite 构建，享受最新的开发体验</p>
  </div>
  <div class="reason">
    <h3>💡 最佳实践</h3>
    <p>遵循 Vue 3 官方推荐的最佳实践，代码规范且易于维护</p>
  </div>
  <div class="reason">
    <h3>🎓 学习友好</h3>
    <p>清晰的代码结构和详细的注释，适合学习 Vue 3 组件开发</p>
  </div>
</div>

<style scoped>
.why-choose {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.reason {
  padding: 20px;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.3s ease;
}

.reason:hover {
  transform: translateY(-4px);
}

.reason h3 {
  margin-top: 0;
  color: var(--vp-c-brand);
}

.reason p {
  margin-bottom: 0;
  color: var(--vp-c-text-2);
}
</style>
