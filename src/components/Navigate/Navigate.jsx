import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

function Navigate({ setHomePage, setStatisticsPage, setCurrencyPage }) {
  return (
    <div className={css.navBox}>
      <ul className={css.nav}>
        <li>
          <MdHome
            color="rgba(255, 255, 255, 1)"
            size={40}
            className={css.navItem}
            onClick={setHomePage}
          />
          <p className={css.navTitle}>Home</p>
        </li>
        <li>
          <MdTimeline
            color="rgba(255, 255, 255, 1)"
            size={30}
            className={css.navItem}
            onClick={setStatisticsPage}
          />
          <p className={css.navTitle}>Statistics</p>
        </li>
        <li className={css.dollarIcon}>
          <FaDollarSign
            color="rgba(255, 255, 255, 1)"
            size={25}
            className={css.navItem}
            onClick={setCurrencyPage}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navigate;
