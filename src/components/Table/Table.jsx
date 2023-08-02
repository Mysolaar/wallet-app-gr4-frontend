import { useEffect, useState } from "react";
import styles from "./Table.module.css";
import TableSelect from "./TableSelect/TableSelect.jsx";
import TableStats from "./TableStats/TableStats.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSelectedMonth,
  selectSelectedYear,
  selectTransactions,
} from "../../redux/transactions/transactionsSelectors.js";
import getMonthNameFromDDFormat from "../../utils/getMonthNameFromDDFormat.js";
import {
  setSelectedMonth,
  setSelectedYear,
} from "../../redux/transactions/transactionsOperations.js";

const Table = ({ data }) => {
  const transactions = useSelector(selectTransactions);
  const month = useSelector(selectSelectedMonth);
  const year = useSelector(selectSelectedYear);
  const dispatch = useDispatch();
  const [optionsYear, setOptionsYear] = useState([]);

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

  const handleChangeMonth = (selectedOption) => {
    dispatch(setSelectedMonth({ month: selectedOption.value }));

    // dispatch(getTransactionsMonthlySummary({ month: selectedOption, year }));
  };

  const handleChangeYear = (selectedOption) => {
    dispatch(setSelectedYear({ year: selectedOption.value }));
    // dispatch(getTransactionsMonthlySummary({ month, year: selectedOption }));
  };

  useEffect(() => {
    const newYears = [];

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
          handleChange={handleChangeMonth}
        />
        <TableSelect
          options={optionsYear}
          placeholder={year}
          handleChange={handleChangeYear}
        />
      </div>
      <TableStats data={data} />
    </div>
  );
};

export default Table;
