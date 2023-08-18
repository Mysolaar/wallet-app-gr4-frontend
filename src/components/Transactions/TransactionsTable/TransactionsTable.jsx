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
import { useEffect, useState } from "react";
import LoaderComponent from "../../Loader/Loader.js";
import ModalAddTransactions from "../../ModalAddTransactions/ModalAddTransactions.jsx";
import ModalDeleteTransactions from "../../ModalDeleteTransactions/ModalDeleteTransactions.jsx";
import {
  selectIsModalEditTransactionsOpen,
  selectIsModalDeleteTransactionsOpen,
} from "../../../redux/global/globalSelectors.js";

const TransactionsTable = ({
  handleDelete,
  handleDeleteButton,
  handleOpen,
  handleClose,
}) => {
  const [transaction, setTransaction] = useState();
  const data = useSelector(selectTransactions);
  const isLoading = useSelector(selectIsLoading);

  const isModalEditTransactionsOpen = useSelector(
    selectIsModalEditTransactionsOpen
  );
  const isModalDeleteTransactionsOpen = useSelector(
    selectIsModalDeleteTransactionsOpen
  );

  const sortedTransactions = [...data.transactions].sort((a, b) => {
    // Assuming transactionDate is in "dd.mm.yyyy" format
    const dateA = new Date(a.transactionDate.split(".").reverse().join("-"));
    const dateB = new Date(b.transactionDate.split(".").reverse().join("-"));
    return dateB - dateA; // Sort in descending order (newest to oldest)
  });

  return (
    <>
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
              {sortedTransactions.map((transaction, index) => {
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
                        onClick={() => {
                          handleOpen();
                          setTransaction(transaction);
                        }}
                        className={styles.edit}
                      />
                      <PrimaryButton
                        text="Delete"
                        onclick={() => {
                          handleDeleteButton();
                          setTransaction(transaction);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {isModalEditTransactionsOpen && (
        <ModalAddTransactions
          type="edit"
          handleClose={() => handleClose("isModalEditTransactionsOpen")}
          data={transaction}
        />
      )}

      {isModalDeleteTransactionsOpen && (
        <ModalDeleteTransactions
          handleClose={() => handleClose("isModalDeleteTransactionsOpen")}
          handleDelete={() => handleDelete(transaction._id)}
        />
      )}
    </>
  );
};

export default TransactionsTable;
