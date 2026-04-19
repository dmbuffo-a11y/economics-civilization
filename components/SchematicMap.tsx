type Point = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub?: string;
  kind: "airport" | "station" | "dk" | "park" | "church" | "road";
};

const points: Point[] = [
  { id: "airport", x: 760, y: 380, label: "Аэропорт Домодедово", sub: "DME", kind: "airport" },
  { id: "station", x: 460, y: 320, label: "ст. Авиационная", sub: "с 1968", kind: "station" },
  { id: "dk", x: 360, y: 230, label: "ДК «Авиатор»", sub: "музей · стела", kind: "dk" },
  { id: "park", x: 210, y: 150, label: "Парк «Взлёт»", sub: "Лесной пруд", kind: "park" },
  { id: "church", x: 520, y: 170, label: "Храм «Державная»", kind: "church" },
  { id: "a105", x: 100, y: 360, label: "A105 · к Москве", kind: "road" },
];

const color: Record<Point["kind"], string> = {
  airport: "#0f1d2e",
  station: "#2f6fa6",
  dk: "#1f3a56",
  park: "#5b8a64",
  church: "#4d9bd4",
  road: "#7993ad",
};

export function SchematicMap({ highlightId }: { highlightId?: string }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-ink-900/5 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-ink-900/5 bg-paper-100/60 px-5 py-3">
        <p className="font-display text-sm font-semibold text-ink-900">
          Схема связей
        </p>
        <p className="text-[11px] uppercase tracking-[0.14em] text-ink-500">
          не топографически точная
        </p>
      </div>
      <div className="p-4 md:p-6">
        <svg viewBox="0 0 900 520" className="w-full" role="img" aria-label="Схематическая карта Авиагородка">
          <defs>
            <pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#0f1d2e" fillOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="900" height="520" fill="url(#dots)" />
          {/* forest */}
          <g fill="#5b8a64" fillOpacity="0.12">
            <circle cx="180" cy="140" r="90" />
            <circle cx="240" cy="110" r="70" />
            <circle cx="120" cy="200" r="60" />
          </g>
          {/* pond */}
          <ellipse cx="210" cy="150" rx="46" ry="20" fill="#bfd9ee" />
          {/* A105 */}
          <path d="M60 400 Q 280 360 460 320" stroke="#7993ad" strokeWidth="10" strokeLinecap="round" fill="none" strokeDasharray="2 10" />
          {/* rail line */}
          <path d="M460 320 L760 380" stroke="#2f6fa6" strokeWidth="4" fill="none" strokeDasharray="10 6" />
          <path d="M460 320 L200 280" stroke="#2f6fa6" strokeWidth="4" fill="none" strokeDasharray="10 6" opacity="0.4" />
          {/* connectors */}
          <path d="M360 230 L460 320" stroke="#0f1d2e" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M360 230 L210 150" stroke="#0f1d2e" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <path d="M360 230 L520 170" stroke="#0f1d2e" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />

          {/* runway */}
          <g transform="translate(640 370)">
            <rect x="0" y="0" width="220" height="22" rx="3" fill="#0f1d2e" />
            <g fill="#fbfaf6">
              <rect x="12" y="9" width="20" height="4" />
              <rect x="44" y="9" width="20" height="4" />
              <rect x="76" y="9" width="20" height="4" />
              <rect x="108" y="9" width="20" height="4" />
              <rect x="140" y="9" width="20" height="4" />
              <rect x="172" y="9" width="20" height="4" />
            </g>
          </g>

          {/* points */}
          {points.map((p) => {
            const active = highlightId === p.id;
            return (
              <g key={p.id} transform={`translate(${p.x} ${p.y})`}>
                <circle
                  r={active ? 13 : 9}
                  fill={color[p.kind]}
                  stroke="#fbfaf6"
                  strokeWidth="3"
                />
                {active && (
                  <circle
                    r="20"
                    fill="none"
                    stroke={color[p.kind]}
                    strokeOpacity="0.35"
                    strokeWidth="2"
                  />
                )}
                <g transform="translate(14 -4)">
                  <text
                    className="font-display"
                    fontSize="15"
                    fontWeight="600"
                    fill="#0f1d2e"
                  >
                    {p.label}
                  </text>
                  {p.sub && (
                    <text
                      y="18"
                      fontSize="12"
                      fill="#51708c"
                    >
                      {p.sub}
                    </text>
                  )}
                </g>
              </g>
            );
          })}

          {/* compass */}
          <g transform="translate(830 40)" fill="#0f1d2e">
            <circle r="22" fill="#fff" stroke="#0f1d2e" strokeOpacity="0.15" />
            <polygon points="0,-16 4,0 0,14 -4,0" fill="#0f1d2e" />
            <text y="-26" textAnchor="middle" fontSize="11" fill="#51708c">С</text>
          </g>
        </svg>
        <figcaption className="mt-4 text-xs text-ink-500">
          Связи между ключевыми точками микрорайона: аэропорт, станция, ДК,
          парк, храм, выезд на A105. Расстояния и углы условны.
        </figcaption>
      </div>
    </figure>
  );
}
