let data = [1,2,3,4,5]
let data1 = [6,7,8,9,10]
let mergedArray = []

for (let i = 0; i < data.length; i++) {
    // mergedArray.push(data[i]);
    mergedArray[i] = data[i]
}

for (let i = 0; i < data1.length; i++) {
    mergedArray[data.length + i] = data1[i]  
}

console.log("mergedArray", mergedArray);


// using js function 
let combinedArray = [...data, ...data1]
console.log("combinedArray", combinedArray);


// using while loop
let array1 = [1, 3, 5, 7]
let array2 = [2, 4, 6, 8, 9, 10]
let array3 = []

let a1 = 0;
let a2 = 0;
let a3 = 0;

while (a1 < array1.length && a2 < array2.length) {
    if (array1[a1] < array2[a2]) {
        array3[a3] = array1[a1];
        a3++;
        a1++;
    } else {
       array3[a3] = array2[a2];
       a3++;
       a2++ 
    }
}

while(a2 < array2.length){
    array3[a3] = array2[a2];
    a3++;
    a2++
}
console.log("array3", array3);


