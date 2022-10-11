const { NotImplementedError } = require('../extensions/index.js');

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
  let masn = String(n).split("");
  let max = 0;
  for(let i = 0; i < masn.length; i++) {
    let num = [];
    for(let j = 0; j < masn.length; j++) {
      if(i != j) num.push(masn[j]);
    }
    max = Math.max(max, Number(num.join("")));
  }
return max;
}

module.exports = {
  deleteDigit
};
