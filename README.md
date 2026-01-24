# Nova UI

一个基于 Vue 3 的组件库

## 特性

- 🎨 基于 Vue 3 Composition API
- 📦 开箱即用的高质量组件
- 🔧 完整的 TypeScript 支持
- 🎯 按需加载
- 🌈 主题定制

## 安装

```bash
pnpm install @nova-ui/components @nova-ui/theme-chalk
```

## 快速开始

```ts
// main.ts
import { createApp } from 'vue'
import NovaUI from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(NovaUI)
app.mount('#app')
```

## 按需引入

```ts
import { Button, Icon } from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'

app.use(Button)
app.use(Icon)
```

## 组件列表

- Button - 按钮
- Icon - 图标
- Input - 输入框
- Checkbox - 复选框
- Form / FormItem - 表单
- Tree - 树形控件
- Upload - 上传
- Calendar - 日历
- VirtualList - 虚拟列表
- VirtualScrollList - 虚拟滚动列表

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 构建
pnpm build

# 启动文档
pnpm doc:dev

# 运行测试
pnpm test
```

## 提交代码

本项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范。

```bash
# 提交代码
git add .
git commit -m "feat(components): add new feature"

# 提交时会自动：
# 1. 运行 lint-staged 检查代码
# 2. 运行单元测试
# 3. 验证 commit message 格式
```

详见 [贡献指南](./CONTRIBUTING.md) 和 [Commit 规范](./.commitlintrc.md)。

## 项目结构

```
├── packages/
│   ├── components/     # 组件源码
│   ├── theme-chalk/    # 样式
│   └── utils/          # 工具函数
├── play/               # 组件测试
├── docs/               # 文档
└── build/              # 构建配置
```

## License

ISC