import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Theme from "@/components/ThemeProvider";

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
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
