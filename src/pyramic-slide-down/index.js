const input = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

const pyramicSlideDown = pyramid => {
  const length = pyramid.length;
  const root = pyramid[0][0];
  const loop = arr => {
    const idx = Math.floor(Math.random() * 2);
    return {
      value:  arr[idx],
      idx,
    };
  }

  let result = root;
  let lastIdx;
  for (var i = 1; i < pyramid.length; i++) {
    const floor = loop(pyramid[i]);
    result += floor.value;
    lastIdx = idx;
  }
  console.log(result);
}

pyramicSlideDown(input);