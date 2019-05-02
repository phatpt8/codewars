const palindrome = (str) => {
  const len = str.length;
  const mid = (len - 1) / 2;
  let i = 0;
  let j = len - 1;
  let result = true;

  while (i < mid && result) {
    if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      result = false;
      break;
    }
  }

  return result;
}

palindrome('madam');