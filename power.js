// Write a function called power which accpets a base and an exponent.

const power = (base, exponent) => {
	if(exponent === 0) return 1;
	return base * power(base,exponent-1);
}