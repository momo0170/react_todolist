import React, { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // 처음 렌더링될 때 로컬스토리지에서 다크모드인지 확인
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark').matches);
    setDarkMode(isDark);
    changeDarkMode(isDark);
  }, []);
  return (
    <DarkModeProvider.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeProvider.Provider>
  );
}

function changeDarkMode() {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}

export const useDarkMode = () => useContext(darkModeContext);
