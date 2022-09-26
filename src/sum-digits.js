const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if(n == 0) return 0;
  let mas = String(n).split("");
  n = mas.reduce((sum, val) => sum + Number(val), 0) * 1;
  if(n > 9) return getSumOfDigits(n);
  return n;
}
console.log(getSumOfDigits(getSumOfDigits(123)));
module.exports = {
  getSumOfDigits
};
