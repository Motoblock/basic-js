const { NotImplementedError } = require('../extensions/index.js');

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
function getCommonCharacterCount(/*s1, s2*/ ) {
  //let mas = [];
  throw new NotImplementedError('Not implemented');
  // if(s1.length == 0 || s1.length == 1) return 0;
  // let count = 0;
  // for(let i = 0; i < s1.length; i++) {
  // //  console.log(s2.includes(s1[i]))
  //   if (s2.includes(s1[i]) === false) {count++; }
  // }
  // if(count == 0 && s1.length != s2.length) count = Math.abs(s1.length - s2.length) + 1;
  // return count;
}
// console.log(getCommonCharacterCount('a', 'b'));
// console.log(getCommonCharacterCount('aabcc', 'adcaa'));
// console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));
// console.log(getCommonCharacterCount('abca', 'xyzbac'));
// console.log(getCommonCharacterCount('', 'abc'));
// console.log(getCommonCharacterCount('a', 'b'));


module.exports = {
  getCommonCharacterCount
};
