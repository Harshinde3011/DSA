nums = [8, 8, 7, 6, 5];

function largest(arr) {
    // code here
    let largestElement = arr[0];
    
    for(let i=1; i < arr.length; i++){
        if(arr[i] > largestElement){
            largestElement = arr[i]
        }
    }
    
    return largestElement
}

console.log(largest(nums));
