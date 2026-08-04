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
    id: "openclaw-model-io",
    title: "教程对照：Model I/O → OpenClaw 的多模型提供商切换",
    excerpt: "LangChain 教程里的 Model I/O 是模型输入输出抽象，而 OpenClaw 把这件事做成了开箱即用的多提供商切换能力。",
    content: `# 教程对照：Model I/O → OpenClaw 的多模型提供商切换

在 \`ai-agents-from-zero\` 教程第 03 章「大模型核心开发框架」里，第一个模块是 **Model I/O**：它抽象了 LLM 的输入输出，让你用统一接口对接不同的大模型。

## 教程里的 Model I/O 是什么？

教程用 LangChain 做示范，核心是三个概念：

1. **模型封装** — 用统一的 API 封装 OpenAI、Anthropic 等不同厂商的模型
2. **提示词模板** — 把提示词做成可复用的模板
3. **输出解析** — 把模型返回的文本解析成结构化数据

\`\`\`python
from langchain_openai import ChatOpenAI

# 换一个模型，只需换一行
llm = ChatOpenAI(model="gpt-4o")
# llm = ChatOpenAI(model="deepseek-chat")
\`\`\`

## OpenClaw 的对应能力：多模型提供商切换

OpenClaw 把 Model I/O 直接**内置到了运行时**。你不需要写任何胶水代码，模型切换就是配置层面的操作：

\`\`\`bash
# 查看可用模型
openclaw models list

# 切换默认模型
openclaw models set deepseek/deepseek-v4-flash
\`\`\`

模型引用统一使用 \`provider/model\` 格式，例如：

- \`agnes/agnes-2.5-flash\`
- \`deepseek/deepseek-v4-flash\`
- \`anthropic/claude-sonnet-4-5\`
- \`openai/gpt-5.6\`

## 会话级覆盖

除了全局默认模型，OpenClaw 还支持**会话级覆盖**——某个对话临时换个模型，不影响全局设置：

\`\`\`text
/new deepseek/deepseek-v4-flash   # 新会话使用该模型
/model deepseek/deepseek-v4-flash # 当前会话切换模型
\`\`\`

## 模型故障转移（Failover）

教程里你要自己写重试逻辑，OpenClaw 内置了 **model failover**：主模型不可用时自动切换到备用模型，还有冷却探测机制，不用你操心。

## 对比总结

| 维度 | 教程（LangChain） | OpenClaw |
|------|-------------------|----------|
| 抽象方式 | 代码层 API 封装 | 配置 + CLI |
| 切换模型 | 改代码 | 一条命令 |
| 重试/降级 | 自己写 | 内置 failover |
| 成本控制 | 无 | 内置计费与用量统计 |

**一句话**：教程教你用代码抽象模型 I/O，OpenClaw 把这件事做成了开箱即用的运行时能力。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "Model I/O", "OpenClaw", "模型"],
    coverImage: "/images/cover-oc-model.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-prompt-template",
    title: "教程对照：提示词与消息模板 → OpenClaw 的 Prompt 系统",
    excerpt: "教程里的提示词模板需要手写代码拼接，OpenClaw 则把 prompt 系统做成了分层的自动装配机制。",
    content: `# 教程对照：提示词与消息模板 → OpenClaw 的 Prompt 系统

