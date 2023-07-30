import { useEffect, useState, createContext, useContext } from "react";
import Header from "../../components/Header/Header.jsx";

import styles from "./Homepage.module.css";
import HomepageMobile from "./HomepageMobile/HomepageMobile.jsx";
import HomepageDesktop from "./HomepageDesktop/HomepageDesktop.jsx";
import tokenAuth from "./token.js";
import { useDispatch, useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/transactionsSelectors.js";
import { getTransactions } from "../../redux/transactions/transactionsOperations.js";

export const HomePageDataContext = createContext([]);
const TransactionsContext = createContext();

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [page, setPage] = useState("Home");
  // const [transactionsData, setTransactionsData] = useState([]);
  const transactionsData = useSelector(selectTransactions);
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
    const width = window.innerWidth;

    if (page === "Currency" && width >= 768) {
      setPage("Home");
    }

    setIsMobile(width < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(getTransactions({ token: "your_token_here" }));
  }, []);

  return (
    <>
      <Header />
      <div>{transactionsData[1]}</div>
      <main className={styles.main}>
        {isMobile ? (
          <HomepageMobile
            page={page}
            setHomePage={setHomePage}
            setStatisticsPage={setStatisticsPage}
            setCurrencyPage={setCurrencyPage}
            // transactionsData={transactionsData}
          />
        ) : (
          <HomepageDesktop
            page={page}
            setHomePage={setHomePage}
            setStatisticsPage={setStatisticsPage}
            setCurrencyPage={setCurrencyPage}
            transactionsData={transactionsData}
          />
        )}
      </main>
    </>
  );
};

export default Homepage;
