// file:///Users/phat.phamtrong/workspace/personal/codewars/src/binary-gap/index.html
const input = 1000100000100;

const binaryGap = N => {
  let str = N.toString();
  let zeroCount = 0;
  let result = 0;
 
  for ( let digit of str ) {
      if ( digit === '0' ) {
          zeroCount += 1;
      } else /* if ( digit === '1' ) */ {
          result = Math.max( result, zeroCount );
          zeroCount = 0;
      }
  }

  return result;
}

console.log(binaryGap(input));