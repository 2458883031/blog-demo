import Link from "next/link";
import type { Post } from "@/data/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group">
      <Link href={`/posts/${post.id}`} className="block">
        <div className="border border-stone-200 dark:border-stone-800 rounded-xl p-6 hover:border-stone-300 dark:hover:border-stone-700 transition-colors bg-white dark:bg-stone-900/50">
          <div className="flex items-center gap-3 text-sm text-stone-500 dark:text-stone-400 mb-3">
            <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs font-medium">
              {post.category}
            </span>
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readTime} 分钟阅读</span>
          </div>
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
            {post.title}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-stone-500 dark:text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
