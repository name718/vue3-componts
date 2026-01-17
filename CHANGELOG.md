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
- 修复 BEM 工具函数 m() 和 _bem() 实现错误
- 修复 is() 函数参数类型

### Tests

- 配置 Vitest 单元测试框架
- 添加 Button, Icon, Input, Checkbox 组件测试
- 添加 Utils 工具函数测试
- 51 个测试用例全部通过

### Chore

- 配置 Husky Git Hooks
- 配置 Commitlint commit message 验证
- 配置 Lint-staged 代码检查
- 添加 CONTRIBUTING.md 贡献指南
- 添加 commit message 规范文档
