const inputN = 10;
const inputQueries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
  // [7, 8, 10000],
]
const inputQueries1 = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15]
]


function arrayManipulation(n, queries) {
  const arr = Array(n).fill(0);
  let max = 0;
  let tempMax = 0;

  queries.forEach(query => {
    const from = query[0] - 1;
    const to = query[1] - 1;
    const value = query[2];

    arr[from] += value;

    if (to < n) {
      arr[to] -= value;
    }
  });

  for (var i = 0; i < n; i++) {
    tempMax += arr[i];
    max = Math.max(tempMax, max);
  }

  return max;
}

console.log(arrayManipulation(inputN, inputQueries1));

