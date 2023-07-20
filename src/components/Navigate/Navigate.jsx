import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

function Navigate() {
    return (
        <div className={css.navBox}>
            <ul className={css.nav}>
                <li className={css.navItem}>
                    <MdHome color="rgba(255, 255, 255, 1)" size={40} />
                </li>
                <li className={css.navItem}>
                    <MdTimeline color="rgba(255, 255, 255, 1)" size={30} />
                </li>
                <li className={css.navItem}>
                    <FaDollarSign color="rgba(255, 255, 255, 1)" size={25} />
                </li>
            </ul>
            
        </div>
    )

}

export default Navigate;