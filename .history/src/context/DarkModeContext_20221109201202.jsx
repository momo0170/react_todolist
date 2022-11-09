import React, { createContext } from 'react';
import { useState } from 'react';

export const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return <DarkModeProvider.Provider>{children}</DarkModeProvider.Provider>;
}
