// const arr = [10, 20, 30, 40, 50, 60, 70] , x=35; here we have to find smallest index such that arr[index] >= x

const arr = [10, 20, 30, 40, 50, 60, 70];
let x = 35;

function lowerBound(nums, target, n) {
    let start = 0;
    let end = n;
    let ans = n;
    
    
    while (start <= end) {
        console.log("Hi i reached in while loop");
        let mid = Math.floor((start+end)/2);
        console.log("mid: ", mid);
        
        if (nums[mid] >= target) {
            console.log("mid is greater than target ans: ", nums[mid]);
            ans = mid;

            // for find more smaller index on left
            end = mid - 1;
        }else{
            console.log("mid is less than target ans: ", nums[mid]);
            // look for 
            start = mid + 1;
        }
    }
    console.log(`start: ${start}, end : ${end} out from the loop`);

    return ans;
}

console.log(lowerBound(arr, 35, arr.length - 1));
