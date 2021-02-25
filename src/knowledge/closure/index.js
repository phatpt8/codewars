// problem
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0)
}

// solution 1
for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0)
}

// solution 2
for (var i = 0; i < 10; i++) {
  setTimeout(((ii) => {
    console.log(ii);
  }).bind(null, i), 0)
}

// solution 3
for (let i = 0; i < 10; i++) {
  (() => setTimeout(() => {
    console.log(i);
  }, 0))()
}