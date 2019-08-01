// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

var sortArrayByParity = function(A) {
	let results = []
	A.forEach(el => {
		if (el % 2 === 0) {
			results.unshift(el)
		} else {
			results.push(el)
		}
	})
	return results
};