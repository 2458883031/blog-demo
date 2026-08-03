import Link from "next/link";
import { getPostById, getSortedPosts } from "@/data/posts";
import { PostCard } from "@/components/post-card";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const post = getPostById(id);
  if (!post) return { title: "文章不存在" };
  return { title: post.title, description: post.excerpt };
}

export async function generateStaticParams() {
  return getSortedPosts().map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  const otherPosts = getSortedPosts().filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8"
      >
        ← 返回首页
      </Link>

      <article>
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-400 mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs font-medium">
              {post.category}
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("zh-CN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.readTime} 分钟阅读</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 leading-tight">
            {post.title}
          </h1>
        </div>

        <div
          className="prose-custom text-stone-700 dark:text-stone-300"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
        />

        <div className="flex items-center gap-2 flex-wrap mt-10 pt-8 border-t border-stone-200 dark:border-stone-800">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="mt-16 pt-8 border-t border-stone-200 dark:border-stone-800">
          <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-6">
            推荐阅读
          </h2>
          <div className="space-y-4">
            {otherPosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function markdownToHtml(md: string): string {
  // Split into blocks by double newlines
  const blocks = md.split(/\n\n+/)

  return blocks
    .map((block) => {
      const lines = block.split("\n")
      const trimmed = lines.map((l) => l.trim()).filter(Boolean)
      const firstLine = trimmed[0] || ""

      // Headings
      if (/^### /.test(firstLine)) {
        return `<h3>${firstLine.replace(/^### /, "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1")}</h3>`
      }
      if (/^## /.test(firstLine)) {
        return `<h2>${firstLine.replace(/^## /, "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1")}</h2>`
      }
      if (/^# /.test(firstLine)) {
        return `<h1>${firstLine.replace(/^# /, "").replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1")}</h1>`
      }

      // Blockquote
      if (/^> /.test(firstLine)) {
        const content = trimmed.map((l) => l.replace(/^> /, "")).join(" ")
        return `<blockquote>${content}</blockquote>`
      }

      // Unordered list
      if (/^\- /.test(firstLine)) {
        const items = trimmed.map((l) => `<li>${processInline(l.replace(/^\- /, ""))}</li>`).join("")
        return `<ul>${items}</ul>`
      }

      // Ordered list
      if (/^\d+\. /.test(firstLine)) {
        const items = trimmed.map((l) => `<li>${processInline(l.replace(/^\d+\. /, ""))}</li>`).join("")
        return `<ol>${items}</ol>`
      }

      // Code block
      if (/^\`\`\`/.test(firstLine)) {
        const code = trimmed.slice(1, -1).join("\n")
        return `<pre><code>${code}</code></pre>`
      }

      // Horizontal rule
      if (/^---+$/.test(firstLine)) {
        return "<hr />"
      }

      // Paragraph
      const text = trimmed.join(" ")
      return `<p>${processInline(text)}</p>`
    })
    .join("")
    .replace(/<p><(h[123]|ul|ol|blockquote|pre|hr)/g, "<$1")
    .replace(/<\/(h[123]|ul|ol|blockquote|pre)><\/p>/g, "</$1>")
    .replace(/<p><\/p>/g, "");
}

function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href=\"$2\">$1</a>");
}
