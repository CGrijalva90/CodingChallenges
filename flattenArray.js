// Write a recursive function called flatten that takes in an array of arrays and returns a new array with all the values flattened

const flatten = arr => {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if(Array.isArray(arr[i])) {
			newArr = newArr.concat(flatten(arr[i]));
		} else {
			newArr.push(arr[i])
		}
	}
	return newArr;
}