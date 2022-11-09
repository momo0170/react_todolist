import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeProvider.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeProvider.Provider>
  );
}
