# MJT UI 文档站点

这是 MJT UI 组件库的官方文档站点，使用 VitePress 构建。

## 本地开发

### 安装依赖

```bash
# 在项目根目录
pnpm install
```

### 启动开发服务器

```bash
# 在项目根目录
pnpm doc:dev

# 或者在 docs 目录
cd docs
pnpm dev
```

访问 http://localhost:5173 查看文档站点。

## 构建部署

### 构建文档

```bash
# 在项目根目录
pnpm doc:build

# 或者在 docs 目录
cd docs
pnpm build
```

构建产物将生成在 `docs/.vitepress/dist` 目录。

### 预览构建结果

```bash
cd docs
pnpm preview
```

## 文档结构

```
docs/
├── .vitepress/
│   ├── config.js          # VitePress 配置
│   ├── theme/
│   │   ├── index.js       # 主题入口
│   │   └── custom.css     # 自定义样式
│   └── cache/             # 构建缓存
├── guide/
│   ├── installation.md    # 安装指南
│   └── quieStart.md       # 快速开始
├── component/
│   ├── button.md          # Button 组件文档
│   ├── icon.md            # Icon 组件文档
│   └── ...                # 其他组件文档
├── public/
│   ├── logo.svg           # 网站 Logo
│   └── favicon.ico        # 网站图标
├── index.md               # 首页
├── changelog.md           # 更新日志
└── contributing.md        # 贡献指南
```

## 编写文档

### 添加新组件文档

1. 在 `docs/component/` 目录下创建新的 Markdown 文件
2. 在 `docs/.vitepress/config.js` 的 sidebar 配置中添加链接
3. 按照现有组件文档的格式编写内容

### 文档格式

```markdown
# 组件名称

组件描述

## 基础用法

<demo>
\`\`\`vue
<template>
  <!-- 示例代码 -->
</template>
\`\`\`
</demo>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop1 | 属性说明 | string | - |
```

## 自定义配置

### 修改主题色

编辑 `docs/.vitepress/theme/custom.css`：

```css
:root {
  --vp-c-brand: #42b883;
  --vp-c-brand-light: #42d392;
  --vp-c-brand-dark: #33a06f;
}
```

### 添加自定义组件

在 `docs/.vitepress/theme/index.js` 中注册：

```js
import CustomComponent from './components/CustomComponent.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomComponent', CustomComponent)
  }
}
```

## 部署

### GitHub Pages

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy Docs

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
      - run: pnpm install
      - run: pnpm doc:build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist
```

### Vercel

1. 导入 GitHub 仓库到 Vercel
2. 设置构建命令：`pnpm doc:build`
3. 设置输出目录：`docs/.vitepress/dist`
4. 部署

### Netlify

1. 连接 GitHub 仓库
2. 设置构建命令：`pnpm doc:build`
3. 设置发布目录：`docs/.vitepress/dist`
4. 部署

## 常见问题

### 样式不生效？

确保在 `docs/.vitepress/theme/index.js` 中引入了组件样式：

```js
import '@mjt/theme-chalk/src/index.scss'
```

### 组件无法使用？

在 `docs/.vitepress/theme/index.js` 中注册组件：

```js
import { MjtButton } from '@mjt/components'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('MjtButton', MjtButton)
  }
}
```

### 热更新不生效？

尝试清除缓存：

```bash
rm -rf docs/.vitepress/cache
pnpm doc:dev
```

## 更多资源

- [VitePress 官方文档](https://vitepress.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Markdown 语法](https://www.markdownguide.org/)
