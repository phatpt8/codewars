const input = [100, 4, 200, 1, 3, 2];

const longestConsecutive = arr => {
  const set = new Set(arr);
  let result = 0;
  let next;

  set.forEach(number => {
    if (!set.has(number - 1)) {
      next = number + 1;
      while (set.has(next)) {
        next = next + 1;
      }

      result = Math.max(result, next - number);
    }
  });

  return result;
};

longestConsecutive(input) // log 4