/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  const arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    while (arr[i] === arr[i + 1] || arr[i] === arr.length - 1) {
      count++;
      i++;
    }
    if (count !== 1) res.push(count);
    res.push(arr[i]);
  }
  return res.join('');
}

module.exports = encodeLine;
