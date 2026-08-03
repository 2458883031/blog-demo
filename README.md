# 博客项目一键构建与下载脚本

## 使用方法

### 方式一：直接下载（HTTP 服务）
```bash
# 在浏览器或命令行中访问
http://127.0.0.1:8888/blog-demo-release.tar.gz
```

### 方式二：一键下载脚本
```bash
bash download-blog.sh
```

### 方式三：构建并打包
```bash
bash build-blog.sh
```

## 部署步骤
```bash
tar xzf blog-demo-release.tar.gz
cd blog-demo
npm install
npm run dev
```

## 项目信息
- **技术栈**: Next.js 16 + React 19 + Tailwind CSS + TypeScript
- **功能**: 博客首页、文章详情、关于页面
- **示例**: 3 篇博文（Hello World、Next.js 学习、Tailwind CSS 技巧）
- **特点**: 响应式设计、暗色模式、静态生成
