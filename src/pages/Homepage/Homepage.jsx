import { useEffect, useState } from "react";
import Header from "../../components/Header/Header.jsx";

import styles from "./Homepage.module.css";
import HomepageMobile from "./HomepageMobile/HomepageMobile.jsx";
import HomepageDesktop from "./HomepageDesktop/HomepageDesktop.jsx";

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [page, setPage] = useState("Home");

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      </main>
    </>
  );
};

export default Homepage;
