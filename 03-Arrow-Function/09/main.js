const isLeapYear = (year) => {
  if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
};

console.log(isLeapYear(1900));
