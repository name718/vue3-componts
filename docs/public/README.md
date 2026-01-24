# 静态资源目录

这个目录用于存放网站的静态资源文件。

## 文件说明

- `logo.svg` - 网站 Logo（SVG 格式）
- `favicon.ico` - 网站图标（需要自行添加）

## 添加 favicon

你可以使用在线工具将 logo 转换为 favicon：

1. 访问 https://realfavicongenerator.net/
2. 上传你的 logo 图片
3. 下载生成的 favicon.ico
4. 将文件放在此目录下

## 自定义 Logo

如果需要自定义 Logo，可以：

1. 替换 `logo.svg` 文件
2. 或者使用 PNG/JPG 格式，并更新 `docs/.vitepress/config.js` 中的配置

```js
themeConfig: {
  logo: '/your-logo.png'
}
```
