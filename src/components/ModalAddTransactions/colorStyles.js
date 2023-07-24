export const colorStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "transparent",
    border: isFocused ? 0 : 0,
    borderBottom: "1px solid #ececec",
    fontFamily: "inherit",
    padding: "20px 20px 8px",
    cursor: "pointer",
    "&:is(:hover,:focus,:active)": {
      border: isFocused ? 0 : 0,
      boxShadow: "none",
      borderBottom: "1px solid #e0e0e0",
    },
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "rgba(255, 101, 150, 1);" : "black",
    fontFamily: "inherit",
    fontWeight: isFocused ? "700" : "400",
    backgroundColor: isFocused ? "rgba(255, 255, 255, 1)" : "transparent",
    height: "44px",
    paddingTop: "15px",
    cursor: "pointer",
  }),

  menu: (styles) => ({
    ...styles,
    background: "rgba(255, 255, 255, 0.7)",
    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(20px)",
    borderRadius: 20,
    overflow: "hidden",
  }),

  container: (styles) => ({
    ...styles,
    width: "100%",
    "&:is(:hover,:active)": {
      border: 0,
      outline: 0,
    },
  }),

  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),

  valueContainer: (styles) => ({
    ...styles,
    padding: 0,
  }),
};
