
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix === undefined || matrix.length === 0) {
    return [];
  }

  let arr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j])
      }
    } else if (i % 2 === 1) {
        matrix[i].reverse;
        for (let o = 0; o < matrix[i].length; o++) {
          arr.push(matrix[i][[matrix[i].length - o - 1]]);
      }
    
    }
  }
  
  return arr;
}
