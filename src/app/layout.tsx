import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-invitation",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Асянди Ан Айлин — 16 сентября 2026",
  description: "Приглашение на первый день рождения Ан Айлин.",
  openGraph: {
    title: "Асянди Ан Айлин — 16 сентября 2026",
    description: "Приглашение на первый день рождения Ан Айлин.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
