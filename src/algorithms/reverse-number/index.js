const reverseNumber = number => {
  let reversed = 0;
  let remainder = 0;

  while (number > 0) {
    remainder = number % 10;
    number = ~~(number / 10); // float to int
    reversed = reversed * 10 + remainder;
  };

  return reversed;
}