const input = [3, 4, 5, 4];
const input2 = [4, 5, 2, 3, 4];

const cuttingTree = A => {
  const len = A.length;
  let prev = A[0];
  let i = 1;
  const nonvalid = [];
  
  while (i < len) {
    const current = A[i];
    
    if (prev <= current) {
      prev = current;
    } else {
      // prev > current
      nonvalid.push(current);
      // prev = A[i - 1];
    }

    i++;
  }
  
  return nonvalid.length;
}

console.log(cuttingTree(input));
console.log(' ');
console.log(cuttingTree(input2));