教程第 03 章的第二个模块是 **提示词与消息模板**。在 LangChain 里，你需要用 \`PromptTemplate\`、\`ChatPromptTemplate\` 这些类来组织提示词。

## 教程里的做法

\`\`\`python
from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个{role}，请用{style}的语气回答"),
    ("human", "{input}"),
])
\`\`\`

核心思想：把提示词拆成**角色消息**、**变量占位**、**消息列表**，运行时再填充。

## OpenClaw 的对应能力：分层 Prompt 系统

OpenClaw 没有运行时默认提示词，而是为每次运行**动态装配**系统提示词，分三层：

1. **buildAgentSystemPrompt** — 纯渲染器，把显式输入渲染成提示词
2. **resolveAgentSystemPromptConfig** — 解析配置开关（显示名、TTS 提示、模型别名等）
3. **运行时适配器** — 收集工具、沙箱状态、频道能力、上下文文件等实时信息

## 固定区块结构

OpenClaw 的 system prompt 有固定区块，类似教程里的消息模板：

- **Tooling** — 工具使用的规则与提示
- **Execution Bias** — 执行偏好（当前轮就行动、继续直到完成）
- **Safety** — 安全护栏提醒
- **Skills** — 技能加载指引
- **Workspace Files** — 注入 AGENTS.md / SOUL.md / USER.md 等
- **Runtime** — 主机、OS、模型、时区等实时信息

## 工作区文件即「模板变量」

教程的模板变量靠代码填充，OpenClaw 直接把你工作区里的文件注入上下文：

| 文件 | 作用 |
|------|------|
| \`AGENTS.md\` | 操作指令 + 记忆 |
| \`SOUL.md\` | 人设、边界、语气 |
| \`USER.md\` | 用户画像 |
| \`IDENTITY.md\` | 身份信息 |
| \`HEARTBEAT.md\` | 心跳任务指令 |

这些就是 OpenClaw 版的「消息模板」——你改文件，不用改代码。

## 缓存感知的提示词设计

OpenClaw 还会把稳定的内容放在缓存边界之上，易变内容（频道名、心跳、运行时）放在边界之下，让本地后端可以复用前缀缓存——这是教程里不会讲的工程细节。

**一句话**：教程用代码组织提示词，OpenClaw 用文件 + 配置 + 自动装配组织提示词。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "提示词", "Prompt", "OpenClaw"],
    coverImage: "/images/cover-oc-prompt.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-output-parser",
    title: "教程对照：输出解析器 → OpenClaw 的结构化输出",
    excerpt: "教程用 OutputParser 把模型文本解析成 JSON，OpenClaw 在工具层直接保证结构化返回。",
    content: `# 教程对照：输出解析器 → OpenClaw 的结构化输出

教程的第三个模块是 **输出解析器**：模型返回的是自由文本，但程序往往需要结构化数据，于是有了 PydanticOutputParser 之类的解析器。

## 教程里的做法

\`\`\`python
from langchain_core.output_parsers import PydanticOutputParser

parser = PydanticOutputParser(pydantic_object=MyModel)
# 把 format_instructions 拼进提示词，让模型按格式输出
\`\`\`

思路：告诉模型「请按这个格式输出」→ 拿到文本 → 代码解析校验。

## OpenClaw 的对应能力：工具层结构化输出

OpenClaw 不需要你手写解析器——**工具的输入输出天然是 JSON Schema**。

每个工具都有严格定义的参数结构，模型调用工具时按 Schema 填参，框架校验后执行，结果同样结构化返回。

\`\`\`json
{
  "name": "web_search",
  "parameters": {
    "type": "object",
    "properties": {
      "query": { "type": "string" }
    },
    "required": ["query"]
  }
}
\`\`\`

## 解析错误处理

教程里要自己处理解析失败（重试、容错）。OpenClaw 在运行时层面处理：

- 参数校验失败 → 框架自动反馈给模型重新生成
- 输出不符合 Schema → 工具层报错并纠正
- 部分失败 → 继续执行其他工具

## 对比总结

| 维度 | 教程 | OpenClaw |
|------|------|----------|
| 结构化方式 | 提示词 + 代码解析 | 工具 Schema 原生约束 |
| 校验 | 自己写 | 框架内置 |
| 失败重试 | 自己写 | 自动纠正 |

**一句话**：教程在模型输出之后做解析，OpenClaw 在模型调用之前就用 Schema 约束住结构。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "输出解析", "结构化", "OpenClaw"],
    coverImage: "/images/cover-oc-parser.jpg",
    readTime: 4,
  },
  {
    id: "openclaw-lcel",
    title: "教程对照：LCEL 链式调用 → OpenClaw 的工具编排",
    excerpt: "教程用 LCEL 的管道符把组件串成链，OpenClaw 用工具调用 + 子代理把任务编排成流程。",
    content: `# 教程对照：LCEL 链式调用 → OpenClaw 的工具编排

