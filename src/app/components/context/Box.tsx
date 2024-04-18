import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.text,
      }}
    >
      Box
    </div>
  );
};

export default Box;
