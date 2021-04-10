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
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const arr = [];
    for (let j = 0; j < matrix[0].length; j++) {
      arr.push(0);
    }
    res.push(arr);
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (x + 1 < matrix[y].length && matrix[y][x + 1] === true) {
        res[y][x]++;
      }
      if (x - 1 >= 0 && matrix[y][x - 1] === true) {
        res[y][x]++;
      }
      if (y + 1 < matrix.length && matrix[y + 1][x] === true) {
        res[y][x]++;
      }
      if (y - 1 >= 0 && matrix[y - 1][x] === true) {
        res[y][x]++;
      }
      if (y + 1 < matrix.length && x + 1 < matrix[y].length && matrix[y + 1][x + 1] === true) {
        res[y][x]++;
      }
      if (y - 1 >= 0 && x + 1 < matrix[y].length && matrix[y - 1][x + 1] === true) {
        res[y][x]++;
      }
      if (y + 1 < matrix.length && x - 1 >= 0 && matrix[y + 1][x - 1] === true) {
        res[y][x]++;
      }
      if (y - 1 >= 0 && x - 1 >= 0 && matrix[y - 1][x - 1] === true) {
        res[y][x]++;
      }
    }
  }
  return res;
}

module.exports = minesweeper;
