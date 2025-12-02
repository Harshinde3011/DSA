const arr = [10, 20, 30, 40, 50, 60, 70];
// TC: O(log n)
function binarySearch(arr, start, end, target) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start+end)/2);
    console.log(`start is ${start} end is ${end} and mid is ${arr[mid]}`);
    
    if (arr[mid] == target) {
        return arr[mid];
    }else if (target < arr[mid]) {
        console.log(`mid ${arr[mid]} is greater than ${target}`);
        return binarySearch(arr, start, mid - 1, target);
    }else if(target > arr[mid]){
        
        console.log(`mid ${arr[mid]} is less than ${target}`);
        return binarySearch(arr, mid + 1, end, target)
    }
}

console.log(binarySearch(arr, 0, arr.length - 1, 50));
