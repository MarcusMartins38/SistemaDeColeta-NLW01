import React from "react";
import { ThemeSwitchProvider } from "./hooks/ThemeSwitch";

import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";

function App() {
  return (
    <>
      <ThemeSwitchProvider>
        <Routes />
        <GlobalStyles />
      </ThemeSwitchProvider>
    </>
  );
}

export default App;
