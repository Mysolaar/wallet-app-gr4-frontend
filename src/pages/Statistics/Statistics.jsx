import { useDispatch, useSelector } from "react-redux";
import styles from "./Statistics.module.css";
import {
  selectSelectedMonth,
  selectSelectedYear,
  selectTransactionsMonthlySummary,
} from "../../redux/transactions/transactionsSelectors.js";
import Chart from "../../components/Chart/Chart.jsx";
import Table from "../../components/Table/Table.jsx";
import { useEffect, useState } from "react";
import Currency from "../../components/Currency/Currency.jsx";
import Balance from "../../components/Balance/Balance.jsx";
import Navigate from "../../components/Navigate/Navigate.jsx";
import {
  getTransactions,
  getTransactionsMonthlySummary,
} from "../../redux/transactions/transactionsOperations.js";
import StatisticsMobile from "./StatisticsMobile/StatisticsMobile.jsx";
import StatisticsDesktop from "./StatisticsDesktop/StatisticsDesktop.jsx";

const Statistics = () => {
  const summaryData = useSelector(selectTransactionsMonthlySummary);
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

  useEffect(() => {
    const handleResize = () => {
      // if (page === "Currency" && window.innerWidth >= 768) {
      //   setPage("Home");
      // }

      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(getTransactions({ token: "your_token_here" }));
    dispatch(getTransactionsMonthlySummary({ month, year }));
  }, [dispatch, month, year]);

  return <>{isMobile ? <StatisticsMobile /> : <StatisticsDesktop />}</>;
};

export default Statistics;
