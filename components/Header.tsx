'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '회사소개', href: '#about' },
  { label: '사업분야', href: '#services' },
  { label: '고객사례', href: '#case-studies' },
  { label: '사업파트너', href: '#partners' },
  { label: '문의', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20 sm:px-10">
        <a href="#" className="flex items-baseline gap-1.5 text-navy-900">
          <span className="font-serif text-xl font-extrabold italic sm:text-2xl">JJ</span>
          <span className="text-base font-bold sm:text-lg">제이투레저개발(주)</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-navy-700 transition-colors hover:text-accent-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-navy-900 md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-navy-100 bg-white px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-semibold text-navy-800"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
