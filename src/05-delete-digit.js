/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const res = n.toString().split('').map(Number);
  const min = Math.min(...res);
  const pos = res.indexOf(min);
  res.splice(pos, 1);
  return parseInt(res.join(''), 10);
}

module.exports = deleteDigit;
