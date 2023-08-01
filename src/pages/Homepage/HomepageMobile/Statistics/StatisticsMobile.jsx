import { useSelector } from "react-redux";
import Chart from "../../../../components/Chart/Chart.jsx";
import Table from "../../../../components/Table/Table.jsx";
import styles from "./StatisticsMobile.module.css";
import { selectTransactionsMonthlySummary } from "../../../../redux/transactions/transactionsSelectors.js";

const StatisticsMobile = () => {
  const summaryData = useSelector(selectTransactionsMonthlySummary);
  return (
    <div className={styles.statistics}>
      <h2 className={styles["statistics-header"]}>Statistics!</h2>
      <Chart data={summaryData} />
      <Table data={summaryData} />
    </div>
  );
};

export default StatisticsMobile;
