import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eishaverse — A Universe of Her Own",
  description: "A little universe made to celebrate Eisha.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}