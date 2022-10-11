const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let masnew = [];
  let tmp = [];
  let i = 0;
  tmp = arr.filter(item => item >= 0).sort(function(a, b) { return a - b; });

  arr.forEach(e => {
    if(e == -1) masnew.push(-1);
    else {
      masnew.push(tmp[i]);
      i++;
    }
  });
return masnew;
}
//console.log(sortByHeight([ 11, 16, 2, 2, 4, 9 ]));
module.exports = {
  sortByHeight
};
