import { BsPlusLg } from "react-icons/bs";

import css from "./ButtonAddTransactions.module.css";

const handleClick = () => {
  console.log("button works");
  //TODO - add logic once redux store is available
};
function ButtonAddTransactions() {
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
