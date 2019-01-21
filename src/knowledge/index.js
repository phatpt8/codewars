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

// console.log(curry1());
// console.log(curry1(2));
// console.log('========');


const createAdd = number => {
  let num = number || 0;
  return function(n) {
    num += n;
    return num;
  }
}
const addNumber = createAdd();
// console.log(addNumber(5));
// console.log(addNumber(10));

const compose = (...fns) =>
  fns.reduceRight((prevFn, nextFn) =>
    (...args) => nextFn(prevFn(...args)),
    value => value
  );

// const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);



// const curry = (fn, ...args) => (...argum) => fn.apply(this, args.concat(argum));
// const add = (...args) => args.reduce((a, b) => a + b);
// const compose = (...functions) => x => functions.reduceRight((args, fn) => fn(args), x);
// const pipe = (...functions) => x => functions.reduce((args, fn) => fn(args), x);

// predict the result
// const a = {
// 	name: 'A',
// 	getName: function() { return this.name; }
// }

// const b = {
// 	name: 'B',
// 	getName: () => this.name
// }

const Then = fn => {

}

const co = funct => {

  let fn = funct();
  let val = null;

  while (true) {
    const result = fn.next();

    if (typeof result.value === 'object') {
      const romise = result.value;

      if (romise.then) {
        romise.then(val => console.log(val));
      }
    }

    if (result.done) {
      val = result.value;
      break;
    }
  }

  console.log(val);
  
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  // console.log(fn.next());
  
  this.then = Then
}

function fetchProducts() {
  return Promise.resolve([ { name: 'p1' } ])
}

function fetchCategories() {
  return Promise.resolve([ { catName: 'c1' } ])
}

co(function* () {
  const products = yield fetchProducts();
  const categories = yield fetchCategories();

  return {
    products,
    categories
  };
})
  // .then((result) => {
  //   console.log(result);
  // })
  // .catch((err) => {
  //   console.log(err);
  // })

