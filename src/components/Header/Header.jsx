import css from "./Header.module.css";
import ReactWallet from "../../icons/wallet-icon.svg";
import ReactExit from "../../icons/exit-icon.svg";

const handleClik = () => {
    // add logic
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
                    <img 
                    src={ReactExit} 
                    alt="exit icon" width={18} height={18}
                    className={css.iconExit} />    
                    <p className={css.headerExit}>Exit</p>
                </button>
            </div>
        </header>
    )
}

export default Header;