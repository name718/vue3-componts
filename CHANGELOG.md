# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-01-17

### Added

- 初始化项目
- 完成构建系统配置
- 添加以下组件:
  - Button - 按钮组件
  - Icon - 图标组件
  - Input - 输入框组件
  - Checkbox - 复选框组件
  - Form / FormItem - 表单组件
  - Tree - 树形组件
  - Upload - 上传组件
  - Calendar - 日历组件
  - VirtualList - 虚拟列表组件
  - VirtualScrollList - 虚拟滚动列表组件

### Infrastructure

- 配置 Monorepo (pnpm workspace)
- 配置 TypeScript
- 配置 ESLint + Prettier
- 配置 Vite 构建
- 配置类型声明生成
- 配置 SCSS 样式打包

### Fixed

- 修复 Button 组件 slots.icon 类型错误
- 修复 Form 组件 rules 类型定义错误
- 修复 VirtualScrollList 组件 null 检查错误
- 所有源文件通过 TypeScript 类型检查
