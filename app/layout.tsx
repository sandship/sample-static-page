import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlsmLGN",
  description: "未公開のサンプル用ページ",
};

import { Kosugi } from "next/font/google"

const kosugi = Kosugi({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-kosugi",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${kosugi.variable}`}>
        {children}
      </body>
    </html>
  );
}
