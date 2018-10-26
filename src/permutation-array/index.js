const input = [4, 1, 3];

const permArr = arr => {
  let isPerm = true;
  arr.sort((a, b) => a - b);
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1] - 1) {
      isPerm = false;
      break;
    }
  }
  return Number(isPerm);
}

console.log(permArr(input));