const removeDuplicates = (arrOfNum: number[]): number[] => {
  //   let uniqueArr = [...new Set(arrOfNum)];
  //   return uniqueArr;
  let uniqueArr: number[] = [];
  for (let i = 0; i < arrOfNum.length; i++) {
    if (!uniqueArr.includes(arrOfNum[i])) {
      uniqueArr.push(arrOfNum[i]);
    }
  }
  return uniqueArr;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
