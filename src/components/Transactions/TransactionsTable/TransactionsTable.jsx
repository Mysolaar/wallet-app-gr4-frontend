import { HiOutlinePencil } from "react-icons/hi";
import formatNumber from "../../../utils/formatNumber.js";
import PrimaryButton from "../../reusableButtons/PrimaryButton/PrimaryButton.jsx";
import styles from "./TransactionsTable.module.css";

const TransactionsTable = ({ data, deleteFunction, openEdit }) => {
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
          {data.map((transaction, index) => {
            const color = transaction.type === "-" ? styles.pink : styles.green;

            return (
              <tr key={index} className={styles["data-row"]}>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.category}</td>
                <td>{transaction.comment}</td>
                <td className={color}>{formatNumber(transaction.sum)}</td>
                <td>
                  <HiOutlinePencil onClick={openEdit} className={styles.edit} />
                  <PrimaryButton text="Delete" onclick={deleteFunction} />
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
