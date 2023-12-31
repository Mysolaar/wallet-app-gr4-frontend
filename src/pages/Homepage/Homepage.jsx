import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";

import styles from "./Homepage.module.css";
import HomepageMobile from "./HomepageMobile/HomepageMobile.jsx";
import HomepageDesktop from "./HomepageDesktop/HomepageDesktop.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  getTransactions,
  getTransactionsMonthlySummary,
} from "../../redux/transactions/transactionsOperations.js";
import ButtonAddTransactions from "../../components/ButtonAddTransaction/ButtonAddTransactions.jsx";
import ModalAddTransactions from "../../components/ModalAddTransactions/ModalAddTransactions.jsx";
import { openModal, closeModal } from "../../redux/global/globalSlice.js";
import {
  selectCurrentPage,
  selectIsModalAddTransactionOpen,
} from "../../redux/global/globalSelectors.js";
import {
  selectSelectedMonth,
  selectSelectedYear,
} from "../../redux/transactions/transactionsSelectors.js";
import { setPage } from "../../redux/global/globalSlice.js";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const page = useSelector(selectCurrentPage);
  const month = useSelector(selectSelectedMonth);
  const year = useSelector(selectSelectedYear);

  const dispatch = useDispatch();

  const isModalAddTransactionsOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

  const setHomePage = () => {
    dispatch(setPage("Home"));
  };

  const setStatisticsPage = () => {
    dispatch(setPage("Statistics"));
  };

  const setCurrencyPage = () => {
    dispatch(setPage("Currency"));
  };

  useEffect(() => {
    const handleResize = () => {
      if (page === "Currency" && window.innerWidth >= 768) {
        setPage("Home");
      }

      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(getTransactions({ token: "your_token_here" }));
    dispatch(getTransactionsMonthlySummary({ month, year }));
  }, [dispatch, month, year]);

  return (
    <>
      {/* <Header />
      <main className={styles.main}>
        <div className={styles.blur}>
          <div className={styles.mainContainer}> */}
      {isMobile ? (
        <HomepageMobile
          page={page}
          setHomePage={setHomePage}
          setStatisticsPage={setStatisticsPage}
          setCurrencyPage={setCurrencyPage}
        />
      ) : (
        <HomepageDesktop
          page={page}
          setHomePage={setHomePage}
          setStatisticsPage={setStatisticsPage}
          setCurrencyPage={setCurrencyPage}
        />
      )}
      {/* {isModalAddTransactionsOpen && (
        <ModalAddTransactions
          type="add"
          handleClose={() => dispatch(closeModal("isModalAddTransactionsOpen"))}
        />
      )} */}
      {/* </div>
        </div>
      </main>
      <ButtonAddTransactions
        handleClick={() => {
          dispatch(openModal("isModalAddTransactionsOpen"));
        }}
      /> */}
    </>
  );
};

export default Homepage;
