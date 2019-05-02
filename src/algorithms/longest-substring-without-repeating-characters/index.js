const input = 'pwwkew';

const lengthOfLongestSubstring = str => {
  const mapping = {};
  const slidingArr = [];
  let result = 0;

  for (const char of str) {
    const len = slidingArr.push(char);

    if (mapping[char]) {
      const delIndex = slidingArr.findIndex(s => s === char);

      for (let i = 0; i < delIndex; i++) {
        mapping[slidingArr[i]] = false;
      }

      slidingArr.splice(0, delIndex + 1);
    } else {
      if (len > result) {
        result = len;
      }
    }

    mapping[char] = true;
  }

  return result;
}

lengthOfLongestSubstring(input) // log 3