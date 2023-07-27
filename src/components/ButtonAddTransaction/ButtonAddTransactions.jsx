import { BsPlusLg } from "react-icons/bs";

import css from "./ButtonAddTransactions.module.css";

function ButtonAddTransactions({ handleClick }) {
  return (
    <button
      type="button"
      title="add transactions"
      className={css.button}
      onClick={handleClick}
    >
      <BsPlusLg color="#fff" size={30} />
    </button>
  );
}

export default ButtonAddTransactions;
