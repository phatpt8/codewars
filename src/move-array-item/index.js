const input = [8,-1,0,6,-3,4,0,7,4,0,9,0];

const move = (arr, k) => {
	let i = 0;
	let j = arr.length - 1;
	let moved = 0;

	while (i < j) {
		if (arr[i] === k && arr[j] !== k) {
			[arr[j], arr[i]] = [arr[i], arr[j]];
		}

		if (arr[i] !== k) {
			i++;
			moved++;
		}

		if (arr[j] === k) {
			j--;
		}
	}

	return moved;
}
move(input, 0);