import PropTypes from "prop-types";
import css from "./SecondaryButton.module.css";
function SecondaryButton({ text, click }) {
  return (
    <button
      type="button"
      className={css.secondaryButton}
      aria-label={text}
      onClick={click}
    >
      {text}
    </button>
  );
}

SecondaryButton.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func,
};

export default SecondaryButton;
