import { useState } from "react";
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
import { RxSlash } from "react-icons/rx";

import css from "./ModalAddTransactions.module.css";
import { colorStyles } from "./colorStyles.js";
import { modalAddTransactionsSchema } from "./../../schemas/index";
import { options } from "./expenseOptions/expenseOptions";
import DropdownIndicator from "./../reusableButtons/DropdownIndicator/DropdownIndicator";
import PrimaryButton from "./../reusableButtons/PrimaryButton/PrimaryButton";
import SecondaryButton from "./../reusableButtons/SecondaryButton/SecondaryButton";

Modal.setAppElement("#root");
function ModalAddTransactions({ type }) {
  const [checked, setChecked] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const date = new Date();
  let dateToText = date.toLocaleDateString();

  const formik = useFormik({
    initialValues: {
      toggle: false,
      category: "",
      price: "",
      date: dateToText,
      comment: "",
    },
    validationSchema: modalAddTransactionsSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(`checked: ${checked} , formik ${formik.values.toggle}`);
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modalContainer}
        overlayClassName={css.modalOverlay}
        contentLabel="Transaction modal"
      >
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          className={css.modalForm}
        >
          <h3 className={css.modalHeading}>
            {type.charAt(0).toUpperCase() + type.slice(1)} transaction
          </h3>
          <label className={css.modalCheckboxLabel} name="icome or expense">
            <input
              name="toggle"
              type="checkbox"
              id="checkbox"
              className={css.modalCheckboxInput}
              onChange={() => {
                setChecked(document.querySelector("#checkbox").checked);
                formik.setFieldValue(
                  "toggle",
                  document.querySelector("#checkbox").checked
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
              onChange={(selectedOption) =>
                formik.setFieldValue("category", selectedOption.value)
              }
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
                formik.errors.price && formik.touched.price
                  ? css.inputLabelError
                  : ""
              }`}
              name="price"
            >
              <CurrencyInput
                value={formik.values.price}
                name="price"
                onBlur={formik.handleBlur}
                onValueChange={(value) => formik.setFieldValue("price", value)}
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
              }  ${formik.errors.date ? css.inputLabelError : ""}`}
            >
              <Datetime
                value={formik.values.date}
                name="date"
                inputProps={{ className: css.input }}
                onBlur={formik.handleBlur}
                onChange={(date) =>
                  formik.setFieldValue("date", date.format("DD.MM.YYYY"))
                }
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
              maxlength="45"
              className={`${css.input} ${css.commentField}`}
            />
          </label>
          <div className={css.modalButtonContainer}>
            <PrimaryButton text={type === "add" ? "add" : "save"} />
            <SecondaryButton text="cancel" />
          </div>
        </form>
      </Modal>
    </>
  );
}

ModalAddTransactions.propTypes = {
  type: PropTypes.oneOf(["add", "edit"]),
};

export default ModalAddTransactions;
