import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { PlaceCard } from "@/components/PlaceCard";
import { SchematicMap } from "@/components/SchematicMap";
import { SectionHeading } from "@/components/SectionHeading";
import { places } from "@/data/places";

export default function HomePage() {
  const featured = places.slice(0, 6);
  return (
    <>
      <Hero />

      {/* О месте */}
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <SectionHeading
              eyebrow="О месте"
              title="Не «спальный район у полосы», а отдельная городская ткань"
            />
            <div className="prose-editorial mt-8">
              <p>
                Авиагородок находится в нескольких километрах к северу от
                пассажирского терминала аэропорта Домодедово и входит в состав
                городского округа Домодедово как микрорайон Авиационный. В
                официальных документах используется именно это название, но в
                повседневной речи жителей и в локальной идентичности сохраняются
                «Авиагородок» и «Авиационная».
              </p>
              <p>
                Микрорайон возник в начале 1960-х как посёлок для строителей и
                работников аэропорта. С открытием регулярной работы аэропорта в
                1965 году и железнодорожной ветки в 1968-м место получило два
                своих главных смысловых вектора — авиация и транспорт. К ним
                позже добавились культурный центр (ДК «Авиатор»), приходской
                храм и, уже в 2020-е, полноценная парковая зона «Взлёт» у
                Лесного пруда.
              </p>
              <p>
                Сегодня Авиагородок — это компактная среда, где жилые кварталы,
                станция, дом культуры, храм и парк расположены на расстоянии
                пешей прогулки, а небо буквально участвует в каждом кадре.
              </p>
            </div>
          </div>

          <aside className="grid gap-3">
            <FactStat label="Официальный топоним" value="мкрн Авиационный" sub="городской округ Домодедово" />
            <FactStat label="Бытовые названия" value="Авиагородок · Авиационная" sub="в локальной речи и идентичности" />
            <FactStat label="Связь с аэропортом" value="возник как посёлок строителей" sub="аэропорт открыт 20 мая 1965" />
            <FactStat label="Транспорт" value="ст. Авиационная" sub="ветка открыта в 1968 году" />
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <div className="bg-white/60">
        <Timeline />
      </div>

      {/* Places */}
      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Ключевые места"
              title="Что образует каркас микрорайона"
              lead="Семь точек, вокруг которых складывается повседневная и символическая география Авиагородка."
            />
            <Link href="/places" className="btn no-underline self-start md:self-end">
              Все места
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <PlaceCard key={p.slug} place={p} href={`/places#${p.slug}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Why interesting */}
      <section className="bg-ink-900 py-16 text-paper-50 md:py-24">
        <div className="container-page">
          <span className="chip !border-white/15 !bg-white/10 !text-paper-100">
            Почему это место интересно
          </span>
          <h2 className="mt-4 !text-white text-balance">
            Читаемая история позднесоветской инфраструктуры и городской периферии
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Вокруг большого аэропорта",
                d: "Редкий для Подмосковья случай, когда микрорайон появился не как дачный или спальный, а как служебный — вместе со строительством крупного аэропорта.",
              },
              {
                t: "Позднесоветская среда",
                d: "Пятиэтажки, ДК, стела, станция, школа — хорошо сохранившийся слой городской периферии 1960–1970-х, читаемый почти без поздних переделок.",
              },
              {
                t: "Тема неба и маршрута",
                d: "Взлётные эшелоны, названия, стела у ДК, имя станции — здесь авиация присутствует не декоративно, а как фактическая структура места.",
              },
              {
                t: "Повседневность и новая среда",
                d: "Жилой двор, храм 1990-х, парк «Взлёт» 2023-го — видно, как микрорайон достраивает себя десятилетиями, а не остаётся «законсервированным» посёлком.",
              },
            ].map((item) => (
              <div key={item.t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="!text-white">{item.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper-100/85">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Visit CTA */}
      <section className="py-16 md:py-24">
        <div className="container-page grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <SectionHeading
              eyebrow="Как устроен микрорайон"
              title="Схема связей, а не топографическая карта"
              lead="Аэропорт, станция, ДК, парк, храм и выезд на A105 — шесть точек, которые достаточно, чтобы понять геометрию места."
            />
            <div className="mt-8">
              <SchematicMap />
            </div>
          </div>
          <div className="rounded-2xl border border-ink-900/5 bg-paper-100 p-8 md:p-10">
            <h3>Как сюда приехать</h3>
            <ul className="mt-6 space-y-5 text-[15px] leading-relaxed text-ink-700">
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sky-deep/10 text-sky-deep">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M4 12h16v2H4zM6 16h12v2H6zM7 8h10v2H7z"/></svg>
                </span>
                <div>
                  <p className="font-medium text-ink-900">Электричкой</p>
                  <p className="mt-1">Платформа «Авиационная» на ветке Москва — аэропорт Домодедово. Станция открыта в 1968 году вместе с самой веткой и остаётся главной транспортной точкой микрорайона.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink-900/5 text-ink-800">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1Zm2 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
                </span>
                <div>
                  <p className="font-medium text-ink-900">На автомобиле</p>
                  <p className="mt-1">Со стороны Москвы — по трассе A105 (Домодедовское шоссе) с последующим съездом к микрорайону; с южной стороны — через городской округ Домодедово.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-grove/15 text-grove">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 2 4 22h16L12 2Z"/></svg>
                </span>
                <div>
                  <p className="font-medium text-ink-900">От аэропорта</p>
                  <p className="mt-1">Микрорайон расположен к северу от пассажирского терминала. Актуальные маршруты наземного транспорта лучше проверять по расписанию: они меняются, и выдумывать их мы не будем.</p>
                </div>
              </li>
            </ul>
            <Link href="/visit" className="btn-primary mt-8 no-underline">
              Подробный маршрут
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources CTA */}
      <section className="pb-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-900/10 bg-paper-100/60 p-8 md:flex-row md:items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.14em] text-ink-500">Честно об источниках</p>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-700">
                Мы опираемся на официальные муниципальные материалы, публикации
                аэропорта и ДК «Авиатор», а локальные публикации используем как
                вторичный контекст. Где источники расходятся — показываем оба.
              </p>
            </div>
            <Link href="/sources" className="btn no-underline">
              Источники и права
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FactStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-900/5 bg-white p-5 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
        {label}
      </p>
      <p className="mt-2 font-display text-lg font-semibold text-ink-900">
        {value}
      </p>
      <p className="mt-1 text-sm text-ink-600">{sub}</p>
    </div>
  );
}
