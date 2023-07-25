import { useEffect, useState } from "react";
import styles from "./Transactions.module.css";
import TransactionsMobile from "./TransactionsMobile/TransactionsMobile.jsx";
import TransactionsTable from "./TransactionsTable/TransactionsTable.jsx";

const mockdata = [
  {
    date: "04.01.19",
    type: "-",
    category: "Other",
    comment: "Gift for your wife",
    sum: 300,
  },
  {
    date: "05.01.19",
    type: "+",
    category: "Car",
    comment: "Fixing gear",
    sum: 5300,
  },
  {
    date: "06.01.19",
    type: "-",
    category: "Food",
    comment: "Pepperoni Pizza",
    sum: 30,
  },
];

const Transactions = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const data = mockdata; //TODO fetch data

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const deleteFunction = () => {
    console.log("Add delete logic");
  };
  const openEdit = () => {
    console.log("Add Edit logic");
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
          data={data}
          deleteFunction={deleteFunction}
          openEdit={openEdit}
        />
      ) : (
        <TransactionsMobile
          data={data}
          deleteFunction={deleteFunction}
          openEdit={openEdit}
        />
      )}
    </>
  );
};

export default Transactions;
