/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let first = 0;
  let last = array.length;
  let middle = 0;

  while (last >= first) {
    if (array[middle] === value) {
      return middle;
    }
    middle = Math.floor((first + last) / 2);
    if (value < array[middle]) {
      last = middle;
    } else {
      first = middle;
    }
  }
  return false;
}

module.exports = findIndex;
