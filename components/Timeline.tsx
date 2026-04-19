import { timeline } from "@/data/timeline";

const tagColor: Record<string, string> = {
  "жильё": "bg-paper-200 text-ink-800",
  "аэропорт": "bg-sky-mist text-sky-deep",
  "транспорт": "bg-sky-soft text-ink-800",
  "культура": "bg-grove-soft text-ink-800",
  "вера": "bg-paper-100 text-ink-700",
  "статус": "bg-ink-900 text-white",
  "среда": "bg-grove-soft text-ink-800",
};

export function Timeline() {
  return (
    <section id="timeline" aria-labelledby="timeline-title" className="py-16 md:py-24">
      <div className="container-page">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip">Хронология</span>
            <h2 id="timeline-title" className="mt-4">
              Как складывался Авиагородок
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-600">
            От первых домов конца 1962 — начала 1963 года до парка «Взлёт» 2023-го.
            Где официальные и локальные источники расходятся — мы показываем оба.
          </p>
        </div>

        <ol className="relative mt-14 space-y-10 md:space-y-0">
          <span
            aria-hidden
            className="absolute left-4 top-2 bottom-2 w-px bg-ink-900/10 md:left-1/2"
          />
          {timeline.map((entry, i) => {
            const side = i % 2 === 0 ? "md:pr-12 md:text-right md:items-end md:justify-self-end" : "md:pl-12 md:col-start-2";
            return (
              <li
                key={entry.year + entry.title}
                className="relative grid grid-cols-1 md:grid-cols-2 md:gap-0"
              >
                <span
                  aria-hidden
                  className="absolute left-4 top-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-paper-50 bg-sky-deep md:left-1/2"
                />
                <div className={`pl-10 md:pl-0 ${side}`}>
                  <span className="font-display text-sm uppercase tracking-[0.14em] text-sky-deep">
                    {entry.year}
                  </span>
                  <h3 className="mt-2">{entry.title}</h3>
                  {entry.tag && (
                    <span
                      className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-medium ${tagColor[entry.tag] ?? "bg-paper-200 text-ink-700"}`}
                    >
                      {entry.tag}
                    </span>
                  )}
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                    {entry.body}
                  </p>
                  {entry.note && (
                    <p className="mt-3 text-xs italic text-ink-500">
                      Примечание: {entry.note}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
