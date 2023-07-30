import Table from "../../../../components/Table/Table.jsx";
import styles from "./Statistics.module.css";

const StatisticsDesktop = () => {
  return (
    <div className={styles.statistics}>
      <div className={styles["chart-box"]}>
        <h1 className={styles["statistics-header"]}>Statistics</h1>
        <div className={styles.chart}>CHART PLACEHOLDER</div>
      </div>
      <Table />
    </div>
  );
};

export default StatisticsDesktop;
