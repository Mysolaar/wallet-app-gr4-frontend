import { HiOutlinePencil } from "react-icons/hi";
import formatNumber from "../../../utils/formatNumber.js";
import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsTable.module.css";
import { useContext, useEffect } from "react";
import { HomePageDataContext } from "../../../pages/Homepage/Homepage.jsx";
import changeDateFormat from "../../../utils/changeDateFormat.js";
import { useDispatch, useSelector } from "react-redux";
import { selectTransactions } from "../../../redux/transactions/transactionsSelectors.js";
import { getTransactions } from "../../../redux/transactions/transactionsOperations.js";

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

const TransactionsTable = ({ deleteFunction, openEdit }) => {
  const data = useSelector(selectTransactions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions({ token: "your_token_here" }));
  }, [dispatch]);

  return (
    <div className={styles["transactions-container"]}>
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
                <td>{transaction.transactionDate}</td>
                <td>{type}</td>
                <td>{`Car`}</td>
                <td>{transaction.comment}</td>
                <td className={color}>
                  {formatNumber(transaction.amountOfTransaction)}
                </td>
                <td>
                  <HiOutlinePencil onClick={openEdit} className={styles.edit} />
                  <PrimaryButton
                    text="Delete"
                    onClick={() => deleteFunction(transaction._id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
