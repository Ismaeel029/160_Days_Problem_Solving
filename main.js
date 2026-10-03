const { getSecondLargest } = require('./Arrays/secondLargest');
const { pushZerosToEnd } = require('./Arrays/pushZerosToEnd');
const { reverseArray, rotateArr } = require('./Arrays/reverseArray');

console.log('------------SECOND LARGEST NUMBER');
console.log(getSecondLargest([12, 35, 1, 10, 34, 1]));
console.log(getSecondLargest([10, 5, 10]));
console.log(getSecondLargest([10, 10, 10, 20, 15]));

console.log('\n------------PUSH ZEROS TO END');
console.log(pushZerosToEnd([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(pushZerosToEnd([10, 20, 30]));
console.log(pushZerosToEnd([0, 0]));

console.log('\n------------REVERSE ARRAY');
console.log(reverseArray([1, 4, 3, 2, 6, 5]));
console.log(reverseArray([4, 5, 2]));
console.log(reverseArray([1]));

console.log('\n------------ROTATE ARRAY');
console.log(rotateArr([1, 2, 3, 4, 5], 2));
console.log(rotateArr([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3));
console.log(rotateArr([7, 3, 9, 1], 9));
console.log(rotateArr([7, 3, 9, 1], 8));
