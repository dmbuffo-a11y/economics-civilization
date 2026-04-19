import Link from "next/link";
import type { Place } from "@/data/places";

export function PlaceCard({ place, href }: { place: Place; href?: string }) {
  const content = (
    <article className="card group flex h-full flex-col">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-sky-mist">
        <img
          src={place.illustration}
          alt={place.alt}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[11px] font-medium text-ink-700 backdrop-blur">
          иллюстрация
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-ink-900/85 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {place.tag}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg md:text-xl">{place.name}</h3>
        <p className="mt-2 text-sm text-ink-600">{place.short}</p>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
          {place.why}
        </p>
        {href && (
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-sky-deep">
            Подробнее
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className="no-underline">
      {content}
    </Link>
  ) : (
    content
  );
}
