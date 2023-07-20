import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const strength = (testResult.score / 4) * 100;
  const meterStyle = {
    width: "80%",
    height: "4px",
    backgroundColor: "#E5F1EF",
  };

  const fillStyle = {
    width: `${strength}%`,
    height: "100%",
    backgroundColor: "#24CCA7",
  };

  return (
    <div style={meterStyle}>
      <div style={fillStyle}></div>
    </div>
  );
};

export default PasswordStrengthMeter;
