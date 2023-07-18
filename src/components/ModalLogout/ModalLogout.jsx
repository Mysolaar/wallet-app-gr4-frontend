import css from "../ModalLogout/ModalLogout.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";

function ModalLogout() { 
    const handleClick = ()=> {
        //add logic
    } 
    return (
        <div className={css.backdrop}>
            <div className={css.modal}>
                <p className={css.question}>Are you sure you want to exit the financial app?</p>
                <div className={css.button}>
                    <PrimaryButton text="yes" onclick={handleClick}/>
                </div>
                <div>
                    <SecondaryButton text="no" onclick={handleClick}/>
                </div>   
            </div>
        </div>
    )
}

export default ModalLogout;