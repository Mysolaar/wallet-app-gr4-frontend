import Select from "react-select";
import styles from "./Table.module.css";

const data = [
  { category: "Main expenses", sum: 8700 },
  { category: "Products", sum: 3800 },
  { category: "Car", sum: 1500 },
];

const Table = () => {
  const totalSum = data.reduce((acc, item) => acc + item.sum, 0);
  //TODO dodać fetch danych

  const optionsMonth = [
    { value: "january", label: "January" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
    { value: "option6", label: "Option 6" },
    { value: "option7", label: "Option 7" },
    // Add more options as needed
  ];

  // Define your options for the second Select component
  const optionsYear = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },

    // Add more options as needed
  ];

  const CustomDropdownIndicator = () => (
    <svg
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L10 10L19 1" stroke="black" />
    </svg>
  );

  return (
    <div className={styles["table-container"]}>
      <div className={styles.filters}>
        <Select
          options={optionsMonth}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
          classNames={{
            menu: () => {
              return styles.dropdown;
            },
            option: () => {
              return styles.option;
            },
            valueContainer: () => {
              return styles.valueContainer;
            },
            indicatorsContainer: () => {
              return styles.dropdownIndicator;
            },
          }}
          placeholder={"Month..."}
          unstyled
          className={styles.select}
        />

        <Select
          options={optionsYear}
          components={{
            DropdownIndicator: CustomDropdownIndicator,
          }}
          classNames={{
            menu: () => {
              return styles.dropdown;
            },
            option: () => {
              return styles.option;
            },
            valueContainer: () => {
              return styles.valueContainer;
            },
            indicatorsContainer: () => {
              return styles.dropdownIndicator;
            },
          }}
          placeholder={"Year..."}
          unstyled
          className={styles.select}
        />
      </div>
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
    </div>
  );
};

const formatNumber = (number) => {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ");
  // .replace(".", ",");
};

export default Table;