教程的第四个模块是 **LCEL（LangChain Expression Language）**：用 \`|\` 管道符把提示词、模型、解析器串成一条链。

## 教程里的做法

\`\`\`python
chain = prompt | llm | parser
result = chain.invoke({"input": "你好"})
\`\`\`

一条链 = 数据从左到右流过每个组件，每个组件消费上一个的输出。

## OpenClaw 的对应能力：工具编排

OpenClaw 的「链」不是代码管道，而是 **Agent 循环中的工具编排**：

1. 模型分析任务 → 决定调用哪个工具
2. 工具执行返回结果
3. 模型根据结果决定下一步
4. 循环直到任务完成

\`\`\`
用户提问 → Agent 理解 → 调 web_search → 分析结果 → 调 exec 处理 → 汇总回答
\`\`\`

## 更复杂的编排：Sub-agents

教程里复杂逻辑要写 LangGraph 图，OpenClaw 里你直接用 **子代理（Sub-agents）** 做并行编排：

\`\`\`javascript
// 同时派多个子代理并行调研
sessions_spawn({ task: "分析 AAPL 股票", label: "aapl" });
sessions_spawn({ task: "分析 TSLA 股票", label: "tsla" });
sessions_yield(); // 等结果回来
\`\`\`

## 对比总结

| 维度 | 教程（LCEL） | OpenClaw |
|------|-------------|----------|
| 编排方式 | 代码管道 | Agent 循环 + 工具 |
| 分支/并行 | 需要 LangGraph | 子代理原生支持 |
| 动态决策 | 有限 | 模型每轮自主决策 |

**一句话**：LCEL 是静态写死的链，OpenClaw 是模型动态决策的编排——链是死的，编排是活的。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "LCEL", "工具编排", "OpenClaw"],
    coverImage: "/images/cover-oc-lcel.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-memory",
    title: "教程对照：记忆与对话历史 → OpenClaw 的 Memory 系统",
    excerpt: "教程里要自己接数据库存对话历史，OpenClaw 用 Markdown 文件就完成了记忆持久化。",
    content: `# 教程对照：记忆与对话历史 → OpenClaw 的 Memory 系统

教程第五个模块是 **记忆与对话历史**。LangChain 用 Memory 类管理历史消息，存内存或接外部数据库。

## 教程里的做法

\`\`\`python
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory()
memory.save_context({"input": "你好"}, {"output": "你好！"})
\`\`\`

问题：内存型记忆重启就丢，持久化要自己接数据库。

## OpenClaw 的对应能力：文件即记忆

OpenClaw 的记忆方式简单粗暴但极其有效：**把记忆写成 Markdown 文件**。模型只记得落盘的内容，没有隐藏状态。

三个核心文件：

- **\`MEMORY.md\`** — 长期记忆：持久的事实、偏好、决策，会话开始时加载
- **\`memory/YYYY-MM-DD.md\`** — 每日笔记：当天发生的事、观察、会话摘要
- **\`DREAMS.md\`**（可选）— 梦境日记与总结

## 用法示例

\`\`\`text
# MEMORY.md
- 用户叫 Talon，称呼「景清老祖」
- 时区：Asia/Shanghai
- 偏好：沟通随意，做事严谨
- 项目：blog-demo（Next.js），仓库在 GitHub
\`\`\`

跟 Agent 说一句「记住我喜欢 TypeScript」，它就会写进记忆文件，下次会话自动生效。

## 分层记忆策略

| 层级 | 文件 | 用途 | 注入时机 |
|------|------|------|----------|
| 长期 | \`MEMORY.md\` | 精选的事实与决策 | 会话开始 |
| 短期 | \`memory/*.md\` | 详细笔记与观察 | 按需检索 |

Agent 会定期把每日笔记里的精华提炼进 \`MEMORY.md\`，把过时的内容清掉——这就是教程里说的记忆整理，只不过它是自动的。

## 记忆检索

\`memory_search\` 工具支持语义搜索记忆文件，即使措辞和原文不同也能找到相关内容——对应教程里的「记忆检索」概念。

**一句话**：教程用代码管理对话历史，OpenClaw 用文件 + 自动整理管理记忆，重启不丢。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "记忆", "Memory", "OpenClaw"],
    coverImage: "/images/cover-oc-memory.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-tools",
    title: "教程对照：Tools 工具调用 → OpenClaw 的工具注册机制",
    excerpt: "教程教你如何给 Agent 定义工具函数，OpenClaw 直接内置了几十个开箱即用的工具。",
    content: `# 教程对照：Tools 工具调用 → OpenClaw 的工具注册机制

