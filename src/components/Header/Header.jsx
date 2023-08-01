import css from "./Header.module.css";
import ReactWallet from "../../icons/wallet-icon.svg";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "./../../redux/global/globalSlice";
import ModalLogout from "../ModalLogout/ModalLogout";
import { selectIsModalLogoutOpen } from "../../redux/global/globalSelectors";

function Header(user) {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user.username);

  const isModalOpen = useSelector(selectIsModalLogoutOpen);
  const handleLogOut = async () => {
    try {
      dispatch(openModal("isModalLogoutOpen"));
    } catch (error) {
      console.error(error);
    }
  };

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
        <p className={css.headerUser}>{username}</p>
        <button
          type="button"
          className={css.headerButton}
          onClick={() => dispatch(openModal("isModalLogoutOpen"))}
        >
          <IoExitOutline color="rgba(189, 189, 189, 1)" size={18} />
          <p className={css.headerExit} onClick={handleLogOut}>
            Exit
          </p>
        </button>
        {isModalOpen ? <ModalLogout /> : <></>}
      </div>
    </header>
  );
}

export default Header;
