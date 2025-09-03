# 个人博客网站

基于 Next.js 和 Tailwind CSS 构建的现代化个人博客网站，支持静态导出和多种部署方式。

## 🌐 在线访问

**博客地址**：[https://nmwei.github.io](https://nmwei.github.io)

> 欢迎访问我的个人博客，分享技术文章和思考。

## ✨ 特性

- 🚀 **现代化技术栈**：Next.js 15 + Tailwind CSS + TypeScript
- 📱 **响应式设计**：完美适配各种设备
- 🌙 **深色模式**：支持明暗主题切换
- 🔍 **全文搜索**：快速查找文章内容
- 📝 **Markdown 支持**：支持 MDX 和代码高亮
- ⚡ **静态导出**：支持 GitHub Pages 等静态托管
- 🎨 **自定义主题**：可自定义颜色和样式

## 🚀 快速开始

### 安装依赖

```bash
yarn install
```

### 开发

```bash
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建发布

```bash
# 生成静态文件（推荐）
yarn export

# 本地预览
npx serve docs
```

## 📁 项目结构

```
├── app/                    # Next.js App Router 页面
├── components/             # React 组件
├── data/                   # 网站数据和内容
│   ├── authors/           # 作者信息
│   ├── blog/              # 博客文章
│   └── siteMetadata.js    # 网站元数据
├── layouts/               # 页面布局组件
├── public/                # 静态资源
└── css/                   # 样式文件
```

## ⚙️ 自定义配置

### 网站信息

编辑 `data/siteMetadata.js` 配置网站标题、描述、作者信息等。

### 导航菜单

编辑 `data/headerNavLinks.js` 添加或修改导航链接。

### 博客文章

在 `data/blog/` 目录下添加 `.md` 或 `.mdx` 文件。

**文章 Frontmatter 示例：**

```yaml
---
title: '文章标题'
date: '2024-01-01'
tags: ['标签1', '标签2']
draft: false
summary: '文章摘要'
images: ['/static/images/example.jpg']
---
```

## 🚀 部署

### GitHub Pages

1. 运行构建：`yarn export`
2. 推送 `docs` 目录到 `master` 分支
3. 在 GitHub 仓库设置中启用 Pages

### 其他平台

- **Vercel**：连接 GitHub 仓库，自动部署
- **Netlify**：构建命令 `yarn export`，发布目录 `docs`
- **其他静态托管**：上传 `docs` 目录内容

## 🛠️ 开发指南

### 添加新页面

在 `app/` 目录下创建新的路由文件。

### 自定义组件

在 `components/` 目录下创建 React 组件。

### 修改样式

- 全局样式：`css/tailwind.css`
- 代码高亮：`css/prism.css`
- Tailwind 配置：`tailwind.config.js`

## ❓ 常见问题

### 构建失败

```bash
# 检查并修复代码格式
yarn lint

# 重新构建
yarn export
```

### 图片不显示

确保图片放在 `public/static/images/` 目录，使用路径 `/static/images/example.jpg`。

### 搜索功能不工作

确保运行了 `yarn export` 生成搜索索引文件。

## 🛠️ 技术栈

- **框架**：Next.js 15
- **样式**：Tailwind CSS
- **内容管理**：Contentlayer
- **类型检查**：TypeScript
- **代码质量**：ESLint + Prettier
- **图标**：Lucide React

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

基于 [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 模板构建。