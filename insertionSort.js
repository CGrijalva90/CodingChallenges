// Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.

// It iterates the input elements by growing the sorted array at each iteration. It compares the current element with the largest value in the sorted array. If the current element is greater, then it leaves the element in its place and moves on to the next element else it finds its correct position in the sorted array and moves it to that position. This is done by shifting all the elements, which are larger than the current element, in the sorted array to one position ahead


const insertionSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		currentVal = arr[i]
		prev = i - 1;
		while(prev >= 0) {
			if (currentVal < arr[prev]) {
				arr[prev + 1] = arr[prev];
				arr[prev] = currentVal;
				prev--;
			} else {
				break;
			}
		}
	}
	return arr
};
