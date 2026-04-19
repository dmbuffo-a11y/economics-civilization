"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/data/nav";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-paper-50/80 backdrop-blur supports-[backdrop-filter]:bg-paper-50/70">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 no-underline"
          aria-label="Авиагородок — на главную"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-ink-900 text-white transition group-hover:bg-ink-800"
          >
            <svg viewBox="0 0 32 32" className="h-5 w-5" fill="currentColor">
              <path d="M4 20 L26 10 L24 15 L13 18 L11 24 L9 24 L10 20 Z" />
              <circle cx="25" cy="8" r="1.6" fill="#4d9bd4" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-ink-900">
              Авиагородок
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-ink-500">
              мкрн Авиационный
            </span>
          </span>
        </Link>

        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-700 no-underline transition hover:bg-white hover:text-ink-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-800 md:hidden"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          aria-label="Мобильная навигация"
          className="border-t border-ink-900/5 bg-paper-50 md:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-ink-800 no-underline hover:bg-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
