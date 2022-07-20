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
  if(!arr) return;
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
}


  const yslovie = ['--discard-next','--discard-prev','--double-next','--double-prev'];
  console.log(arr);
  let transformArray = arr;
  //let arr2 = [];
  for(let i in arr) {
 //   let what = arr.indexOf(i);
 
       console.log(arr[i]);
      if(arr[i] === yslovie[0]) { console.log(i);  transformArray[i] = ''; transformArray[i + 1] = '';} //transformArray = transformArray.filter(item => item !==  yslovie[0]);}//transformArray.splice((i + 1),1); }
      else if(arr[i] === yslovie[1]) {console.log(i); transformArray[i] = ''; transformArray[i - 1] = '';}//transformArray = transformArray.filter(item => item !==  yslovie[1]);}
      else if(arr[i] === yslovie[2]) {console.log(i);  transformArray[i] = arr[i + 1]; }
      else if(arr[i] === yslovie[3]) {console.log(i);  transformArray[i] = arr[i - 1]; }
      console.log(transformArray);

  }
  transformArray = transformArray.filter(item => item !==  '');
  console.log(transformArray);
  return transformArray;
}

module.exports = {
  transform
};
transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])
