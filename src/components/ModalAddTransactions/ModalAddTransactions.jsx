import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import Modal from "react-modal";
import CurrencyInput from "react-currency-input-field";
// import DatePicker from "react-date-picker";
// import "react-date-picker/dist/DatePicker.css";
// import "react-calendar/dist/Calendar.css";
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
import {
  addTransaction,
  editTransaction,
  getTransactionsMonthlySummary,
} from "../../redux/transactions/transactionsOperations";
import {
  selectSelectedMonth,
  selectSelectedYear,
} from "../../redux/transactions/transactionsSelectors.js";
import { parseDate } from "../../utils/parseDate";

Modal.setAppElement("#root");

const dateLocaleFormatString = {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
};

function ModalAddTransactions({ type, handleClose, data }) {
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    type === "edit"
      ? parseDate(data.transactionDate)
      : parseDate(
          new Date().toLocaleDateString("pl-PL", dateLocaleFormatString)
        )
  );
  const month = useSelector(selectSelectedMonth);
  const year = useSelector(selectSelectedYear);

  const dispatch = useDispatch();

  const isType = (string) => {
    return type === string;
  };

  useEffect(() => {
    if (isType("edit")) {
      setChecked(initialValues.typeOfTransaction === "Income");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialValues = {
    _id: isType("edit") ? data?._id : null,
    typeOfTransaction: isType("edit") ? data?.typeOfTransaction : "Expense",
    amountOfTransaction: isType("edit") ? data?.amountOfTransaction : "",
    category: isType("edit") ? data?.category : "",
    transactionDate: selectedDate,
    comment: isType("edit") ? data?.comment : "",
  };

  const handleSubmit = async (values) => {
    values.transactionDate = values.transactionDate.toLocaleDateString(
      "pl-PL",
      dateLocaleFormatString
    );

    try {
      checked && (initialValues.category = "Income");

      if (isType("edit")) {
        dispatch(editTransaction(values));
      } else {
        dispatch(addTransaction(values));
      }
      dispatch(getTransactionsMonthlySummary({ month, year }));
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
        className={`${css.modalContainer}`}
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
          <h3 className={css.modalHeading}>{type} transaction</h3>
          <label
            className={`${css.modalCheckboxLabel}`}
            name="income or expense"
          >
            <input
              name="typeOfTransaction"
              type="checkbox"
              id="checkbox"
              checked={checked}
              disabled={isType("edit")}
              className={`${css.modalCheckboxInput}`}
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

            <span
              className={`${css.modalCheckbox} ${
                isType("edit") && css.defaultCursor
              }`}
            >
              {isType("add") && (
                <span className={css.modalSwitch}>
                  <button type="button" className={css.modalButton}>
                    {checked ? (
                      <BsPlusLg color="#fff" size={30} />
                    ) : (
                      <AiOutlineMinus color="#fff" size={30} />
                    )}
                  </button>
                </span>
              )}

              {isType("edit") && (
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
              defaultValue={options.find(
                (option) => option.value === initialValues.category
              )}
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
                onValueChange={(value) => {
                  formik.setFieldValue("amountOfTransaction", +value);
                }}
                decimalSeparator="."
                groupSeparator=" "
                placeholder="0.00"
                decimalsLimit={2}
                decimalScale={2}
                className={css.input}
              />
            </label>
            <div
              className={`${css.inputLabel} ${css.modalDividedInput}  ${
                formik.errors.transactionDate ? css.inputLabelError : ""
              }`}
            >
              {/* <DatePicker
                format="dd.MM.yyyy"
                clearIcon={null}
                name="transactionDate"
                calendarIcon={
                  <MdDateRange
                    size={"24px"}
                    color={"#4A56E2"}
                    className={css.calendarIcon}
                  />
                }
                value={initialValues.transactionDate}
                locale={"en-GB"}
                onBlur={formik.handleBlur}
                onChange={(date) => {
                  setSelectedDate(date);
                  formik.setFieldValue("transactionDate", date);
                }}
              /> */}
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
            <PrimaryButton text={isType("add") ? "add" : "save"} />
            <SecondaryButton text="cancel" onclick={handleClose} />
          </div>
        </form>
      </Modal>
    </>
  );
}

ModalAddTransactions.propTypes = {
  type: PropTypes.oneOf(["edit", "add"]),
  handleClose: PropTypes.func,
  data: PropTypes.object,
};

export default ModalAddTransactions;
