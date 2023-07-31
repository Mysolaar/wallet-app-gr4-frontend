import styles from "./Mainpage.module.css";
import Navigate from "../../../../components/Navigate/Navigate.jsx";
import Transactions from "../../../../components/Transactions/Transactions.jsx";
import StatisticsDesktop from "../Statistics/Statistics.jsx";
import Balance from "../../../../components/Balance/Balance.jsx";
import Currency from "../../../../components/Currency/Currency.jsx";

const MainpageDesktop = ({
  page,
  setHomePage,
  setStatisticsPage,
  setCurrencyPage,
}) => {
  return (
    <div className={styles.main}>
      <div className={styles.box1}>
        <div className={styles.wrapper}>
          <div className={styles.navigate}>
            <Navigate
              setHomePage={setHomePage}
              setStatisticsPage={setStatisticsPage}
              setCurrencyPage={setCurrencyPage}
              page={page}
            />
          </div>
          <Balance />
        </div>
        <Currency />
      </div>
      <div className={styles["transactions-box"]}>
        {(() => {
          switch (page) {
            case "Home":
              return <Transactions />;
            case "Statistics":
              return <StatisticsDesktop />;
            default:
              return <div>Sorry, something went wrong</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default MainpageDesktop;
