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


const input2 = [2, 3, 1, 2, 4, 3];
// values in the array < array.length
const countDuplicate2 = arr => {
  const len = arr.length;
  let i = 0;

  while (i < len) {
    const value = Math.abs(arr[i]);
    const atIndexValue = arr[value];
    
    if (atIndexValue > 0) {
      arr[value] = -atIndexValue;
    } else {
      console.log('Duplicated: ' + value);
    }

    i++;
  }
}
countDuplicate2(input2);