// import React, { useEffect, useCallback } from "react";
import styles from "./Balance.module.css";
// import { useSelector, useDispatch } from "react-redux";
// import { selectToken } from "../../redux/auth/authSelectors";
// import { selectCurrentUser } from "../../redux/user/userSelectors";
// import { getCurrentUser } from "../../redux/user/userOperations";

export default function Balance() {
  //   const user = useSelector(selectCurrentUser);
  // // const currencySymbol =
  //   const balance = user.balance;
  //   const dispatch = useDispatch();

  //   const token = useSelector(selectToken);

  //   const fetchCurrentUser = useCallback(async () => {
  //     dispatch(getCurrentUser({ token }));
  //   }, [token, dispatch]);

  //   useEffect(() => {
  //     fetchCurrentUser();
  //   }, [fetchCurrentUser]);

  return (
    <div className={styles.balance}>
      <div className={styles.balance__text}>Your balance</div>
      <div className={styles.balance__amount}>€ 150 000.00</div>
      {/* <div className={styles.balance__amount}>{currencySymbol} {balance}
      </div> */}
    </div>
  );
}
