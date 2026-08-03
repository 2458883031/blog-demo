import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-stone-900 dark:text-stone-50 hover:opacity-80 transition-opacity">
          我的博客
        </Link>
        <nav className="flex items-center gap-6 text-sm text-stone-600 dark:text-stone-400">
          <Link href="/" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            首页
          </Link>
          <Link href="/about" className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
            关于
          </Link>
        </nav>
      </div>
    </header>
  );
}
