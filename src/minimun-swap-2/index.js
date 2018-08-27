const input = [1, 3, 5, 2, 4, 6, 8];

const minimumSwaps = arr => {
  const len = arr.length
  let count = 0;
  let loop = 0;
  
  for (let i = 0; i < len;i++) {
      loop++;
      if (arr[i] == i + 1) continue;
      
      let tmp = arr[arr[i] - 1];
      arr[arr[i] - 1] = arr[i];
      arr[i] = tmp;
      count++;
      i--;
  }

  console.log("LOOP", loop);
  return count;
}

console.log(minimumSwaps(input));
