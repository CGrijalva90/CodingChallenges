// The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

// 1) The subarray which is already sorted.
// 2) Remaining subarray which is unsorted.

// In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

const selectionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		let lowest = i;
		for (j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j

			}
		}
		let temp = arr[i];
		arr[i] = arr[lowest]
		arr[lowest] = temp;
	}
	return arr
};

selectionSort([34, 22, 10, 19, 17]);