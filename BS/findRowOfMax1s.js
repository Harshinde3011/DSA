// find row from matrix which has max number of ones, where each row is sorted 
const matrix = [
    [0,1],
    [0,1]
]

function findMaxNumberOfOnes(mat) {
   if (!mat || mat.length === 0) return [-1, 0];

    let rows = mat.length;
    let cols = mat[0].length;

    let maxOnes = 0;
    let rowIndex = 0;

    for (let i = 0; i < rows; i++) {
        let low = 0, high = cols - 1;
        let firstOne = -1;

        // Binary search for first 1 in current row
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (mat[i][mid] === 1) {
                firstOne = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        let onesCount = firstOne === -1 ? 0 : cols - firstOne;

        // Update only if strictly greater
        if (onesCount > maxOnes) {
            maxOnes = onesCount;
            rowIndex = i;
        }
        // if equal → we do NOTHING (smaller index already kept)
    }

    return [rowIndex, maxOnes];
}

console.log(findMaxNumberOfOnes(matrix));


// ✅ Time & Space Complexity

// Time: O(n log m)

// Space: O(1)