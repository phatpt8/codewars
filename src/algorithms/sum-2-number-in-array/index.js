const inputArr = [5, 9, 13, -1, 2, 4, 17];
const inputNumber = 13;

function solution(arr, n) {
  const ascArr = arr.sort(function (a, b) { return a - b });
  
  let i = 0;
  let j = ascArr.length - 1;

  while (i < j) {

    console.log(i, j);

    if (ascArr[i] + ascArr[j] == n) {
      return [i, j];
    } else if (ascArr[i] + ascArr[j] < n) {
      i++;
    } else {
      j--;
    }
  }
  return 0;
}

solution(inputArr, inputNumber);