import formatNumber from "../../../utils/formatNumber.js";
import styles from "./TableStats.module.css";

const TableStats = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="table-header">Category</th>
          <th className="table-header">Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.categoryNames.map((item, index) => (
          <tr key={index} className={styles["data-row"]}>
            <td>
              <span
                className={`${styles.colorBox}`}
                style={{ backgroundColor: data.categoryColors[index] }}
              ></span>
              {item}
            </td>
            <td>{formatNumber(Number(data.categoryIdValues[index]))}</td>
          </tr>
        ))}
        <tr className={styles.expenses}>
          <td>Expenses:</td>
          <td>{formatNumber(Number(data.expenseValue))}</td>
        </tr>
        <tr className={styles.income}>
          <td>Income:</td>
          <td>{formatNumber(Number(data.incomeValue))}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableStats;
