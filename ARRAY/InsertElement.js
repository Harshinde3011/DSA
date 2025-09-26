let arr = [10,20,40,50,60,70]
let position = 2
let insertEle = 30

console.log(arr);

// approach, shift one element forward until, it get position of inserting element  

for (let i=arr.length-1; i>=0;i--) {
    if (i >= position) {
        arr[i+1] = arr[i]; 
        if (i == position) {
            arr[i] = insertEle
        }
    }
}
console.log(arr);

// Using default JS function

let arr1 = [10,20,40,50,60,70]

arr1.splice(2, 0, 30)
// 2 = position
// 0 = don't delete any element
// 30 = insert element
console.log(arr1);


const arr2 = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // Replace 2 elements starting at index 1 with 'a' and 'b'
console.log(arr2);  // Output: [1, 'a', 'b', 4]




