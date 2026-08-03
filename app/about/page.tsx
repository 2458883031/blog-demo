import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors mb-8"
      >
        ← 返回首页
      </Link>

      <div className="bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-50 mb-6">关于我</h1>
        <div className="prose-custom text-stone-700 dark:text-stone-300 space-y-4">
          <p>
            你好！我是一个热爱技术和写作的人。这个博客是我记录学习过程、分享技术心得的地方。
          </p>
          <p>
            我主要关注前端开发、React 生态和 Web 性能优化。在这里我会分享：
          </p>
          <ul>
            <li>技术教程和最佳实践</li>
            <li>项目经验总结</li>
            <li>读书笔记和思考</li>
            <li>偶尔的生活随笔</li>
          </ul>
          <p>
            如果你对这个博客感兴趣，欢迎交流！
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-200 dark:border-stone-800">
          <h2 className="text-lg font-semibold text-stone-900 dark:text-stone-50 mb-4">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
