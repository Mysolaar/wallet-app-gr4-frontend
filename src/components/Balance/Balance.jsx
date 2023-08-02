import styles from "./Balance.module.css";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/auth/authSelectors";
import { useAuth } from "../../hooks/useAuth";

export default function Balance() {
  const { isAuth } = useAuth();
  const balance = useSelector(selectBalance);
  // const formatBalance = balance.toFixed(2);
  // const displayBalance = formatBalance.toLocaleString("pl-PL");

  const displayBalance = balance.toLocaleString("en-EN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true, // Włącz grupowanie dla separatora tysięcy
  });

  console.log(balance);

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>
        <span>zł</span> {isAuth ? displayBalance : ""}
      </div>
      {/* <div className={styles.balance__amount}>PLN {balance}
      </div> */}
    </div>
  );
}
