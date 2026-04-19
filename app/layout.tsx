import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const display = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const siteUrl = "https://aviagorodok.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Авиагородок — микрорайон Авиационный у аэропорта Домодедово",
    template: "%s · Авиагородок",
  },
  description:
    "Микрорайон Авиационный (Авиагородок) — место, выросшее вместе с аэропортом Домодедово. История, ключевые места, транспорт, источники.",
  keywords: [
    "Авиагородок",
    "Авиационный",
    "Домодедово",
    "аэропорт Домодедово",
    "ДК Авиатор",
    "парк Взлёт",
    "станция Авиационная",
    "микрорайон Домодедово",
  ],
  openGraph: {
    title: "Авиагородок — микрорайон Авиационный у аэропорта Домодедово",
    description:
      "Локально-исторический проект о микрорайоне, выросшем вместе с аэропортом Домодедово.",
    url: siteUrl,
    siteName: "Авиагородок",
    locale: "ru_RU",
    type: "website",
    images: ["/og.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Авиагородок — микрорайон Авиационный",
    description:
      "Локально-исторический проект о микрорайоне у аэропорта Домодедово.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-dvh bg-paper-50 text-ink-900 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink-900 focus:px-3 focus:py-2 focus:text-white"
        >
          К содержимому
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
