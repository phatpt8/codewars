const input = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

const pyramicSlideDown = pyramid => {
  let result = 0;
  let p = [];

  for (var i = 0; i < pyramid.length; i++) {
    const pyrFloor = pyramid[i];
    p[i] = [];
    for (var j = 0; j < pyrFloor.length; j++) {
      const node = pyramid[i][j];
      p[i].push(node);
    }
  }
console.log(p);
  return result;
}

pyramicSlideDown(input);