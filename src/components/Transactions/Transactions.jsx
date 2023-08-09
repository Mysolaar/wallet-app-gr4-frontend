import { useEffect, useState } from "react";
import TransactionsMobile from "./TransactionsMobile/TransactionsMobile.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/transactionsOperations.js";
import { openModal, closeModal } from "../../redux/global/globalSlice.js";
import { fetchCurrentUser } from "../../redux/auth/authOperations.js";
import { selectTransactions } from "../../redux/transactions/transactionsSelectors.js";

const Transactions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const transactions = useSelector(selectTransactions);

  const dispatch = useDispatch();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleDeleteButton = () => {
    dispatch(openModal("isModalDeleteTransactionsOpen"));
  };

  const handleOpen = () => {
    dispatch(openModal("isModalEditTransactionsOpen"));
  };

  const handleClose = (modalName) => {
    dispatch(closeModal(modalName));
  };
  const handleDelete = (_id) => {
    const transactionToUpdate = transactions.transactions.find(
      (transaction) => transaction._id === _id
    );
    let value = 0;
    if (transactionToUpdate) {
      if (transactionToUpdate.typeOfTransaction === "Income") {
        value = transactionToUpdate.amountOfTransaction;
      } else if (transactionToUpdate.typeOfTransaction === "Expense") {
        value = -transactionToUpdate.amountOfTransaction;
      }
    }

    dispatch(deleteTransaction({ _id, value }));
    handleClose("isModalDeleteTransactionsOpen");
  };

  return (
    <>
      {!isMobile ? (
        <TransactionsTable
          handleDelete={handleDelete}
          handleDeleteButton={handleDeleteButton}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        <TransactionsMobile
          handleDelete={handleDelete}
          handleDeleteButton={handleDeleteButton}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default Transactions;
