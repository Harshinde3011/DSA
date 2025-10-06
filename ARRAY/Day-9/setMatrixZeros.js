// // Input Matrix:
// [
//   [1, 2, 3],
//   [4, 0, 6],
//   [7, 8, 9]
// ]

// here 0 is at mid means at col 1 and row 1 so set all elements in row and col 1 as 0

// [
//   [1, 0, 3],
//   [0, 0, 0],
//   [7, 0, 9]
// ]

const maxtrix = 
[
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]

let rowsLen = maxtrix.length;
let colLen = maxtrix[0].length;
let rowArray = new Array(rowsLen).fill(0);
let colArray = new Array(colLen).fill(0);

console.log("rowArray: ", rowArray);
console.log("colArray: ", colArray);

for (let i = 0; i < rowsLen; i++) {
    for (let j = 0; j < colLen; j++) {
        if (maxtrix[i][j] == 0) {
            rowArray[i] = 1;
            colArray[j] = 1;
        }        
    }
}

console.log("after updatation rowArray: ", rowArray);
console.log("after updatation colArray: ", colArray);

for (let i = 0; i < rowsLen; i++) {
    for (let j = 0; j < colLen; j++) {
        if ( colArray[j] == 1 || rowArray[i] == 1 ) {
            maxtrix[i][j] = 0
        }        
    }
}

console.log(maxtrix);




