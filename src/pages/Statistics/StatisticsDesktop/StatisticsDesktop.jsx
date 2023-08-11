import { useSelector } from "react-redux";
import styles from "./StatisticsDesktop.module.css";
import Navigate from "../../../components/Navigate/Navigate.jsx";
import Balance from "../../../components/Balance/Balance.jsx";
import Currency from "../../../components/Currency/Currency.jsx";
import { selectTransactionsMonthlySummary } from "../../../redux/transactions/transactionsSelectors.js";
import Chart from "../../../components/Chart/Chart.jsx";
import Table from "../../../components/Table/Table.jsx";

const StatisticsDesktop = () => {
  const summaryData = useSelector(selectTransactionsMonthlySummary);

  return (
    <div className={styles.main}>
      <div className={styles.box1}>
        <div className={styles.wrapper}>
          <div className={styles.navigate}>
            <Navigate
              // setHomePage={setHomePage}
              // setStatisticsPage={setStatisticsPage}
              // setCurrencyPage={setCurrencyPage}
              page="Statistics"
            />
          </div>
          <Balance />
        </div>
        <Currency />
      </div>
      <div className={styles["transactions-box"]}>
        <div className={styles.statistics}>
          <div className={styles["chart-box"]}>
            <h1 className={styles["statistics-header"]}>Statistics</h1>
            <Chart statistics={summaryData} />
          </div>
          <Table data={summaryData} />
        </div>
      </div>
    </div>
  );
};

export default StatisticsDesktop;
