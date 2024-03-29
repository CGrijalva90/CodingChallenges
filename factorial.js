// Find the factorial of a number

const factorial = num => {
	if(num < 0) return 0;
	if(num === 1) return 1;
	return num * factorial(num - 1)
}
