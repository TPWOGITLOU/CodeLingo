"use client";

import { ThemeProvider } from "next-themes";

const Theme = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default Theme;