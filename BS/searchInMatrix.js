const matrix = [
  [ 1,  4,  7, 11, 15],
  [ 2,  5,  8, 12, 19],
  [ 3,  6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
const target = 16

function searchTargetInMatrix(mat, target) {
    let row = 0;
    let col = mat[0].length - 1;

    let n = col - 1;

    while (row < n && col >= 0) {
        if (mat[row][col] === target) {
            return [row, col];
        }else if (mat[row][col] < target) {
            row ++;
        }else {
            col--
        }
    }

    return [-1, -1]
}

console.log(searchTargetInMatrix(matrix, target));
