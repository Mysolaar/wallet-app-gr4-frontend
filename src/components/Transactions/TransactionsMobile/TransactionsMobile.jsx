import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsMobile.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import PropTypes from "prop-types";
import changeDateFormat from "../../../utils/changeDateFormat.js";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../../redux/transactions/transactionsSelectors.js";
import LoaderComponent from "../../Loader/Loader.js";

const TransactionsMobile = ({ deleteFunction, openEdit }) => {
  const data = useSelector(selectTransactions);

  return (
    <div className={styles["transactions-container"]}>
      {data.transactions.length > 0 ? (
        data.transactions.map((transaction, index) => {
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
                <PrimaryButton text="Delete" onclick={deleteFunction} />
                <span className={styles.edit} onClick={openEdit}>
                  <HiOutlinePencil />
                  Edit
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <LoaderComponent />
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
