import { useEffect, useState } from "react";
import TransactionsMobile from "./TransactionsMobile/TransactionsMobile.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/transactionsOperations.js";

const Transactions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const dispatch = useDispatch();

  const openEdit = () => {
    console.log("Add Edit logic");
  };
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

  return (
    <>
      {!isMobile ? (
        <TransactionsTable handleDelete={handleDelete} openEdit={openEdit} />
      ) : (
        <TransactionsMobile handleDelete={handleDelete} openEdit={openEdit} />
      )}
    </>
  );
};

export default Transactions;
