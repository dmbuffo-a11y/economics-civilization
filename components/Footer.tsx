import Link from "next/link";
import { nav } from "@/data/nav";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink-900/10 bg-paper-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-lg font-semibold text-ink-900">
            Авиагородок
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-600">
            Локально-исторический проект о микрорайоне Авиационный в составе
            города Домодедово — месте, которое выросло вместе с аэропортом и
            сложилось в особую городскую среду.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Разделы
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-800 no-underline hover:text-sky-deep hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            О проекте
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-600">
            Не официальный сайт администрации и не туристический портал.
            Независимый редакционный проект. Все иллюстрации — собственные SVG,
            помечены как иллюстрации. Архивные фотографии не используются до
            проверки прав.
          </p>
        </div>
      </div>
      <div className="border-t border-ink-900/10 bg-paper-200/60">
        <div className="container-page flex flex-col justify-between gap-2 py-5 text-xs text-ink-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Авиагородок. Независимый проект.</p>
          <p>
            Официальный топоним — микрорайон Авиационный, городской округ
            Домодедово, Московская область.
          </p>
        </div>
      </div>
    </footer>
  );
}
