import React, { createContext } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  // 처음 렌더링될 때 로컬스토리지에서 다크모드인지 확인
  useEffect(() => {
    const isDark = localStorage.theme === 'dark';
    setDarkMode(isDark);
    changeDarkMode(isDark);
  }, []);
  return (
    <darkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

function changeDarkMode(darkMode) {
  // 다크모드면 className에 dark 추가, 로컬스토리지에도 추가
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    // 다크모드가 아니라면 className에 dark 제거
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
