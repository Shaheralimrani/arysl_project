import type { Metadata } from "next";

import "./globals.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "ArYSL | لغة الإشارة اليمنية",
    template: "%s | ArYSL",
  },
  description:
    "منصة ذكية للتعرف على لغة الإشارة اليمنية باستخدام تقنيات الذكاء الاصطناعي.",
  applicationName: "ArYSL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <body className="min-h-dvh flex flex-col antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}