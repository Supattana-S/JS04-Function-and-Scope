// const calcFactorial = (value) => {
//   let result = 1;
//   while (value !== 1) {
//     result *= value;
//     value--;
//   }
//   return result;
// };
const calcFactorial = (number) => {
  let result = 1;
  for (let i = number; i >= 2; i--) {
    result *= i;
  }
  return result;
};

console.log(calcFactorial(5));
