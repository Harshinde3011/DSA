const matrix = [
  [ 1,  4,  7, 11, 15],
  [ 2,  5,  8, 12, 19],
  [ 3,  6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
const target = 16

function searchMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    // Edge case: 1x1 matrix
    if (matrix.length === 1 && matrix[0].length === 1) {
        return matrix[0][0] === target;
    }

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] < target) {
            row++;      // move down
        } else {
            col--;      // move left
        }
    }

    return false;
}


console.log(searchTargetInMatrix(matrix, target));
