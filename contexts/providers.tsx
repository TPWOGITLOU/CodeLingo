"use client";
import { ThemeProvider } from "next-themes";
import LanguageContextProvider from "./languageContext";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageContextProvider>{children}</LanguageContextProvider>
    </ThemeProvider>
  );
}
