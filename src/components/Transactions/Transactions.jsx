import { useEffect, useState } from "react";
import TransactionsMobile from "./TransactionsMobile/TransactionsMobile.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/transactionsOperations.js";
import { openModal, closeModal } from "../../redux/global/globalSlice.js";

const Transactions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const dispatch = useDispatch();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleDelete = (_id) => {
    dispatch(deleteTransaction(_id));
    // dispatch(getTransactions());
  };

  const handleOpen = () => {
    dispatch(openModal("isModalEditTransactionsOpen"));
  };

  const handleClose = () => {
    dispatch(closeModal("isModalEditTransactionsOpen"));
  };

  return (
    <>
      {!isMobile ? (
        <TransactionsTable
          handleDelete={handleDelete}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      ) : (
        <TransactionsMobile
          handleDelete={handleDelete}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default Transactions;
