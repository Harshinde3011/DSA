let arr = [1,1,2,2,3,3,3];


// brute force approach 
function removeDuplicates(arr) {
    let set = new Set();

    for (let i = 0; i < arr.length; i++) {
        set.add(arr[i]);     
    }
    return Array.from(set)   // return array
}
console.log("unique elements", removeDuplicates(arr));


// optimal approach

function optimalApproachRemoveDuplicates(arr) {
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            arr[i+1] = arr[j];
            i++;
        }
    }
    return i + 1
}

console.log("length of unique array: ", optimalApproachRemoveDuplicates(arr));
