import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <footer className="container">
      <div className={style.footer_inner}>
        <p>Developed by Joy Goswami</p>
        <p>
          Background Photo by:
          <a href="www.freepik.com" target="_blank">
            www.freepik.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
