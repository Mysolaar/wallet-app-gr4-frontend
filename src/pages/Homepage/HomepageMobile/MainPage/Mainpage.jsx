import styles from "./Mainpage.module.css";
import Transactions from "../../../../components/Transactions/Transactions.jsx";
import Balance from "../../../../components/Balance/Balance.jsx";

const MainpageMobile = () => {
  return (
    <>
      <Balance />
      <Transactions />
    </>
  );
};

export default MainpageMobile;
