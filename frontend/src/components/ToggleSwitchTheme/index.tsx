import React, { useContext, useState } from "react";
import { ThemeContext } from "styled-components";
import { ThemeSwitchContext } from "../../hooks/ThemeSwitch";

import Switch from "react-switch";

import light from "../../styles/themes/light";

const ToggleSwitchTheme = () => {
  const { toggleTheme } = useContext(ThemeSwitchContext);
  const { title } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
    />
  );
};

export default ToggleSwitchTheme;
