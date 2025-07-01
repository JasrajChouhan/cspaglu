"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

export default function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  // Resolve theme to avoid undefined or system during hydration
  const resolvedTheme =
    theme === "system" || theme === undefined ? "light" : theme;

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="w-5 h-5 hover:scale-105 cursor-pointer"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
