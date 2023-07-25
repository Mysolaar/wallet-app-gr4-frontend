import styles from "./Table.module.css";
import TableSelect from "./TableSelect/TableSelect.jsx";
import TableStats from "./TableStats/TableStats.jsx";

const Table = () => {
  //TODO dodać fetch danych

  const optionsMonth = [
    { value: "january", label: "January" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
  ];

  const optionsYear = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  return (
    <div className={styles["table-container"]}>
      <div className={styles.filters}>
        <TableSelect options={optionsMonth} placeholder={"Month..."} />
        <TableSelect options={optionsYear} placeholder={"Year..."} />
      </div>
      <TableStats />
    </div>
  );
};

export default Table;
