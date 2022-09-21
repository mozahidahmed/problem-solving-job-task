const array = [2, 4, 6, 8, 10];
const test = arr => {
  const result = [];
  const sortedArr = array.sort((a, b) => a - b);
  for (let i = 0, j = sortedArr.length - 1; i <= j; i++, j--) {
    i == j || result.push(sortedArr[j]);
    result.push(sortedArr[i]);
  }
  return result;
};
console.log(test(array));