教程第六个模块是 **Tools 工具调用**：让 LLM 不只是聊天，还能调用外部函数。

## 教程里的做法

\`\`\`python
from langchain_core.tools import tool

@tool
def add(a: int, b: int) -> int:
    """两数相加"""
    return a + b
\`\`\`

核心：把函数描述成 Schema 给模型，模型按需调用。

## OpenClaw 的对应能力：内置工具全家桶

OpenClaw 内置了大量工具，都是同一套注册机制管理：

| 类别 | 工具示例 |
|------|----------|
| 文件 | read / write / edit / apply_patch |
| 执行 | exec / process |
| 网络 | web_search / web_fetch |
| 调度 | cron |
| 记忆 | memory_search / memory_get |
| 协作 | sessions_spawn / sessions_send |
| 股票 | 行情 / K线 / 资金流 等几十个 |

## 工具的组织方式

- **Built-in tools**：核心系统工具，永远可用
- **Plugin tools**：插件注册的工具（浏览器、语音、日历等）
- **MCP tools**：通过 MCP 协议接入的第三方工具
- **Skill tools**：技能文件指导的工具用法

## 工具策略控制

教程里没有权限概念，OpenClaw 有完整的工具策略：

\`\`\`json5
{
  tools: {
    allow: ["read", "write", "web_search"], // 白名单
    deny: ["exec"],                         // 黑名单优先
  },
}
\`\`\`

还能按频道、按会话、按子代理分别控制工具可用性。

**一句话**：教程从零定义第一个工具，OpenClaw 直接给你几十个现成的，还带权限管理。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "Tools", "工具调用", "OpenClaw"],
    coverImage: "/images/cover-oc-tools.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-vector-embedding",
    title: "教程对照：向量数据库与 Embedding → OpenClaw 的 memory_search",
    excerpt: "教程里要部署向量数据库、写嵌入逻辑，OpenClaw 把语义搜索直接做进了记忆系统。",
    content: `# 教程对照：向量数据库与 Embedding → OpenClaw 的 memory_search

教程第七个模块是 **向量数据库与 Embedding**：把文本转成向量，存进向量库，用相似度做检索。

## 教程里的做法

\`\`\`python
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

vectorstore = Chroma.from_documents(docs, OpenAIEmbeddings())
result = vectorstore.similarity_search("怎么部署模型？")
\`\`\`

要自己：选嵌入模型 → 启动向量库 → 写检索逻辑。

## OpenClaw 的对应能力：内置语义搜索

OpenClaw 的 \`memory_search\` 就是「向量数据库 + Embedding」的封装：

1. 把记忆文件**分块**（chunking）
2. 用嵌入模型转成向量
3. 混合检索（向量 + 关键词）
4. 返回相关片段

\`\`\`
用户：之前我们讨论过 OpenClaw 和 LangChain 的关系吗？
Agent：memory_search({ query: "OpenClaw LangChain 关系" })
→ 命中 8 月 3 日的会话总结，直接引用回答
\`\`\`

## 嵌入提供商可配置

教程里固定用一个嵌入模型，OpenClaw 支持多种提供商切换：

| 提供商 | 是否需要 Key | 特点 |
|--------|-------------|------|
| OpenAI | 是 | 默认 |
| Ollama | 否 | 本地部署 |
| Gemini | 是 | 支持图片/音频索引 |
| Voyage | 是 | 高质量嵌入 |
| Local | 否 | GGUF 模型本地跑 |

\`\`\`json5
{
  agents: {
    defaults: {
      memorySearch: { provider: "ollama" },
    },
  },
}
\`\`\`

**一句话**：教程自己搭向量检索，OpenClaw 把 Embedding + 向量库 + 混合检索打包成了 memory_search 一个工具。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "向量数据库", "Embedding", "OpenClaw"],
    coverImage: "/images/cover-oc-vector.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-rag",
    title: "教程对照：RAG 检索增强 → OpenClaw 的上下文注入",
    excerpt: "教程里 RAG 要自己搭检索+生成链路，OpenClaw 把相关上下文自动注入到每次对话。",
    content: `# 教程对照：RAG 检索增强 → OpenClaw 的上下文注入

