import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import usePersistedState from "../utils/usePersistedState";

interface ThemeSwitchData {
  toggleTheme(): void;
}

export const ThemeSwitchContext = createContext({} as ThemeSwitchData);

export const ThemeSwitchProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeSwitchContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeSwitchContext.Provider>
  );
};
