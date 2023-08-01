import { useDispatch } from "react-redux";
import styles from "./TableSelect.module.css";
import Select from "react-select";

const TableSelect = ({ options, placeholder, handleChange }) => {
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
    <Select
      options={options}
      components={{
        DropdownIndicator: CustomDropdownIndicator,
      }}
      classNames={{
        menu: () => {
          return styles.dropdown;
        },
        menuList: () => {
          return styles.menuList;
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
      placeholder={placeholder}
      unstyled
      className={styles.select}
      onChange={handleChange}
    />
  );
};

export default TableSelect;
