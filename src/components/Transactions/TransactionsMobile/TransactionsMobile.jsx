import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsMobile.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import PropTypes from "prop-types";

const TransactionsMobile = ({ data, deleteFunction, openEdit }) => {
  return (
    <div className={styles["transactions-container"]}>
      {data.map((transaction, index) => {
        const color = transaction.type === "-" ? styles.pink : styles.green;
        const fontColor =
          transaction.type === "-" ? styles["pink-font"] : styles["green-font"];
        return (
          <div className={styles.transaction} key={index}>
            <div className={`${styles["transaction-row"]} ${color}`}>
              <span>Date:</span>
              <span>{transaction.date}</span>
            </div>

            <div className={`${styles["transaction-row"]} ${color}`}>
              <span>Type:</span>
              <span>{transaction.type}</span>
            </div>

            <div className={`${styles["transaction-row"]} ${color}`}>
              <span>Category:</span>
              <span>{transaction.category}</span>
            </div>

            <div className={`${styles["transaction-row"]} ${color}`}>
              <span>Comment:</span>
              <span>{transaction.comment}</span>
            </div>

            <div className={`${styles["transaction-row"]} ${color}`}>
              <span>Sum:</span>
              <span className={`${fontColor}`}>{transaction.sum}</span>
            </div>

            <div className={`${styles["transaction-row"]} ${color}`}>
              <PrimaryButton text="Delete" onclick={deleteFunction} />
              <span className={styles.edit} onClick={openEdit}>
                <HiOutlinePencil />
                Edit
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

TransactionsMobile.protoTypes = {
  data: PropTypes.array,
  deleteFunction: PropTypes.func,
  openEdit: PropTypes.func,
};

export default TransactionsMobile;
