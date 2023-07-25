import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

function Navigate() {
    return (
        <div className={css.navBox}>
            <ul className={css.nav}>
                <li>
                    <MdHome color="rgba(255, 255, 255, 1)" size={40} className={css.navItem} />
                    <p className={css.navTitle}>Home</p>
                </li>
                <li>
                    <MdTimeline color="rgba(255, 255, 255, 1)" size={30} className={css.navItem} />
                    <p className={css.navTitle}>Statistics</p>
                </li>
                <li className={css.dollarIcon}>
                    <FaDollarSign color="rgba(255, 255, 255, 1)" size={25} className={css.navItem} />
                </li>
            </ul>
            
        </div>
    )

}

export default Navigate;