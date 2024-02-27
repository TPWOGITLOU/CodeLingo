import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../../contexts/providers";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Header />
          <Providers>{children}</Providers>
        </Suspense>
      </body>
    </html>
  );
}
