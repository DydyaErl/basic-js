const { NotImplementedError } = require('../extensions/index.js');

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
  if (!str) return '';

  let result = '';
  let count = 1;
  let current = str[0];

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === current) {
      count++;
    } else {
      result += (count > 1 ? count : '') + current;
      current = str[i];
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine
};
