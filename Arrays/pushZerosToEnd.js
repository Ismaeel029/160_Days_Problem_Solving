/**
 * anchor - runner 
 * @param {*} arr 
 * @returns 
 */

export const pushZerosToEnd = (arr) => {
  let anchorIndex = 0;
  let runnerIndex = 0;
  while (runnerIndex < arr.length) {
    let currNumber = arr[runnerIndex];
    if (currNumber !== 0) {
      [arr[anchorIndex], arr[runnerIndex]] = [arr[runnerIndex], arr[anchorIndex]];
      anchorIndex++;
    }
    runnerIndex++;    
  }
  return arr;
}