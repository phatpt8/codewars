- what is closure?
- what is prototype chain?
- { a : 1 } == { a : 1 } ? // true or false
- viết hàm add: add(1)(2)(2) \\ return 5
- viết hàm createAdd: const add = createAdd(); add(5) \\return 5; add(5) \\return 10 (cộng dồn); add(1) \\return 11
- re-implement Promise

- A closure is the combination of a function and the lexical environment within which that function was declared.
- Javascript: inheritance with the prototype chain, when trying to access a property of an object, the property will not only be sought on the project but on the prototype of an object.
- false, object is reference variable
- 
- const createAdd = num => {
    this.num = num || 0;
	return function(n) {
		this.num += n;
		return this.num;
	}
}