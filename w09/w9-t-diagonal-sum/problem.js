// Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)
// Matrix = array of n length whose elements are n length arrays of integers.
// 3x3 example:
// diagonals( [
  // [ 1, 2, 3 ],
  // [ 4, 5, 6 ],
  // [ 7, 8, 9 ]
// ] )

// returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7

function diagonals(matrix) {
  var length = matrix.length
  var sum = 0
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i === j) {
        console.log(matrix[j])
        sum += matrix[i][j]
      }
      if (i + j === length - 1) {
        sum += matrix[i][j]
      }
    }
  }
  return sum
}



module.exports = {
  diagonals: diagonals,
  attendance: 'The word of the day is'
};
