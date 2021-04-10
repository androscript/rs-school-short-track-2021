/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr.slice();
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === -1) {
      newArr.splice(i, 1);
      i -= 1;
    }
  }
  newArr.sort((a, b) => a - b);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      newArr.splice(j, 0, -1);
    }
  }
  return newArr;
}

module.exports = sortByHeight;
