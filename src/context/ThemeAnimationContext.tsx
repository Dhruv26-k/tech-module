"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeAnimationContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isAnimationActive: boolean;
  toggleAnimation: () => void;
}

const ThemeAnimationContext = createContext<ThemeAnimationContextType>({
  isDark: true,
  toggleTheme: () => {},
  isAnimationActive: true,
  toggleAnimation: () => {},
});

export function ThemeAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(true);
  const [isAnimationActive, setIsAnimationActive] = useState(true);

  useEffect(() => {
    // Sync Tailwind 'dark' class with HTML element
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleAnimation = () => setIsAnimationActive((prev) => !prev);

  return (
    <ThemeAnimationContext.Provider
      value={{ isDark, toggleTheme, isAnimationActive, toggleAnimation }}
    >
      {children}
    </ThemeAnimationContext.Provider>
  );
}

export const useThemeAnimation = () => useContext(ThemeAnimationContext);