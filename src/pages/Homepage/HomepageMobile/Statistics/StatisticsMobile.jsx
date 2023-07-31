import Chart from "../../../../components/Chart/Chart.jsx";
import Table from "../../../../components/Table/Table.jsx";
import styles from "./StatisticsMobile.module.css";

const StatisticsMobile = () => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles["statistics-header"]}>Statistics!</h2>
      <Chart />
      <Table />
    </div>
  );
};

export default StatisticsMobile;
