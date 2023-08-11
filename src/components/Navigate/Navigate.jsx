import css from "../Navigate/Navigate.module.css";
import { MdHome, MdTimeline } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPage } from "../../redux/global/globalSelectors.js";
import { setPage } from "../../redux/global/globalSlice.js";

function Navigate({ setHomePage, setStatisticsPage, setCurrencyPage }) {
  const page = useSelector(selectCurrentPage);
  const dispatch = useDispatch();

  const StyledLink = styled(NavLink)`
    color: rgba(0, 0, 0, 1);

    &.active.activePage svg {
      background-color: rgba(74, 86, 226, 1);
      box-shadow: 3px 5px 8px rgba(74, 86, 226, 0.5),
        -3px 5px 8px rgba(74, 86, 226, 0.5);
    }

    &.active.activePage p {
      font-weight: 700;
    }
  `;

  const isActivePage = (pageName) => {
    return pageName === page ? "activePage" : "";
  };
  const isActivePageTitle = (pageName) => {
    return pageName === page ? "activePage" : "";
  };
  const isCurrency = (pageName) => {
    if (page === pageName) return css.activeCurrency;
    return "";
  };

  return (
    <div className={css.navBox}>
      <ul className={css.nav}>
        <li onClick={setHomePage} className={css.listItem}>
          <StyledLink
            to="/homepage"
            className={`${css.linkLink} ${isActivePage("Home")}`}
            onClick={() => dispatch(setPage("Home"))}
          >
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
          <StyledLink
            to="/statistics"
            className={`${css.linkLink} ${isActivePage("Statistics")}`}
            onClick={() => dispatch(setPage("Statistics"))}
          >
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
          <StyledLink
            to="/homepage"
            onClick={() => dispatch(setPage("Currency"))}
          >
            <FaDollarSign
              color="rgba(255, 255, 255, 1)"
              size={25}
              className={`${css.navItem} ${isCurrency("Currency")}`}
            />
          </StyledLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigate;
