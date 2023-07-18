import css from "./Header.module.css";
import ReactWallet from "../../icons/wallet-icon.svg";
import { IoExitOutline } from "react-icons/io5";

const handleClik = () => {
    // add logic IoExitOutline
}

function Header() {
    return (
        <header className={css.header}>
            <div className={css.headerBox}>
                <img 
                src={ReactWallet} 
                alt="wallet icon" width={30} height={30} 
                className={css.iconWallet} />
                <p className={css.logo}>Wallet</p>
            </div>
            <div className={css.headerBoxNext}>
                <p className={css.headerUser}>Name</p>
                <button 
                type="button" 
                className={css.headerButton}
                onClick={handleClik}>
                    <IoExitOutline color="rgba(189, 189, 189, 1)" size={18} />
                    <p className={css.headerExit}>Exit</p>
                </button>
            </div>
        </header>
    )
}

export default Header;