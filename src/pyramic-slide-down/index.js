const input = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
];

const traverse = (value, firstChoice, secondChoice) => {
  if (firstChoice.check === false) {
    firstChoice.check = true;
    return value + firstChoice.value;
  }
  if (secondChoice.check === false) {
    secondChoice.check = true;
    return value + secondChoice.value;
  }
}

const pyramicSlideDown = pyramid => {
  const len = pyramid.length;
  const array = [];
  for (var i = 0; i < len; i++) {
    const level = pyramid[i];
    array[i] = [];
    for (var j = 0; j < level.length; j++) {
      array[i].push({ value: level[j], check: false });
    }
  }

  let root = array[0];
  for (var i = 1; i < len; i++) { // don't loop the root
    root = traverse(root, array[i][0], array[i][1]);
  }

  console.log(array);
}

pyramicSlideDown(input);