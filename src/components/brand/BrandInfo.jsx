import React from "react";
import style from "./BrandInfo.module.scss";

function BrandInfo() {
  return (
    <div className={style["herobrand"]}>
      <h1 className={style["brand-name"]}>Audio</h1>
      <p>It's modular and designed to last</p>
    </div>
  );
}
export default BrandInfo;