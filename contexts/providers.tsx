"use client";
import { ThemeProvider } from "next-themes";
import GlobalContextProvider from "./globalContext";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GlobalContextProvider>{children}</GlobalContextProvider>
    </ThemeProvider>
  );
}
