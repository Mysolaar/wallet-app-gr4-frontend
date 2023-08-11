import { useSelector } from "react-redux";
import styles from "./StatisticsMobile.module.css";
import Navigate from "../../../components/Navigate/Navigate.jsx";
import { selectTransactionsMonthlySummary } from "../../../redux/transactions/transactionsSelectors.js";
import Table from "../../../components/Table/Table.jsx";
import Chart from "../../../components/Chart/Chart.jsx";

const StatisticsMobile = () => {
  const summaryData = useSelector(selectTransactionsMonthlySummary);
  return (
    <>
      <Navigate />
      <div className={styles.statisticsMobile}>
        <h2 className={styles["statistics-header"]}>Statistics!</h2>
        <Chart statistics={summaryData} />
        <Table data={summaryData} />
      </div>
    </>
  );
};

export default StatisticsMobile;
