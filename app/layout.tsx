import type { Metadata } from "next";
import { Noto_Sans, Roboto_Condensed, Oswald } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "VIDEO Player",
  description: "A simple video player built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-almost-black text-white">
      <body className={`antialiased ${notoSans.className} ${robotoCondensed.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}
