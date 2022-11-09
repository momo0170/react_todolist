import React, { createContext } from 'react';

export const darkModeContext = createContext();

export function DarkModeProvider({ children }) {
  return <DarkModeProvider.Provider>{children}</DarkModeProvider.Provider>;
}
