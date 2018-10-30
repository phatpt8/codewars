const input = '{[()()]}';

const pairBrackets = S => {
  const mapping = {
    '{': '}',
    '[': ']',
    '(': ')',
  }
  const opening = '{[(';
  const closing = '}])';
  const stack = [];
  let result = true;
  let i = 0;
    
  while (i < S.length) {
      const char = S[i];

      if (opening.includes(char)) {
        stack.push(char);
        lastOpening = char;
      } else if (closing.includes(char)) {
        if (char !== mapping[stack.pop()]) {
          result = false;
          break;
        }
      }
      
      i++;
  }

  if (stack.length > 0) {
    result = false;
  };
  
  return Number(result);
}

console.log(pairBrackets(input));
