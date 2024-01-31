import React from "react";
import style from "./PageLoader.module.css";

function PageLoader() {
  return (
    <div className={style.loaderContainer}>
      <div className={style.ring}></div>
      <div className={style.ring}></div>
      <div className={style.ring}></div>
      <span className={style.loading}>Loading</span>
    </div>
  );
}

export default PageLoader;
