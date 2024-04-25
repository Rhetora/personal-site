"use client";
import { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme?: string;
  changeTheme?: (nextTheme?: string) => void;
}
export const ThemeContext = createContext<ThemeContextType>({});

export const ThemeProvider = ({ children }: any) => {
  // Initialize theme state with null
  const [theme, setTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    // This code runs only on the client
    const storedTheme = localStorage.getItem("theme");
    console.log("storedTheme", storedTheme);

    // Set theme state only if it's not set (initial render)
    if (!theme) {
      setTheme(storedTheme || "dark");
    }
  }, [theme]);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const changeTheme = (event?: any) => {
    const nextTheme = event.target.value || null;
    setTheme((prev) => nextTheme || (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
