import { useSelector } from "react-redux";
import formatNumber from "../../../utils/formatNumber.js";
import styles from "./TableStats.module.css";
import { selectTransactionsMonthlySummary } from "../../../redux/transactions/transactionsSelectors.js";

const TableStats = () => {
  const summaryData = useSelector(selectTransactionsMonthlySummary);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="table-header">Category</th>
          <th className="table-header">Sum</th>
        </tr>
      </thead>
      <tbody>
        {summaryData.categoryNames?.map((item, index) => (
          <tr key={index} className={styles["data-row"]}>
            <td>
              <span
                className={`${styles.colorBox}`}
                style={{ backgroundColor: summaryData.categoryColors[index] }}
              ></span>
              {item}
            </td>
            <td>{formatNumber(Number(summaryData.categoryIdValues[index]))}</td>
          </tr>
        ))}
        <tr className={styles.expenses}>
          <td>Expenses:</td>
          <td>{formatNumber(Number(summaryData.expenseValue))}</td>
        </tr>
        <tr className={styles.income}>
          <td>Income:</td>
          <td>{formatNumber(Number(summaryData.incomeValue))}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableStats;
