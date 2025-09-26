let arr = [1,2,3,4,5,6,7];
let arr1 = [1,2,1,11,5,6,7];

function isArraySorted(arr1) {
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] < arr1[i - 1]) {
            return false
        }        
    }
    return true
};

console.log("is array sorted: ", isArraySorted(arr));
