// n = 6
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1],
//   [1, 5, 10, 10, 5, 1]
// ]


function generateRow(row) {
    let tempArray = [1];
    let ans = 1;
    for (let col = 1; col < row; col++) {
        ans = ans * (row - col);
        ans = ans / col;
        tempArray.push(ans);
    }
    return tempArray
}

function pascalTriangle(n) {
    let result = []
    for (let row = 1; row <= n; row++) {
        let element = generateRow(row);
        result.push(element);
    }
    return result;
}

console.log(pascalTriangle(6));

