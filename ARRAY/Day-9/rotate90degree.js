// rotate array in 90 degree 
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// const rotated = [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ];

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function rotateBy90Degree(array) {
    const n = array.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n-1-i] = array[i][j]
        }        
    }

    return rotated;
}

console.log(rotateBy90Degree(matrix));




