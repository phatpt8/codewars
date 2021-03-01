let expandFromMiddle = (str, left, right) => {
  if (str == undefined || str.length === 0) return 0

  while (left >= 0 & right < str.length && str.charAt(left) === str.charAt(right)) {
    left--;
    right++;
  }

  return right - left - 1
}

let longestPalindrome = str => {
  if (str == undefined || str.length === 0) return ''

  let start = 0
  let end = 0

  for (let i = 0; i < str.length; i++) {
    let len1 = expandFromMiddle(str, i, i)
    let len2 = expandFromMiddle(str, i, i + 1)
    let len = Math.max(len1, len2)

    if (len > end - start) {
      start = i - ((len - 1) / 2)
      end = i + (len / 2)
    }
  }

  return str.substring(start, end + 1)
}