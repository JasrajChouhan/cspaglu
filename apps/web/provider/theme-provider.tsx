"use client";

import { ThemeProvider } from "next-themes";
import React, { useEffect } from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
}
