// array in js is resizable 
const arr = Array(5).fill(1); // [1, 1, 1, 1, 1]

const newArr = new Array(1,2,3,"harsh")

newArr.unshift(9)  // add new element at start, use shift to remove it

console.log( newArr.includes(5));

// const myarr = newArr.join()  // gives output as string    9,1,2,3,harsh
 
console.log(newArr);

// slice, splice

console.log("original array :", newArr);

let myn1 = newArr.slice(1,3)
console.log("after slice:", myn1);
console.log("original array :", newArr);

let myn2 = newArr.splice(1,3)
console.log("after splice:", myn2);
console.log("original array :", newArr);


// in splice it include the range means, if we give (1,3) it take 1,2,3 and in slice it takes 1,2, and main diff is splice affects to original array