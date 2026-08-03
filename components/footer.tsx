export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6 text-sm text-stone-500 dark:text-stone-500 text-center">
        <p>© {new Date().getFullYear()} 我的博客 · 用 Next.js 构建</p>
      </div>
    </footer>
  );
}
