import { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import Modal from "react-modal";
import CurrencyInput from "react-currency-input-field";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import PropTypes from "prop-types";
import { useFormik } from "formik";

import { MdDateRange } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { RxSlash, RxCross1 } from "react-icons/rx";

import css from "./ModalAddTransactions.module.css";
import { colorStyles } from "./colorStyles.js";
import { modalAddTransactionsSchema } from "./../../schemas/index";
import { options } from "./expenseOptions/expenseOptions";
import DropdownIndicator from "./../reusableButtons/DropdownIndicator/DropdownIndicator";
import PrimaryButton from "./../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "./../reusableButtons/SecondaryButton/SecondaryButton";
import { addTransaction } from "../../redux/transactions/transactionsOperations";

Modal.setAppElement("#root");
function ModalAddTransactions({ type, handleClose }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const date = new Date();
  let dateToText = date.toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const initialValues = {
    typeOfTransaction: "Expense",
    amountOfTransaction: "",
    category: "",
    transactionDate: dateToText,
    comment: "",
  };

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      checked ? (initialValues.category = "Income") : console.log();
      await dispatch(addTransaction(values));
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: modalAddTransactionsSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
      handleClose();
    },
  });

  return (
    <>
      <Modal
        isOpen
        onRequestClose={handleClose}
        className={`${css.modalContainer} ${css.relative}`}
        overlayClassName={css.modalOverlay}
        contentLabel="Transaction modal"
      >
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          className={css.modalForm}
        >
          <button className={css.closeIconContainer} onClick={handleClose}>
            <RxCross1 size={20} />
          </button>
          <h3 className={css.modalHeading}>
            {type.charAt(0).toUpperCase() + type.slice(1)} transaction
          </h3>
          <label className={css.modalCheckboxLabel} name="income or expense">
            <input
              name="typeOfTransaction"
              type="checkbox"
              id="checkbox"
              className={css.modalCheckboxInput}
              onChange={() => {
                setChecked(document.querySelector("#checkbox").checked);
                formik.setFieldValue(
                  "typeOfTransaction",
                  document.querySelector("#checkbox").checked
                    ? "Income"
                    : "Expense"
                );
                formik.setFieldValue(
                  "category",
                  document.querySelector("#checkbox").checked ? "Income" : ""
                );
              }}
            />

            <span className={css.modalCheckbox}>
              {type === "add" && (
                <span className={css.modalSwitch}>
                  <button type="button" className={css.button}>
                    {checked ? (
                      <BsPlusLg color="#fff" size={30} />
                    ) : (
                      <AiOutlineMinus color="#fff" size={30} />
                    )}
                  </button>
                </span>
              )}

              {type === "edit" && (
                <RxSlash color={"#E0E0E0"} className={css.modalSlash} />
              )}
            </span>
          </label>

          {!checked && (
            <Select
              onChange={(selectedOption) => {
                formik.setFieldValue("category", selectedOption.value);
              }}
              name="category"
              styles={colorStyles}
              className={
                formik.errors.category && formik.touched.category
                  ? css.inputLabelError
                  : ""
              }
              options={options}
              placeholder={"Select a category..."}
              components={{ DropdownIndicator }}
            />
          )}

          <div className={css.modalGroup}>
            <label
              className={`${css.inputLabel}  ${css.modalDividedInput} ${
                formik.errors.amountOfTransaction &&
                formik.touched.amountOfTransaction
                  ? css.inputLabelError
                  : ""
              }`}
              name="amountOfTransaction"
            >
              <CurrencyInput
                value={formik.values.amountOfTransaction}
                name="amountOfTransaction"
                onBlur={formik.handleBlur}
                onValueChange={(value) =>
                  formik.setFieldValue("amountOfTransaction", +value)
                }
                decimalSeparator="."
                groupSeparator=" "
                placeholder="0.00"
                decimalsLimit={2}
                decimalScale={2}
                className={`${css.input}`}
              />
            </label>
            <div
              className={`${css.inputLabel}  ${css.relative} ${
                css.modalDividedInput
              }  ${formik.errors.transactionDate ? css.inputLabelError : ""}`}
            >
              <Datetime
                value={formik.values.transactionDate}
                name="transactionDate"
                inputProps={{ className: css.input }}
                onBlur={formik.handleBlur}
                onChange={(date) => {
                  formik.setFieldValue(
                    "transactionDate",
                    date.format("DD.MM.YYYY")
                  );
                }}
                initialValue={dateToText}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
              />
              <MdDateRange
                size={"24px"}
                color={"#4A56E2"}
                className={css.calendarIcon}
              />
            </div>
          </div>
          <label
            className={`${css.inputLabel} ${
              formik.touched.comment && formik.errors.comment
                ? css.inputLabelError
                : ""
            }`}
          >
            <textarea
              type="text"
              name="comment"
              value={formik.values.comment}
              placeholder="Comment"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              rows="1"
              maxLength="45"
              className={`${css.input} ${css.commentField}`}
            />
          </label>
          <div className={css.modalButtonContainer}>
            <PrimaryButton text={type === "add" ? "add" : "save"} />
            <SecondaryButton text="cancel" onclick={handleClose} />
          </div>
        </form>
      </Modal>
    </>
  );
}

ModalAddTransactions.propTypes = {
  type: PropTypes.oneOf(["add", "edit"]),
  handleClose: PropTypes.func,
};

export default ModalAddTransactions;
