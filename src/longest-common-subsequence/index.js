function lcs(s, t) {
  const sLen = s.length;
  const tLen = t.length;
  let arr = Array.from({ length: sLen + 1 }, () => Array.from({ length: tLen + 1 }));

  for (i = sLen; i >= 0; i--) {
    for (j = tLen; j >= 0; j--) {
      if (i === sLen || j === tLen) {
        arr[i][j] = '';
      } else if (s[i] === t[j]) {
        arr[i][j] = s[i] + arr[i + 1][j];
      } else {
        arr[i][j] = arr[i + 1][j].length > arr[i][j + 1].length ? arr[i + 1][j] : arr[i][j + 1];
      }
    }
  }
  
  const answer = arr[0][0];
  arr = null;
  return answer;
}
lcs('ABCDE', 'AFKDU') // "AD" -> correct
lcs('ABCD', 'AFKD') // "AD" -> correct