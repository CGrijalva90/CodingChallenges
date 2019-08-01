// The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. Radix sort uses counting sort as a subroutine to sort.

// Implement radix sort

const getDigit = (num, i) => {
	return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
};

const digitCount = num => {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = nums => {
	let maxDigits = 0;
	for (let i = 0; i < nums.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(nums[i]))
	};
	return maxDigits
}

