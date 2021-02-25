let a = {
  value: 999,
  b: function() {
    console.log(this.value);
  },
  c: () => {
    console.log(this.value);
  }
}

a.b(); // 999
a.c(); // undefined

function test() {
  this.value = 'test';
  a.b(); // 999
  a.c(); // test
}
test()