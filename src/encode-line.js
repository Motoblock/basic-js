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
  let count = 1, res = '';
  if(str == '') return "";
  for(let i = 1; i < str.length; i++) {
    if(str[i - 1] != str[i]) {res += (count == 1 ? '' : count) + str[i - 1]; count = 1;}
    else count++;
  }
  res += (count == 1 ? '' : count) + str[str.length - 1];
  return res;
}

console.log(encodeLine('aaaatttt'))
module.exports = {
  encodeLine
};
