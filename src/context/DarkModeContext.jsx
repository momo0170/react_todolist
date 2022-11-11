import React, { createContext, useEffect, useState } from 'react';

export const darkModeContext = createContext();
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  // 버튼을 누르면 다크모드를 변경
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    changeDarkMode(!darkMode);
  };
  // 처음 렌더링될 때 로컬스토리지에서 다크모드인지 확인
  // prefers-color-scheme : 사용자의 시스템이 라이트 테마, 다크 테마를 사용하는지 탐지
  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' || // 로컬스토리지에 theme 속성이 dark 이거나
      (!('theme' in localStorage) && // 로컬스토리지에 theme 속성이 없고, 시스템이 다크 모드인 경우
        window.matchMedia('(prefers-color-scheme: dark)').matches);
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
