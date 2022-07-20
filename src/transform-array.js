const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
 if(!arr)  throw new Error("'arr' parameter must be an instance of the Array!");

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if(arr.length === 0) return arr;

  let k = -10, m = '';
  const yslovie = ['--discard-next','--discard-prev','--double-next','--double-prev'];
 
  let transformArray = [];
  let arr2 = [];
  for(let i = 0; i<arr.length; i++) {

      if(arr[i] === yslovie[0]) {  k = i + 1; m = undefined; transformArray[i] = undefined; transformArray[i + 1] = undefined;} //transformArray = transformArray.filter(item => item !==  yslovie[0]);}//transformArray.splice((i + 1),1); }
      else if(arr[i] === yslovie[1]) { transformArray[i] = undefined; transformArray[i - 1] = undefined;}//transformArray = transformArray.filter(item => item !==  yslovie[1]);}
      else if(arr[i] === yslovie[2]) {  transformArray[i] = arr[i + 1]; }
      else if(arr[i] === yslovie[3]) {
        if(k == i - 1) transformArray[i] = m;
        else transformArray[i] = arr[i - 1]; }
      else {
        if(k !== i ) {transformArray.push(arr[i]); }
        else {transformArray.push(undefined); };
      }
  }
  arr2 = transformArray.filter(function (el) {
    return el != null ;
  });
 
  return arr2;
}

module.exports = {
  transform
};
//transform([1, ,2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
//transform([undefined, 1, undefined, 5]);
//transform(undefined);
//transform([1, 2, 3, 4, 5 ]);

