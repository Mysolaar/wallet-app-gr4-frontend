import React from "react";
import Modal from "react-modal";
import css from "./ModalDeleteTransactions.module.css";
import PrimaryButton from "../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../reusableButtons/SecondaryButton/SecondaryButton";

function DeleteTransactionModal({ handleClose, handleDelete }) {
  return (
    <Modal
      isOpen
      onRequestClose={handleClose}
      className={css.modalContainer}
      overlayClassName={css.modalOverlay}
      contentLabel="Delete transaction modal"
    >
      <p className={css.question}>
        Are you sure you want to delete this transaction ?
      </p>
      <div className={css.button}>
        <PrimaryButton text="yes" onclick={handleDelete} />
        <SecondaryButton text="no" onclick={handleClose} />
      </div>
    </Modal>
  );
}

export default DeleteTransactionModal;
