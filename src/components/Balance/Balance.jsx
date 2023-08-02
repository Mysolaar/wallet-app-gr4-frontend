import styles from "./Balance.module.css";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/auth/authSelectors";
import { useAuth } from "../../hooks/useAuth";

export default function Balance() {
  const { isAuth } = useAuth();
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
        {isAuth ? displayBalance : ""}
      </div>
    </div>
  );
}
