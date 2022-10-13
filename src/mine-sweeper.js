const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 let matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
 ];
function minesweeper(matrix) {
  if (matrix.length == 0) {return []}
 // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log(matrix); 
  
  let newmatrix = [[0,0,0],[0,0,0],[0,0,0]]; //matrix.fill(0);
  //let newmatrix = [...Array(matrix.length)].map(e => Array(matrix[0].length).fill(0))
  
  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++)
    {
     if (matrix[i][j] == true) {
   //   if (!(i == 1 && j == 1)) {
      let index = [[i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
                   [i, j - 1] , [i,j],[i , j + 1], 
                   [i + 1, j - 1],[i + 1, j], [j + 1, j + 1]];
      for (let [x, y] of index) {

        //if ((x >= 0 && x < matrix.length) &&  (y >= 0 && y < matrix[i].length)) {
          console.log('x>=',x,' x < ',matrix.length,'y >=',y,'matrix[i].length <',matrix[i].length);
          if ((x >= 0 && x < matrix.length) &&  (y >= 0 && y < matrix[i].length)) {
          newmatrix[x][y]++;
        }
      }
    }

    }
      console.log(newmatrix[i]);
  }
  return newmatrix;
}

module.exports = {
  minesweeper
};
console.log(minesweeper(matrix));