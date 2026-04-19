import Link from "next/link";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${asset("/hero.svg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-paper-50/0 via-paper-50/10 to-paper-50" />
      <div className="container-page pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="max-w-3xl">
          <div className="rise">
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-deep" />
              Микрорайон Авиационный · Домодедово
            </span>
          </div>
          <h1 className="rise rise-delay-1 mt-6 text-balance">
            Авиагородок — микрорайон, выросший
            <br className="hidden md:block" /> вместе с аэропортом Домодедово
          </h1>
          <p className="rise rise-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 md:text-xl">
            Официальный топоним — микрорайон Авиационный. В живой речи остаются
            «Авиагородок» и «Авиационная». Это место возникло как посёлок для
            строителей аэропорта и за полвека сложилось в отдельную городскую
            среду: станция, дом культуры, парк у пруда, храм и собственная память.
          </p>
          <div className="rise rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/history" className="btn-primary no-underline">
              Читать историю
              <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/places" className="btn no-underline">
              Ключевые места
            </Link>
            <Link href="/visit" className="btn no-underline">
              Как добраться
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
