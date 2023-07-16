import PropTypes from "prop-types";
import css from "./PrimaryButton.module.css";

function PrimaryButton({ text, onclick }) {
  return (
    <button
      type="submit"
      className={css.primaryButton}
      aria-label={text}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string,
  onclick: PropTypes.func,
};

export default PrimaryButton;
