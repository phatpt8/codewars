const input = [3, 4, 5, 4];
const input2 = [4, 5, 2, 3, 4];

// const cuttingTree = A => {
//   let count = 0;

//   const isConsecutive = arr => {
//     const len = arr.length;
//     let i = 1;
//     let prev = arr[0];

//     while (i < len) {
//       const curr = arr[i];
//       if (prev === curr) continue;
//       if (prev > curr) {
//         return false
//       }

//       prev = curr;
//       i++;
//     }

//     return true;
//   }
  
//   const loop = arr => {
//     const len = arr.length;
//     let i = 1;
//     let lastCheckValue = null;
    
//     while (i < len) {
//       const currentValue = arr[i];
//       if (lastCheckValue === currentValue) {
//         i++;
//         continue;
//       } else {
//         lastCheckValue = currentValue;
//       }

//       const newArr = [].concat(arr);
//       newArr.splice(i, 1);
//       if (isConsecutive(newArr)) count++;
//       i++;
//     }

//     return false;
//   }

//   loop(A);
  
//   return count;
// }

const cuttingTree = arr => {
  const len = arr.length;
  let solutions = 0;
  let pre = arr[0];
  let i = 1;

  while (i < len) {
    const curr = arr[i];
    const next = arr[i + 1];

    if (next < pre) {
      console.log('0 solution');
      solutions = 0;
      break;
    }

    if (next <= curr) {
      solutions += 2;
      i++;
    }

    prev = arr[i];
    i++;
  }

  return solutions;
}

console.log(cuttingTree(input));
console.log(cuttingTree(input2));