const input = 123;
const keypad = {
  1: ['a', 'b', 'c'],
  2: ['d', 'e', 'f'],
  3: ['g', 'h', 'i'],
  4: ['j', 'k', 'l'],
  5: ['m', 'n', 'o']
};

const possibleWords = value => {
  const pads = (value + '').split('');
  const result = [];
  const loop = (text, pad) => {
    if (!pad.length) {
      result.push(text);
      return;
    }
    
    keypad[+pad[0]].forEach(key => loop(text + key, pad.slice(1)));
  };
  
  loop('', pads);
  
  return result;
}

console.log(possibleWords(input));