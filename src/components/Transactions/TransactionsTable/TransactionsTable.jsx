import { HiOutlinePencil } from "react-icons/hi";
import formatNumber from "../../../utils/formatNumber.js";
import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsTable.module.css";
import changeDateFormat from "../../../utils/changeDateFormat.js";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTransactions,
} from "../../../redux/transactions/transactionsSelectors.js";
import { useEffect } from "react";
import LoaderComponent from "../../Loader/Loader.js";

const TransactionsTable = ({ handleDelete, openEdit }) => {
  const data = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {}, [data]);

  return (
    <div className={styles["transactions-container"]}>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className="table-header">Date</th>
              <th className={styles["header-cell"]}>Type</th>
              <th className="table-header">Category</th>
              <th className="table-header">Comment</th>
              <th className="table-header">Sum</th>
              <th className="table-header"></th>
            </tr>
          </thead>
          <tbody>
            {data.transactions.map((transaction, index) => {
              const color =
                transaction.typeOfTransaction === "Expense"
                  ? styles.pink
                  : styles.green;

              const type =
                transaction.typeOfTransaction === "Expense" ? "-" : "+";

              return (
                <tr key={index} className={styles["data-row"]}>
                  <td>{changeDateFormat(transaction.transactionDate)}</td>
                  <td>{type}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.comment}</td>
                  <td className={color}>
                    {formatNumber(transaction.amountOfTransaction)}
                  </td>
                  <td>
                    <HiOutlinePencil
                      onClick={openEdit}
                      className={styles.edit}
                    />
                    <PrimaryButton
                      text="Delete"
                      onclick={() => handleDelete(transaction._id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsTable;
