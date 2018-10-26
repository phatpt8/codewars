const input = [1, 2, 3, 2, 1, 4, 5, 6, 3];

const countDuplicate = arr => {
  const list = Object.create(null);
  let i = arr.length;

  while (i--) {
    const number = arr[i];

    if (typeof list[number] === 'undefined') {
        list[number] = 1;
    } else {
        list[number]++;
    }
  }

  return Object.values(list).reduce((acc, num) => {
      if (num >= 2) acc++;
      return acc;
  }, 0);
}

console.log(countDuplicate(input));