import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const strength = (testResult.score / 4) * 100;

  const getColorFill = (width) => {
    if (width >= 100) {
      return "#00ad84";
    } else if (width >= 75) {
      return "#24CCA7"; // Green
    } else if (width >= 50) {
      return "#fed057"; // Yellow
    } else {
      return "#ff0000"; // Red
    }
  };
  const getColorShadow = (width) => {
    if (width >= 100) {
      return "0px 1px 8px #00ad8480";
    } else if (width >= 75) {
      return "0px 1px 8px #24CCA780"; // Green
    } else if (width >= 50) {
      return "0px 1px 8px #fed05780"; // Yellow
    } else {
      return "0px 1px 8px #ff000080"; // Red
    }
  };

  const meterStyle = {
    width: "80%",
    height: "4px",
    marginTop: "8px",
    borderRadius: "5px",
    backgroundColor: "#E5F1EF",
    position: "relative",
  };

  const fillStyle = {
    width: `${strength}%`,
    height: "100%",
    borderRadius: "5px",
    backgroundColor: getColorFill(strength),
    boxShadow: getColorShadow(strength),
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div style={meterStyle}>
      <div style={fillStyle}></div>
    </div>
  );
};

export default PasswordStrengthMeter;
