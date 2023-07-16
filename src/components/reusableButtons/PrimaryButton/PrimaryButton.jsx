import PropTypes from "prop-types";
import css from "./PrimaryButton.module.css";

function PrimaryButton({ text, click }) {
  return (
    <button
      type="submit"
      className={css.primaryButton}
      aria-label={text}
      onClick={click}
    >
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func,
};

export default PrimaryButton;
