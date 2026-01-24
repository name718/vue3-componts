# 贡献指南

感谢你考虑为 MJT UI 做出贡献！

## 开发设置

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 克隆项目

```bash
git clone https://github.com/yourusername/mjt-ui.git
cd mjt-ui
```

### 安装依赖

```bash
pnpm install
```

### 启动开发环境

```bash
# 启动组件开发环境
pnpm dev

# 启动文档站点
pnpm doc:dev
```

## 项目结构

```
mjt-ui/
├── packages/
│   ├── components/     # 组件源码
│   │   ├── button/     # 按钮组件
│   │   ├── icon/       # 图标组件
│   │   └── ...
│   ├── theme-chalk/    # 样式文件
│   └── utils/          # 工具函数
├── play/               # 组件测试环境
├── docs/               # 文档站点
└── build/              # 构建配置
```

## 开发流程

### 1. 创建分支

```bash
git checkout -b feature/your-feature-name
```

### 2. 开发组件

在 `packages/components` 目录下创建新组件：

```
packages/components/your-component/
├── index.ts                    # 导出文件
├── src/
│   ├── your-component.vue      # 组件实现
│   └── your-component.ts       # 组件类型定义
└── __tests__/
    └── your-component.spec.ts  # 单元测试
```

### 3. 编写样式

在 `packages/theme-chalk/src` 目录下创建样式文件：

```scss
// your-component.scss
@use 'mixins/mixins' as *;

@include b(your-component) {
  // 样式代码
}
```

### 4. 编写测试

```typescript
import { mount } from '@vue/test-utils'
import YourComponent from '../src/your-component.vue'

describe('YourComponent', () => {
  it('should render correctly', () => {
    const wrapper = mount(YourComponent)
    expect(wrapper.exists()).toBe(true)
  })
})
```

### 5. 运行测试

```bash
# 运行所有测试
pnpm test

# 运行特定测试
pnpm test your-component

# 查看测试覆盖率
pnpm test:coverage
```

### 6. 编写文档

在 `docs/component` 目录下创建组件文档：

```markdown
# YourComponent 组件名称

组件描述

## 基础用法

<demo>
  <your-component />
</demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop1 | 属性说明 | string | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值改变时触发 | (value: any) => void |
```

### 7. 代码规范

提交前确保代码符合规范：

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

### 8. 提交代码

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能开发
git commit -m "feat(components): add your-component"

# Bug 修复
git commit -m "fix(button): fix button click issue"

# 文档更新
git commit -m "docs(guide): update installation guide"

# 样式调整
git commit -m "style(button): adjust button padding"

# 重构代码
git commit -m "refactor(utils): refactor create function"

# 性能优化
git commit -m "perf(virtual-list): optimize rendering performance"

# 测试相关
git commit -m "test(input): add input component tests"
```

提交类型说明：

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式调整（不影响功能）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

### 9. 提交 Pull Request

1. 推送分支到远程仓库
2. 在 GitHub 上创建 Pull Request
3. 填写 PR 描述，说明改动内容
4. 等待代码审查

## 代码审查

所有的 Pull Request 都需要经过代码审查才能合并。审查重点：

- 代码质量和可维护性
- 是否符合项目规范
- 测试覆盖率
- 文档完整性
- 性能影响

## 发布流程

项目维护者会定期发布新版本：

1. 更新版本号
2. 更新 CHANGELOG
3. 构建和测试
4. 发布到 npm
5. 创建 GitHub Release

## 问题反馈

如果你发现了 Bug 或有新的功能建议，欢迎：

- 提交 [Issue](https://github.com/yourusername/mjt-ui/issues)
- 加入讨论组
- 发送邮件

## 行为准则

请遵守我们的行为准则：

- 尊重他人
- 保持友善和专业
- 接受建设性批评
- 关注对社区最有利的事情

## 许可证

通过贡献代码，你同意你的贡献将在 ISC 许可证下发布。

---

再次感谢你的贡献！🎉
