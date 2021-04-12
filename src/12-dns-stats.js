/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const temp1 = [];
  const temp2 = [];
  const res = {};
  for (let i = 0; i < domains.length; i++) {
    temp1.push(domains[i]);
    for (let j = 0; j < domains[i].length; j++) {
      if (domains[i][j] === '.') {
        temp1.push(domains[i].slice(j + 1));
      }
    }
  }
  for (let i = 0; i < temp1.length; i++) {
    temp2.push(`.${temp1[i].split('.').reverse().join('.')}`);
  }

  for (let i = 0; i < temp2.length; i++) {
    if (temp2[i] in res) {
      res[temp2[i]]++;
    } else {
      res[temp2[i]] = 1;
    }
  }

  return res;
}

module.exports = getDNSStats;
