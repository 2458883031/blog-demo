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
};
\`\`\`

## 总结

Tailwind CSS 让样式开发变得快速且一致。掌握这些技巧，你可以更高效地构建现代化界面。`,
    date: "2026-07-15",
    category: "技术",
    tags: ["Tailwind", "CSS", "前端"],
    coverImage: "/images/cover-3.jpg",
    readTime: 6,
  },
  {
    id: "openclaw-exec-tool",
    title: "OpenClaw 能力教程：Exec — 像本地终端一样控制 Shell",
    excerpt: "OpenClaw 的 exec 工具让你可以运行任意 shell 命令，支持前台/后台、TTY、环境变量覆盖、超时控制，是 Agent 执行自动化任务的核心工具。",
    content: `# OpenClaw 能力教程：Exec — 像本地终端一样控制 Shell

OpenClaw 的 **exec** 工具是 Agent 执行 Shell 命令的核心能力。它不只是简单的 \`subprocess.run\`，而是一个完整的命令执行环境，支持前台/后台执行、TTY 模式、环境变量注入、超时控制和沙箱隔离。

## 为什么需要 exec？

Agent 需要与系统交互：安装依赖、运行测试、修改配置文件、启动服务……exec 就是 Agent 的「双手」。

## 基本用法

\`\`\`javascript
// 最简单的命令执行
await exec({ command: "ls -la" });

// 指定工作目录
await exec({ command: "npm install", workdir: "/path/to/project" });

// 设置环境变量
await exec({ command: "echo $API_KEY", env: { API_KEY: "***" } });
\`\`\`

## 后台执行与过程管理

长命令不需要阻塞主流程：

\`\`\`javascript
// 立即后台执行
await exec({ command: "python train.py", background: true });

// 或者自动超时后台化（10秒后转入后台）
await exec({ command: "npm run build", yieldMs: 10000 });

// 用 process 工具管理后台会话
const { sessionId } = await exec({ command: "tail -f /var/log/app.log", background: true });
// 后续可以用 process action=poll/log/write 来监控
\`\`\`

## TTY 模式

某些 CLI 工具（如 \`top\`、vim、交互式 Python）需要伪终端：

\`\`\`javascript
await exec({ command: "top", pty: true });
\`\`\`

## 执行位置控制

exec 可以在多个环境执行：

| host 参数 | 执行位置 | 适用场景 |
|-----------|----------|----------|
| \`auto\` | 有沙箱进沙箱，否则 Gateway | 默认，自动适配 |
| \`sandbox\` | 沙箱内 | 隔离执行，安全 |
| \`gateway\` | Gateway 宿主机 | 需要宿主机权限 |
| \`node\` | 已配对的设备 | 跨设备执行 |

## 超时与安全

\`\`\`javascript
// 设置超时（秒），0 表示不限时
await exec({ command: "long-running-task", timeout: 300 });

// 提升权限模式（需要授权）
await exec({ command: "sudo systemctl restart nginx", elevated: true });
\`\`\`

## 最佳实践

1. **优先用文件工具**：读/写/编辑文件比 exec 更安全直观
2. **后台化长任务**：超过 10 秒的命令建议用 \`background\` 或 \`yieldMs\`
3. **设置合理超时**：避免命令无限挂起
4. **善用 workdir**：不要依赖 cwd 假设，显式指定工作目录
5. **沙箱优先**：默认 auto 模式会自动进沙箱，确保隔离执行`,
    date: "2026-08-04",
    category: "技术",
    tags: ["OpenClaw", "Exec", "Shell", "自动化"],
    coverImage: "/images/cover-oc-exec.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-subagents",
    title: "OpenClaw 能力教程：Sub-agents — 让 Agent 并行工作",
    excerpt: "Sub-agents 是 OpenClaw 最强大的并发能力之一。通过 sessions_spawn 工具，你可以启动后台代理并行处理多个任务，大幅提升工作效率。",
    content: `# OpenClaw 能力教程：Sub-agents — 让 Agent 并行工作

**Sub-agents** 是 OpenClaw 中最强大的并发能力之一。它们让你可以启动后台代理，并行处理多个任务，而不会阻塞主对话流程。

## 什么是 Sub-agent？

Sub-agent 是独立的 Agent 会话，运行在与主会话隔离的环境中。每个 Sub-agent 都有自己的上下文和 token 消耗，完成工作时会将结果回报给主会话。

## 为什么要用 Sub-agents？

- **并行化**：多个任务同时执行，而非串行等待
- **隔离性**：每个 Sub-agent 有独立的上下文，互不干扰
- **后台运行**：不阻塞当前对话，完成时自动通知
- **灵活配置**：可以为每个 Sub-agent 设置不同的模型和参数

## 基本用法

\`\`\`javascript
// 启动一个后台 Sub-agent
const result = await sessions_spawn({
  task: "分析这50个CSV文件，提取所有数值列",
  mode: "run",
  model: "deepseek/deepseek-v4-flash", // 可以用更便宜的模型
});
\`\`\`

## 使用场景

### 1. 批量数据收集

\`\`\`javascript
// 同时调查多个股票
const tasks = ["AAPL", "GOOGL", "MSFT", "TSLA", "NVDA"].map(symbol => ({
  task: "分析 " + symbol + " 的股票数据和技术指标",
  runtime: "subagent",
}));
for (const t of tasks) sessions_spawn(t);
\`\`\`

### 2. 并行研究

\`\`\`javascript
// 同时搜索多个主题
sessions_spawn({
  task: "搜索 OpenClaw 的最新文档和社区动态",
  label: "oc-docs-research",
});
sessions_spawn({
  task: "搜索 Next.js 的最新版本更新",
  label: "nextjs-research",
});
sessions_yield(); // 等待完成事件
\`\`\`

### 3. 数据预处理

\`\`\`javascript
// 启动数据处理 Sub-agent
sessions_spawn({
  task: "读取 data/ 目录下的所有 CSV，合并后生成 report.csv",
  cwd: "/path/to/project",
  mode: "run",
});
\`\`\`

## Sub-agent 的隔离性

默认情况下，Sub-agent **不会**获得 session 或 message 工具，确保它们只专注于特定任务。如果 Sub-agent 确实需要访问主会话的上下文，可以使用 \`context: "fork"\`。

## 最佳实践

1. **选择合适的模型**：复杂任务用高质量模型，简单任务用便宜模型
2. **避免嵌套过深**：子代理不应该再 spawn 更多的子代理
3. **使用 sessions_yield**：spawn 后调用 yield 等待完成事件
4. **合理设置标签**：给 Sub-agent 设置有意义的 label，方便追踪
5. **控制上下文大小**：简单任务用更精简的上下文，节省 token`,
    date: "2026-08-04",
    category: "技术",
    tags: ["OpenClaw", "Sub-agents", "并发", "自动化"],
    coverImage: "/images/cover-oc-subagents.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-cron",
    title: "OpenClaw 能力教程：Cron — 定时任务与自动化调度",
    excerpt: "OpenClaw 内置的 Cron 调度器支持一次性提醒、周期性任务和复杂的 Cron 表达式。本文带你了解如何使用定时任务实现自动化。",
    content: `# OpenClaw 能力教程：Cron — 定时任务与自动化调度

OpenClaw 内置了功能强大的 **Cron** 调度器，支持一次性提醒、周期性任务和复杂的 Cron 表达式，让 Agent 能够在指定时间自动执行任务。

## 核心概念

Cron 任务运行在 **Gateway 进程内部**，任务定义、运行状态和历史记录都持久化在 SQLite 数据库中，重启不会丢失。

## 基本用法

### 一次性提醒

\`\`\`bash
openclaw cron create "2027-02-01T16:00:00Z" \\
  --name "Reminder" \\
  --session main \\
  --system-event "Reminder: check the cron docs draft" \\
  --wake now \\
  --delete-after-run
\`\`\`

### 周期性任务

\`\`\`bash
# 每天早上 9 点执行
openclaw cron add \\
  --name "Daily Morning Brief" \\
  --cron "0 9 * * *" \\
  --tz "Asia/Shanghai" \\
  --system-event "发送每日早报"
\`\`\`

### 使用 Cron 表达式

OpenClaw 支持标准 5 字段 Cron 表达式：

| 字段 | 含义 | 示例 |
|------|------|------|
| 分钟 | 0-59 | 0 |
| 小时 | 0-23 | 9 |
| 日 | 1-31 | * |
| 月 | 1-12 | * |
| 周 | 0-6 | 1-5 |

**常用示例**：
- \`*/15 * * * *\` — 每 15 分钟
- \`0 9 * * 1-5\` — 工作日早上 9 点
- \`0 2 * * *\` — 每天凌晨 2 点

## 任务类型

Cron 支持两种任务类型：

### 1. System Event（系统事件）

注入文本作为系统事件，适合提醒和通知：

\`\`\`javascript
cron({
  action: "add",
  schedule: { kind: "cron", expr: "0 9 * * *", tz: "Asia/Shanghai" },
  payload: { kind: "systemEvent", text: "发送每日早报..." },
  delivery: { mode: "announce" }
});
\`\`\`

### 2. Agent Turn（Agent 轮次）

让 Agent 执行完整任务，适合自动化工作流：

\`\`\`javascript
cron({
  action: "add",
  schedule: { kind: "every", everyMs: 3600000 },
  payload: {
    kind: "agentTurn",
    message: "检查所有待处理的 PR"
  },
  sessionTarget: "isolated"
});
\`\`\`

## 交付方式

Cron 任务支持多种输出方式：

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| none | 不输出 | 后台任务 |
| announce | 发送到聊天频道 | 提醒通知 |
| webhook | POST 到指定 URL | 集成外部系统 |

## 管理命令

\`\`\`bash
# 列出所有任务
openclaw cron list

# 查看任务详情
openclaw cron get <job-id>

# 查看运行历史
openclaw cron runs --id <job-id>

# 立即执行
openclaw cron run <job-id> --run-mode force

# 删除任务
openclaw cron remove <job-id>
\`\`\`

## 最佳实践

1. **区分 heartbeat 和 cron**：简单定期检查用 heartbeat，精确定时任务用 cron
2. **设置超时**：避免任务无限挂起
3. **使用 deleteAfterRun**：一次性任务完成后自动删除
4. **合理选择 sessionTarget**：main 用于系统事件，isolated 用于独立任务
5. **监控运行历史**：定期检查 cron runs 确保任务正常执行`,
    date: "2026-08-04",
    category: "技术",
    tags: ["OpenClaw", "Cron", "定时任务", "自动化"],
    coverImage: "/images/cover-oc-cron.jpg",
    readTime: 6,
  },
  {
    id: "openclaw-skills",
    title: "OpenClaw 能力教程：Skills — 自定义你的 Agent 技能",
    excerpt: "Skills 是 OpenClaw 中教 Agent 如何使用工具的核心机制。本文带你从零开始创建、配置和部署自定义 Skill。",
    content: `# OpenClaw 能力教程：Skills — 自定义你的 Agent 技能

**Skills** 是 OpenClaw 中教 Agent 如何使用工具的核心机制。每个 Skill 是一个包含 \`SKILL.md\` 文件的目录，用自然语言描述工具的使用场景和方法。

## 什么是 Skill？

Skill 本质上是一个 Markdown 文件（\`SKILL.md\`），包含：
- **YAML frontmatter**：定义名称、描述、版本等元数据
- **Markdown 正文**：给 Agent 的使用指南

\`\`\`markdown
---
name: my-skill
description: 一个自定义技能，用于处理特定任务
dependencies: []
version: "1.0.0"
---

# 我的技能

当你需要...时，请使用这个技能：

1. 步骤一
2. 步骤二
3. 步骤三
\`\`\`

## Skill 的加载顺序

OpenClaw 从多个来源加载 Skills，优先级从高到低：

| 优先级 | 来源 | 路径 |
|--------|------|------|
| 1 - 最高 | Workspace skills | workspace/skills |
| 2 | Project agent skills | workspace/.agents/skills |
| 3 | Personal agent skills | ~/.agents/skills |
| 4 | Managed / local skills | ~/.openclaw/skills |
| 5 | Bundled skills | 内置随安装 |
| 6 - 最低 | Extra directories | skills.load.extraDirs |

## 创建你的第一个 Skill

### 1. 创建目录结构

\`\`\`bash
mkdir -p ~/.openclaw/workspace/skills/hello-world
cd ~/.openclaw/workspace/skills/hello-world
touch SKILL.md
\`\`\`

### 2. 编写 SKILL.md

\`\`\`markdown
---
name: hello-world
description: 一个简单技能，用于演示如何创建自定义 Skill
version: "1.0.0"
---

# Hello World Skill

当用户说"打招呼"时，执行以下步骤：

1. 使用 exec 工具运行：\`echo "Hello from your custom skill!"\`
2. 返回结果给用户
\`\`\`

### 3. 测试 Skill

创建完成后，重启 Gateway 使新 Skill 生效：

\`\`\`bash
openclaw gateway restart
\`\`\`

## 进阶：带依赖的 Skill

复杂的 Skill 可能需要额外的依赖或工具：

\`\`\`markdown
---
name: weather-checker
description: 检查指定城市的天气情况
version: "1.0.0"
dependencies:
  - web_fetch
---

# 天气查询 Skill

使用 web_fetch 获取天气信息：

\`\`\`javascript
const response = await web_fetch({
  url: "https://wttr.in/shanghai?format=j1",
  maxChars: 5000
});
\`\`\`
\`\`\`

## 使用 Skill Workshop 管理 Skills

OpenClaw 提供了 **Skill Workshop** 工具来创建、更新、审查和部署 Skill：

\`\`\`javascript
// 创建新 Skill
skill_workshop({
  action: "create",
  name: "my-new-skill",
  description: "描述这个 Skill 的功能",
  proposal_content: "# Skill 内容..."
});

// 列出所有 Skills
skill_workshop({ action: "list" });
\`\`\`

## 最佳实践

1. **简洁描述**：description 控制在 160 字符以内
2. **清晰结构**：使用标题和列表组织内容
3. **包含示例**：给出具体的调用示例
4. **版本管理**：每次重要更新递增 version
5. **依赖明确**：列出所需的工具和依赖

## 总结

Skills 让 OpenClaw Agent 变得可扩展和可定制。通过编写 \`SKILL.md\`，你可以教会 Agent 如何使用各种工具，实现复杂的工作流自动化。`,
    date: "2026-08-04",
    category: "技术",
    tags: ["OpenClaw", "Skills", "自定义", "自动化"],
    coverImage: "/images/cover-oc-skills.jpg",
    readTime: 6,
  },
]

export function getSortedPosts(): Post[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostById(id: string): Post | undefined {
  return posts.find((post) => post.id === id)
}
