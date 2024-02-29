import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../../contexts/providers";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-fredoka",
  display: "swap"
});

export const metadata: Metadata = {
  title: "CodeLingo",
  description: "Helping you learn to code",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="gradient-background dark:bg-gradient-to-r from-slate-900 to-slate-700 min-w-[460px]"
      lang="en"
      suppressHydrationWarning
    >
      <body className={fredoka.className}>
        <Suspense fallback={<Loading />}>
          <Providers>
            <Header />
            {children}
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
