import { useEffect, useState } from "react";
import TransactionsMobile from "./TransactionsMobile/TransactionsMobile.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";

const Transactions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const deleteFunction = () => {
    console.log("Add delete logic");
  };
  const openEdit = () => {
    console.log("Add Edit logic");
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isMobile ? (
        <TransactionsTable
          deleteFunction={deleteFunction}
          openEdit={openEdit}
        />
      ) : (
        <TransactionsMobile
          deleteFunction={deleteFunction}
          openEdit={openEdit}
        />
      )}
    </>
  );
};

export default Transactions;
