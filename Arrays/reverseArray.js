export const reverseArray = (arr, start = 0, end = arr.length - 1) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

/**
 * 
 * @param {number[]} arr - array of numbers
 * @param {number} d  - steps for counter-clockwise rotation
 * [1, 2, 3, 4, 5] and d = 2;
 * elementsToRotate = 2 % 5 = 2;
 * first reversal = [2, 1, 3, 4, 5]
 * second reversal = [ 2, 1, 5, 4, 3]
 * final reversal = [3, 4, 5, 1, 2]
 */
export const rotateArr = (arr, d) => {
  const N = arr.length;
  const elementsToRotate = d % N;

  if (elementsToRotate === 0) return arr;

  //reverse array in place using elementsToRotate
  reverseArray(arr, 0, elementsToRotate - 1);
  reverseArray(arr, elementsToRotate, N - 1);
  reverseArray(arr);
  
  return arr;
}