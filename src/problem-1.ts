const sumArray = (arrOfNum: number[]): number => {
  //   return arrOfNum.reduce((acc, curr) => acc + curr, 0);
  let sum = 0;
  for (let i = 0; i < arrOfNum.length; i++) {
    sum += arrOfNum[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
