/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reversed = email.split('').reverse();
  const index = reversed.indexOf('@');
  const domain = reversed.splice(0, index);
  const res = domain.reverse().join('');
  return res;
}

module.exports = getEmailDomain;
