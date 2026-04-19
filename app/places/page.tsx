import type { Metadata } from "next";
import Link from "next/link";
import { places } from "@/data/places";
import { SectionHeading } from "@/components/SectionHeading";
import { SchematicMap } from "@/components/SchematicMap";

export const metadata: Metadata = {
  title: "Места",
  description:
    "Ключевые точки Авиагородка: ДК «Авиатор», музей аэропорта, стела, парк «Взлёт», Лесной пруд, станция Авиационная, храм «Державная».",
};

export default function PlacesPage() {
  return (
    <>
      <section className="border-b border-ink-900/5 bg-paper-100/50 py-16 md:py-20">
        <div className="container-page">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-ink-500">
            <Link href="/" className="no-underline hover:underline">Главная</Link>
            <span className="mx-2">·</span>
            <span>Места</span>
          </nav>
          <SectionHeading
            eyebrow="Места"
            title="Что образует каркас Авиагородка"
            lead="Не список достопримечательностей, а набор точек, вокруг которых микрорайон собирает себя — как среду, историю и ежедневный маршрут."
          />
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <SchematicMap />
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page space-y-14 md:space-y-20">
          {places.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="scroll-mt-24 grid gap-8 md:grid-cols-2 md:gap-12 md:items-center"
            >
              <div className={i % 2 === 0 ? "md:order-1" : "md:order-2"}>
                <div className="card">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-sky-mist">
                    <img
                      src={p.illustration}
                      alt={p.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-ink-700 backdrop-blur">
                      иллюстрация
                    </span>
                  </div>
                </div>
              </div>
              <div className={i % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <span className="chip">{p.tag}</span>
                <h2 className="mt-4">{p.name}</h2>
                <p className="mt-3 text-lg text-ink-700">{p.short}</p>

                <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-700">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Почему важно
                    </p>
                    <p className="mt-2">{p.why}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Историческая справка
                    </p>
                    <p className="mt-2">{p.history}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-2xl border border-ink-900/10 bg-paper-100/60 p-8 text-sm leading-relaxed text-ink-700">
            <p className="font-display text-sm uppercase tracking-[0.14em] text-ink-500">
              Замечание
            </p>
            <p className="mt-3 max-w-3xl">
              Все изображения на этой странице — собственные SVG-иллюстрации
              проекта. Они передают характер места, но не являются архивными
              фотографиями. Атрибуция — на странице{" "}
              <Link href="/sources" className="text-sky-deep underline">
                Источники и права
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
