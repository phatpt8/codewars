const input = [-2, 1, 3, 4, -1, 2, 1, -5, 4];
const output = [4, -1, 2, 1];

const checkSum = (arr, start, end) => {
  const newArr = arr.slice(start, end);
  return {
    res: newArr,
    sum: newArr.reduce((acc, n) => acc + n),
  }
}
const maximumContiguosSubarray = (arr) => {
  const len = arr.length;
  let sum = 0;
  let result = [];
  if (!len) return [];
  
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j > i; j--) {
      const obj = checkSum(arr, i, j);
      if (obj.sum > sum) {
        sum = obj.sum;
        result = obj.res;
      }
    }
  }

  return result;
}
// const result = maximumContiguosSubarray(input);
// console.log(result);

function maximumContiguousSubarray1(array) {
  if (!array.length) {
    return [];
  }

  let maxInc = array[0];
  let max = array[0];
  let maxStartIndex = 0;
  let maxEndIndex = 0;

  for (let i = 1; i < array.length; i += 1) {
    const val = array[i];

    maxInc = Math.max(maxInc + val, val);
    max = Math.max(max, maxInc);

    if (val === max) {
      maxStartIndex = i;
    }
    if (maxInc === max) {
      maxEndIndex = i;
    }
  }

  return array.slice(maxStartIndex, maxEndIndex + 1);
}
const result1 = maximumContiguousSubarray1(input);
console.log(result1);