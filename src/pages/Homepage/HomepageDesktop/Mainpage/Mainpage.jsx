import styles from "./Mainpage.module.css";
import Navigate from "../../../../components/Navigate/Navigate.jsx";
import Transactions from "../../../../components/Transactions/Transactions.jsx";

const MainpageDesktop = () => {
  return (
    <main className={styles.main}>
      <div className={styles.box1}>
        <div className={styles.wrapper}>
          <div className={styles.navigate}>
            <Navigate />
          </div>
          <div className={styles.balance}>BALANCE PLACEHOLDER</div>
        </div>
        <div className={styles.currency}>CURRENCY PLACEHOLDER</div>
      </div>
      <div className={styles["transactions-box"]}>
        <Transactions />
      </div>
    </main>
  );
};

export default MainpageDesktop;
