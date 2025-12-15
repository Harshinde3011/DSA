// find min from below roated array, ans is 10
const arr = [40, 50, 60, 70, 10, 20, 30];

function findMinFromArray(nums) {
    let ans = Infinity;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[start] <= nums[end]) {
            ans = Math.min(ans, nums[start]);
            break;
        }
        
        if (nums[start] <= nums[mid]) {
            ans = Math.min(ans, nums[start]);
            start = mid + 1;
        }else{
            if (nums[mid] < ans) {
                ans = Math.min(ans, nums[mid]);
                end = mid - 1;
            }
        }
    }

    return ans;
}

console.log(findMinFromArray(arr));