教程第八个模块是 **RAG（检索增强生成）**：先从知识库检索相关内容，再带着检索结果去生成答案。

## 教程里的做法

\`\`\`python
retriever = vectorstore.as_retriever()
chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | llm
)
\`\`\`

核心链路：文档切分 → 向量化 → 检索 → 拼进提示词 → 生成。

## OpenClaw 的对应能力：上下文注入

OpenClaw 的 RAG 就是**上下文引擎**（Context Engine）：每次运行前自动决定把哪些内容塞进模型上下文。

它会注入：

1. **工作区文件** — AGENTS.md、SOUL.md、USER.md、MEMORY.md
2. **近期记忆** — 当天的每日笔记
3. **检索结果** — memory_search 命中的相关片段
4. **会话历史** — 按需包含或压缩

## 上下文引擎可插拔

教程里 RAG 链路是写死的，OpenClaw 的上下文引擎是**可插拔插件**：

\`\`\`json5
{
  plugins: {
    slots: {
      contextEngine: "lossless-claw", // 换一个上下文引擎插件
    },
  },
}
\`\`\`

不同的引擎决定：包含哪些消息、如何压缩历史、如何跨子代理管理上下文。

## 历史压缩（上下文管理）

RAG 教程没讲的痛点：上下文越用越满。OpenClaw 内置处理：

- **自动压缩** — 旧消息摘要化
- **会话重置** — daily reset / idle reset
- **上下文修剪** — session pruning

## 对比总结

| 维度 | 教程（RAG） | OpenClaw |
|------|-------------|----------|
| 检索源 | 自建知识库 | 记忆文件 + 工作区 |
| 链路搭建 | 自己拼 | 引擎自动装配 |
| 上下文管理 | 无 | 压缩/重置/修剪 |

**一句话**：RAG 是「先检索再生成」，OpenClaw 把这件事做成了每次对话自动发生的上下文注入。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "RAG", "上下文", "OpenClaw"],
    coverImage: "/images/cover-oc-rag.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-mcp",
    title: "教程对照：MCP 协议 → OpenClaw 原生支持 MCP 服务器",
    excerpt: "教程介绍 MCP 如何统一工具接口，OpenClaw 既是 MCP 客户端也是 MCP 服务器。",
    content: `# 教程对照：MCP 协议 → OpenClaw 原生支持 MCP 服务器

教程第九个模块是 **MCP（Model Context Protocol）**：Anthropic 提出的开放协议，统一 AI 应用与外部工具/数据源的连接方式。

## MCP 解决什么问题？

没有 MCP 时，每接一个新工具就要写一套集成代码。有了 MCP：

- 工具提供方实现一次 MCP 服务器
- AI 应用作为 MCP 客户端直接连接
- 工具发现、调用、鉴权全走标准协议

## OpenClaw 的对应能力：MCP 客户端 + 服务器

OpenClaw 原生支持 MCP，而且**双向**都支持：

### 作为 MCP 客户端

把第三方 MCP 服务器注册进来，工具直接可用：

