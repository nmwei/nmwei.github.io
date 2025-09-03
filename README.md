# 个人博客网站

基于 Next.js 和 Tailwind CSS 构建的现代化个人博客网站，支持静态导出和多种部署方式。

## 快速开始

### 安装依赖

```bash
yarn install
```

### 开发

```bash
# 启动开发服务器
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 工作流程

### 开发阶段

```bash
# 启动开发服务器
yarn dev
```

### 代码质量检查

```bash
# 自动修复代码格式问题
yarn lint
```

### 构建和发布

```bash
# 生成静态文件用于发布（推荐）
yarn export

# 或者生成服务器端构建文件
yarn build
```

### 完整工作流程

1. **开发时**：使用 `yarn dev` 启动开发服务器
2. **修改代码后**：直接使用 `yarn export` 生成静态文件
3. **如果构建失败**：先运行 `yarn lint` 修复格式问题，再重新 `yarn export`

> **注意**：`yarn export` 会自动执行 lint 检查和类型检查，无需单独运行 lint 命令。

## 项目结构

```text
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

## 自定义配置

### 网站基本信息

编辑 `data/siteMetadata.js` 文件：

- 网站标题和描述
- 作者信息
- 社交媒体链接
- SEO 配置

### 导航菜单

编辑 `data/headerNavLinks.js` 文件添加或修改导航链接。

### 博客文章

在 `data/blog/` 目录下添加 `.md` 或 `.mdx` 文件。

### 文章 Frontmatter

```yaml
---
title: '文章标题'
date: '2024-01-01'
lastmod: '2024-01-01'
tags: ['标签1', '标签2']
draft: false
summary: '文章摘要'
images: ['/static/images/example.jpg']
authors: ['default']
layout: PostLayout
canonicalUrl: https://example.com/blog/post
---
```

## 部署

### GitHub Pages

1. 运行构建命令：

```bash
yarn export
```

2. 将 `docs` 目录内容推送到 `master` 分支

3. 在 GitHub 仓库设置中启用 Pages

### Vercel（推荐）

1. 连接 GitHub 仓库到 [Vercel](https://vercel.com)
2. 自动部署，无需额外配置

### Netlify

1. 连接 GitHub 仓库到 [Netlify](https://netlify.com)
2. 构建命令：`yarn export`
3. 发布目录：`docs`

### 其他静态托管服务

```bash
# 生成静态文件
yarn export

# 本地预览
npx serve docs
```

然后上传 `docs` 目录到你的托管服务。

### 子路径部署

如果部署到子路径（如 `https://example.com/blog`）：

```bash
BASE_PATH=/blog yarn export
```

## 开发指南

### 添加新页面

在 `app/` 目录下创建新的路由文件。

### 自定义组件

在 `components/` 目录下创建 React 组件。

### 修改样式

- 全局样式：`css/tailwind.css`
- 代码高亮：`css/prism.css`
- Tailwind 配置：`tailwind.config.js`

### 添加新功能

- 搜索功能：`components/SearchButton.tsx`
- 主题切换：`components/ThemeSwitch.tsx`
- 社交图标：`components/social-icons/`

## 常见问题

### 构建失败

1. 检查代码格式：`yarn lint`
2. 检查 TypeScript 类型错误
3. 确保所有依赖已安装：`yarn install`

### 图片不显示

1. 确保图片路径正确
2. 检查 `public/static/images/` 目录
3. 使用相对路径：`/static/images/example.jpg`

### 搜索功能不工作

1. 确保运行了 `yarn export` 生成搜索索引
2. 检查 `public/search.json` 文件是否存在

## 技术栈

- **框架**：Next.js 15
- **样式**：Tailwind CSS
- **内容管理**：Contentlayer
- **类型检查**：TypeScript
- **代码质量**：ESLint + Prettier
- **图标**：Lucide React

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 致谢

基于 [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) 模板构建。
