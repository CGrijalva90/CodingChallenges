/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
*/

var transpose = A => {
	let res = new Array(A[0].length);
	for (let i = 0; i < res.length; i++) {
		res[i] = new Array(A.length);
		for (let j = 0; j < res[i].length; j++) {
			res[i][j] = A[j][i]
		}
	}
	return res
}

A =  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

transpose(A)