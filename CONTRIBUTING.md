# 贡献指南

感谢你考虑为 MJT UI 做出贡献！

## 开发流程

### 1. Fork 项目

点击右上角的 Fork 按钮，将项目 fork 到你的账号下。

### 2. 克隆项目

```bash
git clone https://github.com/your-username/vue3-componts.git
cd vue3-componts
```

### 3. 安装依赖

```bash
pnpm install
```

### 4. 创建分支

```bash
git checkout -b feat/your-feature-name
# 或
git checkout -b fix/your-bug-fix
```

### 5. 开发

```bash
# 启动开发环境
pnpm dev

# 启动文档
pnpm doc:dev

# 运行测试
pnpm test
```

### 6. 提交代码

提交代码时，请遵循 [Commit Message 规范](./.commitlintrc.md)。

```bash
git add .
git commit -m "feat(components): add new component"
```

**注意**: 
- 提交前会自动运行 lint-staged 检查代码格式
- 提交前会自动运行测试
- commit message 会被自动验证

### 7. 推送代码

```bash
git push origin feat/your-feature-name
```

### 8. 创建 Pull Request

在 GitHub 上创建 Pull Request，描述你的改动。

## 代码规范

### ESLint

项目使用 ESLint 进行代码检查：

```bash
pnpm lint
```

### Prettier

项目使用 Prettier 进行代码格式化：

```bash
pnpm format
```

### TypeScript

- 使用 TypeScript 编写代码
- 确保类型定义完整
- 避免使用 `any` 类型

## 测试

### 编写测试

为新功能或修复的 bug 编写测试：

```typescript
// packages/components/your-component/__tests__/your-component.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import YourComponent from '../src/your-component.vue'

describe('YourComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(YourComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
```

### 运行测试

```bash
# 监听模式
pnpm test

# 单次运行
pnpm test:run

# UI 界面
pnpm test:ui

# 覆盖率
pnpm test:coverage
```

## 组件开发

### 目录结构

```
packages/components/your-component/
├── __tests__/
│   └── your-component.spec.ts
├── src/
│   ├── your-component.vue
│   └── your-component.ts
└── index.ts
```

### 组件模板

```vue
<template>
  <div :class="bem.b()">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { createNamespace } from '@mjt/utils/create'
import { yourComponentProps, yourComponentEmits } from './your-component'

defineOptions({
  name: 'z-your-component'
})

const bem = createNamespace('your-component')
const props = defineProps(yourComponentProps)
const emit = defineEmits(yourComponentEmits)
</script>
```

### Props 定义

```typescript
// your-component.ts
import { ExtractPropTypes, PropType } from 'vue'

export const yourComponentProps = {
  type: {
    type: String as PropType<'primary' | 'success' | 'warning'>,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type YourComponentProps = ExtractPropTypes<typeof yourComponentProps>

export const yourComponentEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
}

export type YourComponentEmits = typeof yourComponentEmits
```

### 样式

```scss
// packages/theme-chalk/src/your-component.scss
@use './mixins/mixins' as *;

@include b(your-component) {
  display: block;
  
  @include m(primary) {
    color: blue;
  }
  
  @include e(icon) {
    margin-right: 8px;
  }
  
  @include is(disabled) {
    opacity: 0.5;
  }
}
```

### 导出组件

```typescript
// packages/components/your-component/index.ts
import { withInstall } from '@mjt/utils/with-install'
import _YourComponent from './src/your-component.vue'

const YourComponent = withInstall(_YourComponent)

export default YourComponent
export * from './src/your-component'

declare module 'vue' {
  export interface GlobalComponents {
    ZYourComponent: typeof YourComponent
  }
}
```

## Git Hooks

项目配置了以下 Git Hooks：

### pre-commit

提交前自动执行：
- lint-staged: 检查和格式化代码
- 运行测试

### commit-msg

提交时自动验证 commit message 格式。

## 文档

### 组件文档

在 `docs/component/` 目录下创建组件文档：

```markdown
# YourComponent 组件名

组件描述

## 基础用法

\`\`\`vue
<template>
  <z-your-component>内容</z-your-component>
</template>
\`\`\`

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| type | 类型 | string | primary |
| disabled | 是否禁用 | boolean | false |

### Events

| 事件名 | 说明 | 参数 |
|--------|------|------|
| click | 点击事件 | (e: MouseEvent) |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 默认内容 |
```

## 发布流程

1. 更新版本号
2. 更新 CHANGELOG.md
3. 提交代码
4. 创建 tag
5. 推送到远程仓库

## 问题反馈

如果你发现了 bug 或有新的功能建议，请创建 Issue。

## 许可证

本项目采用 ISC 许可证。
