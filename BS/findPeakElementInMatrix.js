const matrix = [
  [10,  8, 10, 10],
  [14, 13, 12, 11],
  [15,  9, 11, 21],
  [16, 17, 19, 20]
]

function findMaxElementInRow(mat, n, m, col) {
    let maxElement = -1;
    let index = -1;

    console.log(`\nFinding max in column ${col}`);

    for (let i = 0; i < mat.length; i++) {
        console.log(`Comparing mat[${i}][${col}] = ${mat[i][col]} with maxElement = ${maxElement}`);

        if (mat[i][col] > maxElement) {
            maxElement = mat[i][col];
            index = i;
            console.log(`→ New max found: ${maxElement} at row ${index}`);
        }
    }

    console.log(`Max element in column ${col} is ${maxElement} at row ${index}`);
    return index;
}

function findPeakElementInMatrix(mat) {
    let start = 0;
    let end = mat[0].length - 1;

    console.log("Starting Binary Search on columns");

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(`\nChecking mid column = ${mid}`);

        let maxRowIndex = findMaxElementInRow(mat, start, end, mid);

        let current = mat[maxRowIndex][mid];
        let left = mid - 1 >= 0 ? mat[maxRowIndex][mid - 1] : -1;
        let right = mid + 1 < mat[0].length ? mat[maxRowIndex][mid + 1] : -1;

        console.log(`At position [${maxRowIndex}, ${mid}]`);
        console.log(`Current = ${current}, Left = ${left}, Right = ${right}`);

        if (current > left && current > right) {
            console.log("✅ Peak found!");
            return [maxRowIndex, mid];
        } 
        else if (current < right) {
            console.log("➡ Moving right");
            start = mid + 1;
        } 
        else {
            console.log("⬅ Moving left");
            end = mid - 1;
        }
    }

    console.log("❌ No peak found");
    return [-1, -1];
}

console.log(findPeakElementInMatrix(matrix));

