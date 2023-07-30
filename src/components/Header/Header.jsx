import css from "./Header.module.css";
import ReactWallet from "../../icons/wallet-icon.svg";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openModal } from "./../../redux/global/globalSlice";

function Header() {
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div className={css.headerBox}>
        <img
          src={ReactWallet}
          alt="wallet icon"
          width={30}
          height={30}
          className={css.iconWallet}
        />
        <p className={css.logo}>Wallet</p>
      </div>
      <div className={css.headerBoxNext}>
        <p className={css.headerUser}>Name</p>
        <button
          type="button"
          className={css.headerButton}
          onClick={() => dispatch(openModal("isModalLogoutOpen"))}
        >
          <IoExitOutline color="rgba(189, 189, 189, 1)" size={18} />
          <p className={css.headerExit}>Exit</p>
        </button>
      </div>
    </header>
  );
}

export default Header;
