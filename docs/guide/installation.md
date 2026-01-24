# 安装

## 环境要求

- Node.js >= 16.0.0
- Vue >= 3.2.0

## 包管理器

推荐使用 pnpm 作为包管理器：

::: code-group

```bash [pnpm]
pnpm install @mjt/components @mjt/theme-chalk
```

```bash [npm]
npm install @mjt/components @mjt/theme-chalk
```

```bash [yarn]
yarn add @mjt/components @mjt/theme-chalk
```

:::

## 版本说明

| 包名 | 版本 | 说明 |
| --- | --- | --- |
| @mjt/components | 1.0.0 | 组件库核心包 |
| @mjt/theme-chalk | 1.0.0 | 默认主题样式 |
| @mjt/utils | 1.0.0 | 工具函数库 |

## 浏览器支持

现代浏览器和 IE11+（需要 polyfills）

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png) |
| --- | --- | --- | --- |
| Chrome ≥ 64 | Firefox ≥ 67 | Safari ≥ 12 | Edge ≥ 79 |

## 开发环境

如果你想在本地开发或贡献代码：

```bash
# 克隆项目
git clone https://github.com/yourusername/mjt-ui.git

# 进入项目目录
cd mjt-ui

# 安装依赖
pnpm install

# 启动开发环境
pnpm dev

# 启动文档站点
pnpm doc:dev
```

详见 [贡献指南](/contributing)。

## 下一步

安装完成后，查看 [快速开始](/guide/quieStart) 了解如何使用。

