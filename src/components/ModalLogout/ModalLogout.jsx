import Modal from "react-modal";
import { useDispatch } from "react-redux";
import css from "../ModalLogout/ModalLogout.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";
import { closeModal } from "./../../redux/global/globalSlice";

Modal.setAppElement("#root");

const ModalLogout = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal("isModalLogoutOpen"));
  };

  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <Modal
      isOpen
      onRequestClose={handleClose}
      className={`${css.modalContainer} ${css.relative}`}
      overlayClassName={css.modalOverlay}
      contentLabel="Logout modal"
    >
      <p className={css.question}>
        Are you sure you want to exit the financial app?
      </p>
      <div className={css.button}>
        <PrimaryButton text="yes" onclick={handleClick} />
        <SecondaryButton text="no" onclick={handleClose} />
      </div>
    </Modal>
  );
};

export default ModalLogout;
