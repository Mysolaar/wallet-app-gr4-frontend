import React from "react";
import css from "./LoaderMain.module.css";

const LoaderComponent = () => {
  return (
    <div className={css.loader__container}>
      <div className={css.spinner}>
        Loading
        <strong>Wallet</strong>
        <div className={css.spinnerFirst}></div>
        <div className={css.spinnerSecond}></div>
        <div className={css.spinnerThird}></div>
      </div>
    </div>
  );
};
export default LoaderComponent;
