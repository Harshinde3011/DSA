// how many times the array has been rotated
const arr = [40, 50, 60, 70, 10, 20, 30];

function getRotatedCount(nums) {
    let ans = Infinity;
    let pivot = Infinity;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[start] <= nums[end]) {
            ans = Math.min(ans, nums[start]);
            pivot = start;
            break;
        }
        
        if (nums[start] <= nums[mid]) {
            ans = Math.min(ans, nums[start]);
            pivot = start;
            start = mid + 1;
        }else{
            if (nums[mid] < ans) {
                ans = Math.min(ans, nums[mid]);
                pivot = mid;
                end = mid - 1;
            }
        }
    }

    return pivot;
}

console.log(getRotatedCount(arr));
