# 组件库重命名总结

## 更改内容

### 1. 组件库名称
- **旧名称**: MJT UI / @mjt
- **新名称**: Nova UI / @nova-ui

### 2. GitHub 仓库地址
- **地址**: https://github.com/name718/vue3-componts

### 3. 包名更改

| 旧包名 | 新包名 |
|--------|--------|
| @mjt/components | @nova-ui/components |
| @mjt/theme-chalk | @nova-ui/theme-chalk |
| @mjt/utils | @nova-ui/utils |
| mjt-ui-monorepo | nova-ui-monorepo |

### 4. 已更新的文件

#### 根目录
- ✅ `package.json` - 更新包名和依赖
- ✅ `README.md` - 更新组件库名称和示例代码
- ✅ `.gitignore` - 添加 VitePress 缓存和构建产物

#### 配置文件
- ✅ `tsconfig.build.json` - 更新路径别名
- ✅ `vitest.config.ts` - 更新路径别名
- ✅ `build/vite.config.ts` - 更新路径别名和外部依赖

#### 包配置
- ✅ `packages/components/package.json`
- ✅ `packages/theme-chalk/package.json`
- ✅ `packages/utils/package.json`

#### 文档站点
- ✅ `docs/index.md` - 首页内容
- ✅ `docs/.vitepress/config.js` - 配置和 GitHub 链接
- ✅ `docs/vite.config.ts` - 路径别名
- ✅ `docs/changelog.md` - 更新日志
- ✅ `docs/contributing.md` - 贡献指南

#### 组件源码
- ✅ 所有 `packages/` 下的 `.ts`, `.tsx`, `.vue` 文件
- ✅ 所有 `play/` 下的 `.ts`, `.vue` 文件

### 5. 导入语句更新

所有组件导入已从：
```typescript
import { Button } from '@mjt/components'
import '@mjt/theme-chalk/dist/index.css'
```

更新为：
```typescript
import { Button } from '@nova-ui/components'
import '@nova-ui/theme-chalk/dist/index.css'
```

## 下一步操作

### 1. 重新安装依赖（已完成）
```bash
pnpm install
```

### 2. 启动文档站点（已启动）
```bash
pnpm doc:dev
```
访问: http://localhost:5173/

### 3. 测试构建
```bash
# 构建组件库
pnpm build

# 运行测试
pnpm test
```

### 4. 发布到 npm（可选）
```bash
# 登录 npm
npm login

# 发布包
cd packages/components && npm publish --access public
cd packages/theme-chalk && npm publish --access public
cd packages/utils && npm publish --access public
```

### 5. 更新 GitHub 仓库
```bash
git add .
git commit -m "refactor: rename project from MJT UI to Nova UI"
git push origin main
```

## 注意事项

1. **包作用域**: 新包名使用 `@nova-ui` 作用域，发布到 npm 时需要确保该作用域可用
2. **文档部署**: 更新 CI/CD 配置中的仓库地址
3. **Logo**: 当前使用的是占位符 Logo，建议设计专属的 Nova UI Logo
4. **Favicon**: 需要添加 `docs/public/favicon.ico` 文件

## 品牌含义

**Nova** 意为"新星"，象征：
- ✨ 新颖的设计理念
- 🌟 闪耀的用户体验
- 🚀 快速的开发效率
- 💫 持续的创新精神

---

更新完成时间: 2024-01-24