\`\`\`bash
# 注册一个 MCP 服务器
openclaw mcp add my-tools -- npx some-mcp-server

# 查看状态
openclaw mcp status

# 测试连接
openclaw mcp probe my-tools
\`\`\`

### 作为 MCP 服务器

OpenClaw 自己也能作为 MCP 服务器暴露能力，让 Codex、Claude Code 等外部客户端接入：

\`\`\`bash
openclaw mcp serve
\`\`\`

## 常用命令

| 命令 | 作用 |
|------|------|
| \`openclaw mcp list\` | 列出已保存的服务器 |
| \`openclaw mcp add\` | 添加服务器 |
| \`openclaw mcp configure\` | 配置服务器 |
| \`openclaw mcp tools\` | 查看可用工具 |
| \`openclaw mcp serve\` | 作为服务器对外服务 |

## 对比总结

| 维度 | 教程 | OpenClaw |
|------|------|----------|
| 实现方式 | 手写 MCP 服务器 | CLI 一条命令 |
| 客户端 | 教程示例 | 内置 + 注册即可 |
| 生态 | 自己探索 | MCP 生态直接可用 |

**一句话**：教程教你理解 MCP 协议原理，OpenClaw 让你直接用——注册一个服务器，工具立刻进 Agent 的工具箱。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "MCP", "协议", "OpenClaw"],
    coverImage: "/images/cover-oc-mcp.jpg",
    readTime: 5,
  },
  {
    id: "openclaw-agent-runtime",
    title: "教程对照：Agent 智能体 → OpenClaw 本身就是 Agent 运行时",
    excerpt: "教程教你从零构建 Agent 的思考-行动循环，OpenClaw 直接就是一个完整运行的 Agent。",
    content: `# 教程对照：Agent 智能体 → OpenClaw 本身就是 Agent 运行时

教程第十个模块是 **Agent 智能体**：一个能自主「思考-行动-观察」循环的 AI 程序。

## 教程里的做法

教程教你实现 Agent 的核心循环：

1. 模型接收任务
2. 决定调用哪个工具
3. 执行工具
4. 观察结果
5. 循环直到完成

\`\`\`python
# 简化示意
while not done:
    thought = llm.invoke(messages)
    action = parse_action(thought)
    result = execute(action)
    messages.append(result)
\`\`\`

## OpenClaw 的对应能力：完整的 Agent 运行时

OpenClaw 内置了一个**嵌入式 Agent 运行时**：Agent 循环、工具接线、提示词装配全打包好了。

你现在对话的「春风」就是一个运行中的 Agent，它的循环包括：

- **感知** — 接收消息、心跳、定时任务
- **思考** — 分析任务、规划步骤
- **行动** — 调用工具（读写文件、搜索、执行命令）
- **记忆** — 写入/检索记忆文件
- **反馈** — 回复用户、推送结果

## Agent 的工作区契约

每个 Agent 有自己的工作区，里面是它的「大脑」：

| 文件 | 作用 |
|------|------|
| \`AGENTS.md\` | 操作指令 |
| \`SOUL.md\` | 人设与边界 |
| \`MEMORY.md\` | 长期记忆 |
| \`USER.md\` | 用户画像 |

## 多 Agent 架构

教程只讲单个 Agent，OpenClaw 支持**多 Agent 路由**：

- 每个 Agent 独立工作区、独立会话
- 主 Agent 可以派生子代理并行工作
- 不同 Agent 可配置不同模型

**一句话**：教程教你造 Agent 的轮子，OpenClaw 是一辆已经造好、正在跑的车——你正在跟它对话。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "Agent", "智能体", "OpenClaw"],
    coverImage: "/images/cover-oc-agent.jpg",
    readTime: 6,
  },
  {
    id: "openclaw-langgraph",
    title: "教程对照：LangGraph 图/状态/节点/边 → OpenClaw 的会话与调度",
    excerpt: "教程用 LangGraph 把 Agent 流程画成状态图，OpenClaw 用会话管理 + 调度系统实现同等编排。",
    content: `# 教程对照：LangGraph 图/状态/节点/边 → OpenClaw 的会话与调度

教程第十一个模块是 **LangGraph**：用图的方式编排 Agent——**节点**是处理步骤，**边**是流转方向，**状态**在节点间传递。

## 教程里的做法

