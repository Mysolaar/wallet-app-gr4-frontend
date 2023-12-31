import { selectBalance } from "../../redux/transactions/transactionsSelectors.js";
import styles from "./Balance.module.css";
import { useSelector } from "react-redux";

export default function Balance() {
  const balance = useSelector(selectBalance);

  const formatedBalance = balance.toLocaleString("pl-PL", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true,
    style: "currency",
    currency: "PLN",
  });

  const displayBalance = formatedBalance.replace(",", ".");

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        {balance !== "" ? displayBalance : "0.00"}
      </div>
    </div>
  );
}
