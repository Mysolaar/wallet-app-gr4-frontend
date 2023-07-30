function changeDateFormat(inputDate) {
  // Split the input date by "-"
  const dateParts = inputDate.split("-");

  // Rearrange the date parts with "." as the separator
  const formattedDate = dateParts.join(".");

  return formattedDate;
}

export default changeDateFormat;
