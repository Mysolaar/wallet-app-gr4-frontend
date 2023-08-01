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
import {
  selectSelectedMonth,
  selectSelectedYear,
} from "../../redux/transactions/transactionsSelectors.js";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [page, setPage] = useState("Home");
  const month = useSelector(selectSelectedMonth);
  const year = useSelector(selectSelectedYear);

  const dispatch = useDispatch();

  const setHomePage = () => {
    setPage("Home");
  };

  const setStatisticsPage = () => {
    setPage("Statistics");
  };

  const setCurrencyPage = () => {
    setPage("Currency");
  };

  const handleResize = () => {
    if (page === "Currency" && window.innerWidth >= 768) {
      setPage("Home");
    }

    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(getTransactions({ token: "your_token_here" }));
    dispatch(getTransactionsMonthlySummary({ month, year }));
  }, [dispatch, month, year]);

  return (
    <>
      <Header />
      <main className={styles.main}>
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
        <ButtonAddTransactions />
        {/* <ModalAddTransactions /> */}
      </main>
    </>
  );
};

export default Homepage;
