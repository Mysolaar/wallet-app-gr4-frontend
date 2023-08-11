import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(NavLink)`
  color: rgba(0, 0, 0, 1);

  &.active svg {
    background-color: rgba(74, 86, 226, 1);
    box-shadow: 3px 5px 8px rgba(74, 86, 226, 0.5),
      -3px 5px 8px rgba(74, 86, 226, 0.5);
  }

  &.active p {
    font-weight: 700;
  }
`;

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
          <StyledLink to="/homepage" className={css.linkLink}>
            <MdHome
              color="rgba(255, 255, 255, 1)"
              size={40}
              className={`${css.navItem} ${isActivePage("Home")}`}
            />
            <p className={`${css.navTitle} ${isActivePageTitle("Home")}`}>
              Home
            </p>
          </StyledLink>
        </li>
        <li onClick={setStatisticsPage} className={css.listItem}>
          <StyledLink to="/statistics" className={css.linkLink}>
            <MdTimeline
              color="rgba(255, 255, 255, 1)"
              size={30}
              className={`${css.navItem} ${isActivePage("Statistics")}`}
            />
            <p className={`${css.navTitle} ${isActivePageTitle("Statistics")}`}>
              Statistics
            </p>
          </StyledLink>
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
