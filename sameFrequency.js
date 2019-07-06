// Write a function called sameFrequency. Given two positiv integers, find out if the two numbers have the same frequency of digits

const sameFrequency = (num1, num2) => {
	const strNum1 = num1.toString();
	const strNum2 = num2.toString();
	if (strNum1.length !== strNum2.length) return false;

	const countNum1 = {};
	const countNum2 = {};

	for (let i = 0; i < strNum1.length; i++) {
		countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
	}

	for (let j = 0; j < strNum1.length; j++) {
		countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
	}
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
	return true;
};


// This solution would produce a time complexity of O(n^2) due to the splice inside the iteration.
const sameFrequency2 = (num1, num2) => {
	const num1Arr = num1.toString().split('');
	const num2Arr = num2.toString().split('');
	if (num1Arr.length !== num2Arr.length) return false;
	num1Arr.forEach(num => {
		const num2ArrIndex = num2Arr.indexOf(num);
		if (num2ArrIndex !== -1) num2Arr.splice(num2ArrIndex);
	});
	return num2Arr.length === 0;
};

sameFrequency2([1182], [8121]);
