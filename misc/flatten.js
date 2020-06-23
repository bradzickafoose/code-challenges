// Without using .flat(), create a function to flatten an array

// const arr = [1,[2,3,4,[5,6],7],8,9,10]
// flatten(arr); [1,2,3,4,5,6,7,8,9,10]

function flatten(arr) {
	return arr.reduce((prev, curr) => {
		if (Array.isArray(curr)) {
			prev = prev.concat(flatten(curr));
		} else {
      prev.push(curr);
		}
		return prev;
	}, []);
}