/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const first = s1.split('');
  const second = s2.split('');
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      res += 1;
      const del = second.indexOf(first[i]);
      second.splice(del, 1);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
