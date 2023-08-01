import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import TableSelect from "./TableSelect/TableSelect.jsx";
import TableStats from "./TableStats/TableStats.jsx";
import { useSelector } from "react-redux";
import {
  selectSelectedMonth,
  selectSelectedYear,
  selectTransactions,
} from "../../redux/transactions/transactionsSelectors.js";
import getMonthNameFromDDFormat from "../../utils/getMonthNameFromDDFormat.js";

const Table = ({ data }) => {
  const transactions = useSelector(selectTransactions);
  const month = useSelector(selectSelectedMonth);
  const year = useSelector(selectSelectedYear);

  const optionsMonth = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const [optionsYear, setOptionsYear] = useState([]);

  useEffect(() => {
    const newYears = [];
    console.log("transactions: ", transactions.transactions);

    transactions.transactions.forEach((transaction) => {
      const transactionDateShort = transaction.transactionDateShort;
      const [month, year] = transactionDateShort.split("-");

      if (!newYears.some((obj) => obj.value === year)) {
        newYears.push({ value: year, label: year });
      }
    });

    newYears.sort((a, b) => b - a);

    setOptionsYear(newYears);
  }, []);

  return (
    <div className={styles["table-container"]}>
      <div className={styles.filters}>
        <TableSelect
          options={optionsMonth}
          placeholder={getMonthNameFromDDFormat(month)}
        />
        <TableSelect options={optionsYear} placeholder={year} />
      </div>
      <TableStats data={data} />
    </div>
  );
};

export default Table;
