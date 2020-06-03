const max = function (nums) {
	let m = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (m < nums[i]) { m = nums[i] }
	}
	return m;
}
const min = function (nums) {
	let n = nums[0];
	for (let j = 1; j < nums.length; j++) {
		if (n > nums[j]) { n = nums[j] }
	}
	return n;
}
const range = function (nums) {
	let o = nums[0];
	let p = nums[0];
	for (let r = 1; r < nums.length; r++) {
		if (o < nums[r]) { o = nums[r] }
		if (p > nums[r]) { p = nums[r] }
	}
	return o - p;
}
const mean = function (nums) {
	let sum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		sum = nums[i] + sum;
	}
	return Math.round(sum / nums.length);
}
const median = function (nums) {
	let sorted = nums.sort();
	let answer = ""
	if (sorted.length % 2 === 1) {
		answer = (sorted[Math.floor(sorted.length / 2)])
	}
	else {
		answer = ((sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1]) / 2)
	}
	return answer;
}

const sort = function (nums) {
	for (let k = 0; k < nums.length; k++) {
		let index = k;
		let min = nums[k]
		for (let l = k + 1; l < nums.length; l++) {
			if (nums[l] < min) {
				min = nums[l];
				index = l;
			}
		}
		if (index !== k) {
			[nums[index], nums[k]] = [nums[k], nums[index]]
		}
	}
	return nums;
}

const IQR = function (nums){
	let sorted = nums.sort();
	let answer = ""
	let interquartile = ""
	if(sorted.length % 2 ===1) {
		answer = (sorted[Math.floor(sorted.length / 2)])
	}else{
		answer = ((sorted[sorted.length / 2] + sorted[sorted.length / 2 - 1])/2)
	}
	return answer;
	
}