
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i].sort((a, b) => b - a)
        } else {
            matrix[i].sort((a, b) => a - b)
        }
      
      for (let j = 0; j < matrix[i].length; j++) {
        arr.push(matrix[i][j]);
      }
    }
    return arr;
}
