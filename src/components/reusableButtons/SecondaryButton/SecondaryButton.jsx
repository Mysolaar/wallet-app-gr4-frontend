import PropTypes from "prop-types";
import css from "./SecondaryButton.module.css";
function SecondaryButton({ text, onclick }) {
  return (
    <button
      type="button"
      className={css.secondaryButton}
      aria-label={text}
      onClick={onclick}
    >
      {text}
    </button>
  );
}

SecondaryButton.propTypes = {
  text: PropTypes.string,
  onclick: PropTypes.func,
};

export default SecondaryButton;
