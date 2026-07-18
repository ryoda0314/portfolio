import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";
import { profile } from "@/data/profile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto",
});

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-kr",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.nameRomaji} — Portfolio`,
    template: `%s — ${profile.nameRomaji}`,
  },
  description: profile.intro,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJP.variable} ${notoSansKR.variable}`}
        style={
          {
            "--font-body": `var(--font-inter), var(--font-noto), var(--font-noto-kr)`,
          } as React.CSSProperties
        }
      >
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
