const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!matrix || matrix.length === 0) return 0;

  let  count = 0;
  for(let i in matrix) {
    for(let j of matrix[i]) {
      if(j === "^^") count++;
    }
  }
  return count;
}

module.exports = {

    countCats
};