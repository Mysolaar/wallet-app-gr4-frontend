import Table from "../../../../components/Table/Table.jsx";
import styles from "./StatisticsMobile.module.css";

const StatisticsMobile = () => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles["statistics-header"]}>Statistics!</h2>
      <div className={styles.chart}>CHART PLACEHOLDER</div>
      <Table />
    </div>
  );
};

export default StatisticsMobile;
