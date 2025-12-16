// find row from matrix which has max number of ones, where each row is sorted 
const matrix = [
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 0, 0]
]

function findMaxNumberOfOnes(matrix) {
    let maxOneRow = -1;
    let countMaxOne = 0;
    let cols = matrix[0].length;

    for (let i = 0; i < matrix.length; i++) {
        let start = 0;
        let end = cols - 1;
        let firstOneIndex = -1;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);

            if (matrix[i][mid] === 1) {
                firstOneIndex = mid;
                end = mid - 1; // move left
            } else {
                start = mid + 1; // move right
            }
        }

        if (firstOneIndex !== -1) {
            let onesCount = cols - firstOneIndex;

            if (onesCount > countMaxOne) {
                countMaxOne = onesCount;
                maxOneRow = i;
            }
        }
    }

    return maxOneRow;
}

console.log(findMaxNumberOfOnes(matrix));
