import { useSelector } from "react-redux";
import Chart from "../../../../components/Chart/Chart.jsx";
import Table from "../../../../components/Table/Table.jsx";
import styles from "./Statistics.module.css";
import { selectTransactionsMonthlySummary } from "../../../../redux/transactions/transactionsSelectors.js";

const StatisticsDesktop = () => {
  const summaryData = useSelector(selectTransactionsMonthlySummary);

  return (
    <div className={styles.statistics}>
      <div className={styles["chart-box"]}>
        <h1 className={styles["statistics-header"]}>Statistics</h1>
        <Chart statistics={summaryData} />
      </div>
      <Table data={summaryData} />
    </div>
  );
};

export default StatisticsDesktop;
