// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:

// arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

const relativeSortArray = function(arr1, arr2) {
	let remainders = [];
	let res = [];
	let mapping = {};

	arr2.forEach(elem => {
		mapping[elem] = [];
	})

	arr1.forEach(elem => {
		if(elem in mapping) {
			mapping[elem].push(elem)
		} else {
			remainders.push(elem)
		}
	})

	for (let i = 0; i < arr2.length; i++) {
		res = res.concat(mapping[arr2[i]])
	}

	remainders.sort((a, b) => a - b)
	res = res.concat(...remainders)

	return res
};

arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]

relativeSortArray(arr1, arr2)

