/**
 * Takes in an array of numbers
 * Sets the largets and second largest as the kowest possible number
 * Check if the current number in the array is greater than the largest,
 * if yes, second largest becomes the largest, and largest becomes the new number
 * If largest is greater than the number, check if the second largest is smaller,
 * if yes, replace the second Largest.
 * @param {} arr 
 * @returns 
 */

export const getSecondLargest = (arr) => {
  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;

  for(let i=0; i<arr.length; i++) {
    let currNum = arr[i];
    if (largest === currNum) continue;
    if (largest < currNum) {
      secondLargest = largest;
      largest = currNum;
    } else if (largest > currNum) {
      if (secondLargest < currNum) secondLargest = currNum;
    }
  }
  if (secondLargest === Number.MIN_VALUE) return -1;
  return secondLargest;
}