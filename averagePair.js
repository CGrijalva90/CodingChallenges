// Given a sorted array of integers and a target flipAndInvertImage, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const averagePair = (arr, avg) => {
	if (arr.length === 0) return false;
	let end = arr.length - 1;
	for (let start = 0; start < arr.length; start++) {
		let total = arr[start] + arr[end];
		let average = total / 2;
		if (average > avg) end--;
		if (average === avg) return true;
	}
	return false;
}