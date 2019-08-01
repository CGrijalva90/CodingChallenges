// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

const sortedSquares = function(A) {
	const squares = A.map(num => Math.pow(num, 2));
	return squares.sort((a, b) => a - b)
};

sortedSquares([-4,-1,0,3,10])