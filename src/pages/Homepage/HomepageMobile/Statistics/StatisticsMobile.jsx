import Table from "../../../../components/Table/Table.jsx";
import styles from "./StatisticsMobile.module.css";

const StatisticsMobile = () => {
  return (
    <div className={styles.statistics}>
      <h1 className={styles["statistics-header"]}>Statistics</h1>
      <div className={styles.chart}>CHART PLACEHOLDER</div>
      <Table />
    </div>
  );
};

export default StatisticsMobile;
