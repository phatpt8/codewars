// function curry(fn) {
//   var args = Array.prototype.slice.call(arguments, 1);

//   return function () {
//       return fn.apply(this, args.concat(
//               Array.prototype.slice.call(arguments, 0)
//       ));
//   }
// }

// function add() {
//   var args = Array.prototype.slice.call(arguments);

//   return args.reduce(function (previousValue, currentValue) {
//       return previousValue + currentValue;
//   });
// }

const curry = (fn, ...args) => (...argu) => fn.apply(this, args.concat(argu));
const add = (...args) => args.reduce((acc, val) => acc + val);

const curry1 = curry(add, 1);

console.log(curry1());
console.log(curry1(2));
console.log('========');


const createAdd = number => {
  let num = number || 0;
  return function(n) {
    num += n;
    return num;
  }
}
const addNumber = createAdd();
console.log(addNumber(5));
console.log(addNumber(10));

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  );

// const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);


