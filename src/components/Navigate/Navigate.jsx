import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

function Navigate({ setHomePage, setStatisticsPage, setCurrencyPage, page }) {
  const isActivePage = (pageName) => {
    return pageName === page ? css.active : "";
  };

  return (
    <div className={css.navBox}>
      <ul className={css.nav}>
        <li>
          <MdHome
            color="rgba(255, 255, 255, 1)"
            size={40}
            className={`${css.navItem} ${isActivePage("Home")}`}
            onClick={setHomePage}
          />
          <p className={css.navTitle}>Home</p>
        </li>
        <li>
          <MdTimeline
            color="rgba(255, 255, 255, 1)"
            size={30}
            className={`${css.navItem} ${isActivePage("Statistics")}`}
            onClick={setStatisticsPage}
          />
          <p className={css.navTitle}>Statistics</p>
        </li>
        <li className={css.dollarIcon}>
          <FaDollarSign
            color="rgba(255, 255, 255, 1)"
            size={25}
            className={`${css.navItem} ${isActivePage("Currency")}`}
            onClick={setCurrencyPage}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navigate;
