import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import css from "../ModalLogout/ModalLogout.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";

import { closeModal } from "./../../redux/global/globalSlice";
import { logout } from "../../redux/auth/authOperations";

Modal.setAppElement("#root");

const ModalLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    dispatch(closeModal("isModalLogoutOpen"));
  };

  const handleClick = async () => {
    try {
      dispatch(closeModal("isModalLogoutOpen"));
      await dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
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
