export const parseDate = (dateString) => {
  const dateParts = dateString.split(".");
  if (dateParts.length !== 3) {
    throw new Error('Invalid date format. Expected "dd.MM.yyyy".');
  }

  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const parsedDate = new Date(year, month, day);

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date.");
  }

  return parsedDate;
};
