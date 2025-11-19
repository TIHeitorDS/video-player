import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
