export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  tags: string[]
  coverImage: string
  readTime: number
}

export const posts: Post[] = [
  {
    id: "hello-world",
    title: "Hello World — 我的第一篇文章",
    excerpt: "欢迎来到我的个人博客，这里是我记录想法、分享技术的地方。",
    content: `# Hello World

欢迎来到我的个人博客！这是我写的第一篇文章。

## 为什么写博客？

写博客有无数个理由：
- 记录学习过程
- 分享技术心得
- 建立个人品牌
- 连接志同道合的人

## 这个博客用什么技术？

这个博客基于 **Next.js** 构建，使用了：

- **Next.js 15** — React 框架
- **Tailwind CSS** — 样式框架
- **TypeScript** — 类型安全
- **MDX** — 支持在 Markdown 中嵌入 React 组件

## 接下来会写什么？

我计划在这里分享：
- 技术教程和心得
- 项目经验总结
- 读书和思考
- 生活随笔

感谢你的到来！`,
    date: "2026-08-03",
    category: "生活",
    tags: ["博客", "入门", "生活"],
    coverImage: "/images/cover-1.jpg",
    readTime: 3,
  },
  {
    id: "learn-nextjs",
    title: "学习 Next.js：从入门到实战",
    excerpt: "Next.js 是 React 的全栈框架，本文带你快速了解它的核心概念和最佳实践。",
    content: `# 学习 Next.js：从入门到实战

Next.js 是 Vercel 推出的 React 全栈框架，它让构建现代 Web 应用变得非常简单。

## 为什么选择 Next.js？

1. **服务端渲染 (SSR)** — 更好的 SEO 和首屏性能
2. **静态生成 (SSG)** — 预生成页面，加载极快
3. **API Routes** — 内置后端能力，全栈开发
4. **文件路由** — 直观的路由系统
5. **丰富的生态** — 插件、中间件、集成丰富

## 核心概念

### App Router

Next.js 13+ 引入了 App Router，基于 React Server Components：

\`\`\`
app/
  layout.tsx      # 布局
  page.tsx        # 页面
  loading.tsx     # 加载状态
  error.tsx       # 错误边界
\`\`\`

### Server Components vs Client Components

- **Server Components** — 默认，在服务端渲染，性能更好
- **Client Components** — 使用 "use client" 指令，支持交互

### Data Fetching

\`\`\`tsx
// 服务端直接获取数据
async function getPage() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}
\`\`\`

## 最佳实践

1. 尽量使用 Server Components
2. 图片使用 \`next/image\` 优化
3. 样式使用 Tailwind CSS
4. 类型安全用 TypeScript
5. 部署到 Vercel 一键上线

## 总结

Next.js 让 React 开发变得简单而强大。无论是个人博客还是企业级应用，它都能胜任。`,
    date: "2026-07-28",
    category: "技术",
    tags: ["Next.js", "React", "前端"],
    coverImage: "/images/cover-2.jpg",
    readTime: 8,
  },
  {
    id: "tailwind-css",
    title: "Tailwind CSS 实用技巧总结",
    excerpt: "Tailwind 让样式开发更高效，本文整理了我常用的实用技巧和最佳实践。",
    content: `# Tailwind CSS 实用技巧总结

Tailwind CSS 是一个实用优先的 CSS 框架，它让你无需离开 HTML 就能快速构建界面。

## 基础用法

\`\`\`html
<div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold text-gray-900">标题</h1>
  <p class="mt-4 text-gray-600">内容</p>
</div>
\`\`\`

## 常用技巧

### 响应式设计

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- 小屏1列，中屏2列，大屏3列 -->
</div>
\`\`\`

### 暗色模式

\`\`\`html
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  <!-- 自动适配暗色模式 -->
</div>
\`\`\`

### 动画效果

\`\`\`html
<button class="transition-all duration-300 hover:scale-105 hover:shadow-lg">
  悬停效果
</button>
\`\`\`

### 自定义配置

在 \`tailwind.config.ts\` 中扩展：

\`\`\`ts
export default {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
\`\`\`

## 最佳实践

1. 先在 HTML 中写样式，必要时提取组件
2. 使用 \`@apply\` 提取重复样式
3. 颜色统一管理在配置中
4. 断点命名要有意义

## 总结

Tailwind 改变了我们写样式的方式，它让 CSS 变得可维护和高效。`,
    date: "2026-07-20",
    category: "技术",
    tags: ["Tailwind", "CSS", "前端"],
    coverImage: "/images/cover-3.jpg",
    readTime: 6,
  },
]

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}

export function getSortedPosts(): Post[] {
  return [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((post) => post.category))]
}

export function getAllTags(): string[] {
  return [...new Set(posts.flatMap((post) => post.tags))]
}
