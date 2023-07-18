import React from "react";
import { ColorRing } from "react-loader-spinner";
import css from "./Loader.module.css";

const LoaderComponent = () => {
  return (
    <div className={css.loader__container}>
      <ColorRing
        className={css.loader}
        visible={true}
        height="110"
        width="110"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#FED057", "#FD9498", "#6E78E8", "#81E1FF", "#24CCA7"]}
      />
    </div>
  );
};
export default LoaderComponent;