\`\`\`python
from langgraph.graph import StateGraph, END

builder = StateGraph(State)
builder.add_node("agent", agent_node)
builder.add_node("tools", tools_node)
builder.add_edge("agent", "tools")
builder.add_conditional_edges("tools", should_continue)
\`\`\`

核心思想：把流程显式建模成图，状态（State）在节点间流动。

## OpenClaw 的对应能力：会话管理 + 调度系统

OpenClaw 没有让你画图，而是用两个内置系统实现了同样的编排：

### 1. 会话管理（状态）

每个对话是一个 **session**，它就是 LangGraph 里的 State：

| 来源 | 行为 |
|------|------|
| 私聊 | 共享会话 |
| 群聊 | 按群隔离 |
| Cron | 每次运行新会话 |
| Webhook | 按钩子隔离 |

会话有生命周期：daily reset（每天重置）、idle reset（闲置重置）、手动 /new。

### 2. 调度系统（边）

LangGraph 的「边」决定流程走向，OpenClaw 用 **cron 调度**决定任务何时流转：

\`\`\`bash
# 每天早上 9 点触发一个流程
openclaw cron add --cron "0 9 * * *" --tz "Asia/Shanghai" \
  --system-event "发送每日早报"
\`\`\`

调度类型：一次性（at）、间隔（every）、Cron 表达式（cron）。

## 从图到现实：完整对应

| LangGraph 概念 | OpenClaw 对应 |
|----------------|---------------|
| State | Session 上下文 |
| Node | Agent 回合 / 工具调用 |
| Edge | 会话路由 / cron 触发 |
| 条件分支 | 模型决策 + 工具选择 |
| 并行分支 | Sub-agents 并发 |

## 背景任务（Task Flow）

复杂流程教程里要精心画图，OpenClaw 提供 **TaskFlow** 做持久化多步任务：有 owner 上下文、状态、等待、子任务，适合收件箱处理等真实工作流。

**一句话**：教程用代码画状态图，OpenClaw 用会话 + 调度 + 任务系统把同样的编排做成了运行时能力。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "LangGraph", "会话管理", "OpenClaw"],
    coverImage: "/images/cover-oc-graph.jpg",
    readTime: 6,
  },
  {
    id: "openclaw-skills",
    title: "教程对照：Skills 技能 → OpenClaw 的 Skill Workshop 系统",
    excerpt: "教程里技能是代码函数，OpenClaw 的技能是 Markdown 文件——教 Agent 如何用工具，还可审查、可复用。",
    content: `# 教程对照：Skills 技能 → OpenClaw 的 Skill Workshop 系统

教程最后一个模块是 **Skills 技能**：给 Agent 封装特定领域的能力（如搜索、编码、分析）。

## 教程里的做法

技能 = 代码：定义函数、绑定工具、配置提示词。每次加技能都要写代码、部署、测试。

## OpenClaw 的对应能力：SKILL.md + Skill Workshop

OpenClaw 的技能是一个目录 + 一个 **\`SKILL.md\`** 文件：

\`\`\`markdown
---
name: hello-world
description: 一个简单技能，用于演示如何创建自定义 Skill
---

# Hello World Skill

当用户说"打招呼"时，执行以下步骤：

1. 使用 exec 工具运行：\`echo "Hello from your custom skill!"\`
2. 返回结果给用户
\`\`\`

## 技能加载顺序

| 优先级 | 来源 | 路径 |
|--------|------|------|
| 1 | Workspace skills | \<workspace\>/skills |
| 2 | Project agent skills | \<workspace\>/.agents/skills |
| 3 | Personal agent skills | ~/.agents/skills |
| 4 | Managed skills | ~/.openclaw/skills |
| 5 | Bundled skills | 随安装内置 |

## Skill Workshop：技能的审查流程

这是教程里完全没有的：**Skill Workshop** 让技能先成为提案（proposal），审查通过后才应用：

\`\`\`javascript
// 创建技能提案
skill_workshop({
  action: "create",
  name: "my-new-skill",
  description: "描述技能功能",
  proposal_content: "# 技能内容...",
});

// 列出提案
skill_workshop({ action: "list" });

// 应用 / 拒绝 / 隔离
skill_workshop({ action: "apply", proposal_id: "..." });
\`\`\`

## 对比总结

| 维度 | 教程 | OpenClaw |
|------|------|----------|
| 技能形式 | 代码 | Markdown 文件 |
| 创建 | 写代码部署 | 写文件即生效 |
| 审查 | 无 | Skill Workshop |
| 共享 | 自己分发 | 工作区/全局多级 |

**一句话**：教程的技能是函数，OpenClaw 的技能是文档——教 Agent 怎么用工具，比替它写死逻辑更灵活。`,
    date: "2026-08-04",
    category: "教程对照",
    tags: ["教程对照", "Skills", "技能", "OpenClaw"],
    coverImage: "/images/cover-oc-skills.jpg",
    readTime: 5,
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
