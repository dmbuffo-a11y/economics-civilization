import type { Metadata } from "next";
import Link from "next/link";
import { factSources, mediaCredits } from "@/data/sources";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Источники и права",
  description:
    "Источники фактов, иерархия доверия и атрибуция изображений. Как построена проверка фактов на сайте об Авиагородке.",
};

export default function SourcesPage() {
  return (
    <>
      <section className="border-b border-ink-900/5 bg-paper-100/50 py-16 md:py-20">
        <div className="container-page">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-ink-500">
            <Link href="/" className="no-underline hover:underline">Главная</Link>
            <span className="mx-2">·</span>
            <span>Источники</span>
          </nav>
          <SectionHeading
            eyebrow="Источники"
            title="Источники и права"
            lead="Сайт — редакционный проект, поэтому мы явно отделяем официальные муниципальные и ведомственные материалы от локальных публикаций и показываем, где что используется."
          />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-page grid gap-12 md:grid-cols-[1.3fr_1fr]">
          <div className="prose-editorial">
            <h2>Иерархия доверия</h2>
            <p>
              При подготовке текстов мы опираемся на источники в таком порядке:
            </p>
            <ol className="mt-4 list-decimal pl-6 marker:text-sky-deep space-y-2">
              <li>Официальный сайт городского округа Домодедово.</li>
              <li>Официальные материалы аэропорта Домодедово.</li>
              <li>Официальные страницы и публикации ДК «Авиатор».</li>
              <li>Wikimedia Commons и иные медиаресурсы с прозрачной лицензией.</li>
              <li>Стабильные справочные источники по транспорту и топонимике.</li>
              <li>
                Локальные сайты, сообщества и краеведческие публикации — как
                вторичный контекст, а не как единственная опора для спорных
                фактов.
              </li>
            </ol>
            <p>
              Там, где официальный и локальный источник расходятся (например,
              первые дома Авиагородка — 1962 или 1963 год), мы не выбираем
              «правильную» версию, а явно показываем оба варианта и называем их
              источники.
            </p>
            <p>
              Мы сознательно не используем на сайте архивные фотографии без
              понятного лицензионного статуса. Все изображения — собственные
              SVG-иллюстрации, помеченные как иллюстрации. Это сознательный
              выбор: лучше честная графика, чем хорошо выглядящее, но
              юридически сомнительное «архивное фото».
            </p>
          </div>

          <aside className="rounded-2xl border border-ink-900/5 bg-paper-100/60 p-6 text-sm leading-relaxed text-ink-700">
            <p className="font-display text-sm uppercase tracking-[0.14em] text-ink-500">
              Замечание редакции
            </p>
            <p className="mt-3">
              Сайт не является официальным сайтом администрации города или
              аэропорта. Это независимый локально-исторический digital-проект.
              При использовании текстов ссылайтесь на него и, где нужно, — на
              первоисточники, указанные ниже.
            </p>
          </aside>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page space-y-12">
          {factSources.map((group) => (
            <div key={group.title}>
              <h2 className="!text-2xl">{group.title}</h2>
              <ul className="mt-6 divide-y divide-ink-900/10 overflow-hidden rounded-2xl border border-ink-900/5 bg-white">
                {group.items.map((item) => (
                  <li key={item.label} className="p-5 md:p-6">
                    <p className="font-display font-semibold text-ink-900">
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noreferrer nofollow"
                          className="text-sky-deep underline decoration-sky/40 hover:decoration-sky-deep"
                        >
                          {item.label}
                        </a>
                      ) : (
                        item.label
                      )}
                    </p>
                    {item.note && (
                      <p className="mt-2 text-sm text-ink-600">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <h2 className="!text-2xl">Атрибуция изображений</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-700">
            Все визуальные материалы на сайте — собственный контент проекта.
            Если по какому-либо блоку у нас нет юридически чистой возможности
            использовать документальное фото, мы используем SVG-иллюстрацию,
            которая явно помечена как иллюстрация и не выдаёт себя за архивное
            изображение.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-ink-900/5 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-paper-100 text-xs uppercase tracking-[0.14em] text-ink-500">
                <tr>
                  <th className="p-4">Где используется</th>
                  <th className="p-4">Файлы</th>
                  <th className="p-4">Автор</th>
                  <th className="p-4">Лицензия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-900/10">
                {mediaCredits.map((c) => (
                  <tr key={c.where} className="align-top">
                    <td className="p-4 text-ink-900">{c.where}</td>
                    <td className="p-4 font-mono text-[12px] text-ink-700">{c.file}</td>
                    <td className="p-4 text-ink-700">{c.author}</td>
                    <td className="p-4 text-ink-700">
                      <p>{c.license}</p>
                      {c.note && (
                        <p className="mt-2 text-xs italic text-ink-500">
                          {c.note}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-600">
            Заметили фактическую неточность или ошибку в атрибуции? Это живой
            проект — обратная связь поможет сделать его точнее. Контакт можно
            добавить в следующих итерациях сайта.
          </p>
        </div>
      </section>
    </>
  );
}
