const isLeapYear = (year) => {
  if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
};

const calcAge = (year) => {
  let dayAge = 0;
  for (let i = year; i <= 2020; i++) {
    if (isLeapYear(i)) {
      dayAge += 366;
    } else {
      dayAge += 365;
    }
  }

  return dayAge;
};

console.log(calcAge(1993));
