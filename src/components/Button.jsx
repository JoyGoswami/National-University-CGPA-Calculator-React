import React from "react";
import style from "./Button.module.css";

function Button({ type, text, m, handleClickHome }) {
  return (
    <button
      onClick={handleClickHome}
      className={`${style.btn}`}
      type={type}
      style={{ margin: m }}
    >
      {text}
    </button>
  );
}

export default Button;
