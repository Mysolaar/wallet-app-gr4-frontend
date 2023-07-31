import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const strength = (testResult.score / 4) * 100;
  const meterStyle = {
    width: "80%",
    height: "4px",
    marginTop: "8px",
    borderRadius: "5px",
    backgroundColor: "#E5F1EF",
  };

  const fillStyle = {
    width: `${strength}%`,
    height: "100%",
    borderRadius: "5px",
    backgroundColor: "#24CCA7",
    boxShadow: "0px 1px 8px rgba(36, 204, 167, 0.50)",
    position: "relative",
  };

  return (
    <div style={meterStyle}>
      <div style={fillStyle}></div>
    </div>
  );
};

export default PasswordStrengthMeter;
