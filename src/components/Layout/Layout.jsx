import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import styles from "./Layout.module.css";
import ButtonAddTransactions from "../ButtonAddTransaction/ButtonAddTransactions.jsx";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/global/globalSlice.js";

const Layout = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.blur}>
          <div className={styles.mainContainer}>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </main>
      <ButtonAddTransactions
        handleClick={() => {
          dispatch(openModal("isModalAddTransactionsOpen"));
        }}
      />
    </>
  );
};

export default Layout;
