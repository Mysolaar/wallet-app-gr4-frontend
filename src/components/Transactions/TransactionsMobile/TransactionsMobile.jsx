import React, { useState } from "react";
import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsMobile.module.css";
import { HiOutlinePencil } from "react-icons/hi";
import PropTypes from "prop-types";
import changeDateFormat from "../../../utils/changeDateFormat.js";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectTransactions,
} from "../../../redux/transactions/transactionsSelectors.js";
import LoaderComponent from "../../Loader/Loader.js";
import formatNumber from "../../../utils/formatNumber.js";
import ModalAddTransactions from "../../ModalAddTransactions/ModalAddTransactions.jsx";
import ModalDeleteTransactions from "../../ModalDeleteTransactions/ModalDeleteTransactions.jsx";
import {
  selectIsModalEditTransactionsOpen,
  selectIsModalDeleteTransactionsOpen,
} from "../../../redux/global/globalSelectors.js";

const TransactionsMobile = ({
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
          sortedTransactions.map((transaction, index) => {
            const color =
              transaction.typeOfTransaction === "Expense"
                ? styles.pink
                : styles.green;
            const fontColor =
              transaction.typeOfTransaction === "Expense"
                ? styles["pink-font"]
                : styles["green-font"];

            const type =
              transaction.typeOfTransaction === "Expense" ? "-" : "+";
            return (
              <React.Fragment key={index}>
                <div className={styles.transaction}>
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
                    <span>{transaction.category}</span>
                  </div>

                  <div className={`${styles["transaction-row"]} ${color}`}>
                    <span>Comment:</span>
                    <span>{transaction.comment}</span>
                  </div>

                  <div className={`${styles["transaction-row"]} ${color}`}>
                    <span>Sum:</span>
                    <span className={`${fontColor}`}>
                      {formatNumber(transaction.amountOfTransaction)}
                    </span>
                  </div>

                  <div className={`${styles["transaction-row"]} ${color}`}>
                    <PrimaryButton
                      text="Delete"
                      onclick={() => {
                        handleDeleteButton();
                        setTransaction(transaction);
                      }}
                    />
                    <span
                      className={styles.edit}
                      onClick={() => {
                        handleOpen();
                        setTransaction(transaction);
                      }}
                    >
                      <HiOutlinePencil />
                      Edit
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })
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

TransactionsMobile.protoTypes = {
  data: PropTypes.array,
  deleteFunction: PropTypes.func,
  openEdit: PropTypes.func,
};

export default TransactionsMobile;
