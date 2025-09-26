// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

let num1 = [4,9,5];
let num2 = [9,4,9,8,4]

// for sorted array
function insertionOfArray(num1, num2) {
    let i = 0;
    let j = 0;
    let intersection = [];

    while (i < num1.length && j < num2.length) {
        if (i > 0 && num1[i] == num1[i-1]) {
            i ++;
        }

        if (j > 0 && num2[j] == num2[j-1]) {
            j ++
        }

        if (num1[i] == num2[j]) {
            intersection.push(num1[i]);
            i++;
            j++;
        }else if(num1[i] < num2[j]){
            j++;
        }else{
            i++
        }
    }
    
    return intersection
}

console.log("insertionOfArray: ", insertionOfArray(num1, num2));


// for not sorted
var intersection = function(num1, num2) {
    let i = 0;
    let j = 0;
    let nums1 = new Set(num1);
    let result = new Set();

    for(num of num2){
        if(nums1.has(num)){
            result.add(num)
        }
    }

    return Array.from(result)
};

console.log("insertion: ", intersection(num1, num2));
