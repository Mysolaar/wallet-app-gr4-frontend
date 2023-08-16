import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import styles from "./Layout.module.css";
import ButtonAddTransactions from "../ButtonAddTransaction/ButtonAddTransactions.jsx";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../redux/global/globalSlice.js";
import { selectIsModalAddTransactionOpen } from "../../redux/global/globalSelectors.js";
import ModalAddTransactions from "../ModalAddTransactions/ModalAddTransactions.jsx";

const Layout = () => {
  const dispatch = useDispatch();

  const isModalAddTransactionsOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

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
      {isModalAddTransactionsOpen && (
        <ModalAddTransactions
          type="add"
          handleClose={() => dispatch(closeModal("isModalAddTransactionsOpen"))}
        />
      )}
    </>
  );
};

export default Layout;
