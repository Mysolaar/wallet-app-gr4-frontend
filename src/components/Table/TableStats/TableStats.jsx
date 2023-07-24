import styles from "./TableStats.module.css";

const data = [
  { category: "Main expenses", sum: 8700 },
  { category: "Products", sum: 3800 },
  { category: "Car", sum: 1500 },
];

const TableStats = () => {
  const totalSum = data.reduce((acc, item) => acc + item.sum, 0);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="table-header">Category</th>
          <th className="table-header">Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className={styles["data-row"]}>
            <td>{item.category}</td>
            <td>{formatNumber(item.sum)}</td>
          </tr>
        ))}
        <tr className={styles.expenses}>
          <td>Expenses:</td>
          <td>{formatNumber(totalSum)}</td>
        </tr>
        <tr className={styles.income}>
          <td>Income:</td>
          <td>{formatNumber(100000)}</td>
        </tr>
      </tbody>
    </table>
  );
};

const formatNumber = (number) => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ");
  // .replace(".", ",");
};

export default TableStats;
