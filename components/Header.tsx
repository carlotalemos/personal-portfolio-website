"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="block w-full relative z-50">

      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-center gap-x-16 font-jost">
        <Link
          href="/about"
          className={`text-sm tracking-wider hover:text-gray-400 transition-colors ${
            pathname === '/about' ? 'text-white/50' : 'text-white'
          }`}
        >
          ABOUT
        </Link>

        <Link href="/" className="mx-1 inline-block text-2xl font-bold tracking-tight hover:text-gray-400 transition-colors">
          <img src="/logo.png" alt="CL logo" className="object-contain block w-30 h-30" />
        </Link>

        <Link
          href="/projects"
          className={`text-sm tracking-wider hover:text-gray-400 transition-colors ${
            pathname.startsWith('/projects') ? 'text-white/50' : 'text-white'
          }`}
        >
          PROJECTS
        </Link>
      </div>
    </header>
  );
}
