import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsMobile.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import PropTypes from "prop-types";
import changeDateFormat from "../../../utils/changeDateFormat.js";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTransactions,
} from "../../../redux/transactions/transactionsSelectors.js";
import LoaderComponent from "../../Loader/Loader.js";
import { deleteTransaction } from "../../../redux/transactions/transactionsOperations.js";

const TransactionsMobile = ({ handleDelete, openEdit }) => {
  const data = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);

  const sortedTransactions = [...data.transactions].sort((a, b) => {
    // Assuming transactionDate is in "dd.mm.yyyy" format
    const dateA = new Date(a.transactionDate.split(".").reverse().join("-"));
    const dateB = new Date(b.transactionDate.split(".").reverse().join("-"));
    return dateB - dateA; // Sort in descending order (newest to oldest)
  });

  return (
    <div className={styles["transactions-container"]}>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        sortedTransactions.map((transaction, index) => {
          const color =
            transaction.typeOfTransaction === "Expense"
              ? styles.pink
              : styles.green;
          const fontColor =
            transaction.typeOfTransaction === "Expense"
              ? styles["pink-font"]
              : styles["green-font"];

          const type = transaction.typeOfTransaction === "Expense" ? "-" : "+";
          return (
            <div className={styles.transaction} key={index}>
              <div className={`${styles["transaction-row"]} ${color}`}>
                <span>Date:</span>
                <span>{changeDateFormat(transaction.transactionDate)}</span>
              </div>

              <div className={`${styles["transaction-row"]} ${color}`}>
                <span>Type:</span>
                <span>{type}</span>
              </div>

              <div className={`${styles["transaction-row"]} ${color}`}>
                <span>Category:</span>
                <span>{`Car`}</span>
              </div>

              <div className={`${styles["transaction-row"]} ${color}`}>
                <span>Comment:</span>
                <span>{transaction.comment}</span>
              </div>

              <div className={`${styles["transaction-row"]} ${color}`}>
                <span>Sum:</span>
                <span className={`${fontColor}`}>
                  {transaction.amountOfTransaction}
                </span>
              </div>

              <div className={`${styles["transaction-row"]} ${color}`}>
                <PrimaryButton
                  text="Delete"
                  onclick={() => handleDelete(transaction._id)}
                />
                <span className={styles.edit} onClick={openEdit}>
                  <HiOutlinePencil />
                  Edit
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

TransactionsMobile.protoTypes = {
  data: PropTypes.array,
  deleteFunction: PropTypes.func,
  openEdit: PropTypes.func,
};

export default TransactionsMobile;
