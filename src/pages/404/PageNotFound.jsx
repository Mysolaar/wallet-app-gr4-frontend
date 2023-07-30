import React from "react";
import css from "./PageNotFound.module.css";
import PrimaryButton from "../../components/reusableButtons/PrimaryButton/PrimaryButton";
import { useNavigate } from "react-router-dom";
import ReactWallet from "./../../icons/wallet-icon.svg";
function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className={css.layout}>
      <div className={css.image}></div>
      <div className={css.messageContainer}>
        <div className={css.logo}>
          <img
            src={ReactWallet}
            alt="wallet icon"
            width={40}
            height={40}
            className={css.iconWallet}
          />
          <h1 className={css.title}>Wallet</h1>
        </div>

        <h2 className={css.message}>
          Sorry, the page you were looking for was not found.
        </h2>

        <PrimaryButton onclick={() => navigate(-1)} text="Take me back" />
      </div>
    </main>
  );
}

export default PageNotFound;
