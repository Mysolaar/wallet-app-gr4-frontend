function getMonthNameFromDDFormat(dateString) {
  // Parse the input date string as a date object (year and month don't matter here, we only need the month)
  const dateObject = new Date(`2000-${dateString}-01`); // Use any valid year (e.g., 2000)

  // Get the month name from the date object
  const monthName = dateObject.toLocaleString("en-US", { month: "long" });

  return monthName;
}

export default getMonthNameFromDDFormat;
