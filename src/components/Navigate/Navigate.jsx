import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

function Navigate({ setHomePage, setStatisticsPage, setCurrencyPage, page }) {
  const isActivePage = (pageName) => {
    return pageName === page ? css.active : "";
  };
  const isActivePageTitle = (pageName) => {
    return pageName === page ? css.activeText : "";
  };

  return (
    <div className={css.navBox}>
      <ul className={css.nav}>
        <li onClick={setHomePage} className={css.listItem}>
          <MdHome
            color="rgba(255, 255, 255, 1)"
            size={40}
            className={`${css.navItem} ${isActivePage("Home")}`}
          />
          <p className={`${css.navTitle} ${isActivePageTitle("Home")}`}>Home</p>
        </li>
        <li onClick={setStatisticsPage} className={css.listItem}>
          <MdTimeline
            color="rgba(255, 255, 255, 1)"
            size={30}
            className={`${css.navItem} ${isActivePage("Statistics")}`}
          />
          <p className={`${css.navTitle} ${isActivePageTitle("Statistics")}`}>
            Statistics
          </p>
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
