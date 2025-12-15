const arr = [40, 50, 60, 70, 10, 20, 30];
const target = 10;

function searchInRotatedArray(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let step = 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        console.log(`\nStep ${step++}:`);
        console.log(`start = ${start}, end = ${end}, mid = ${mid}`);
        console.log(`nums[start] = ${nums[start]}, nums[mid] = ${nums[mid]}, nums[end] = ${nums[end]}`);

        if (nums[mid] == target) {
            console.log(`🎯 Found target ${target} at index ${mid}`);
            return mid;
        }

        // Check which part is sorted
        if (nums[start] <= nums[mid]) {
            console.log(`Left part is sorted`);

            if (nums[start] <= target && target <= nums[mid]) {
                console.log(`Target is in the left part → Move end to mid-1`);
                end = mid - 1;
            } else {
                console.log(`Target is NOT in the left part → Move start to mid+1`);
                start = mid + 1;
            }
        } else {
            console.log(`Right part is sorted`);

            if (nums[mid] <= target && target <= nums[end]) {
                console.log(`Target is in the right part → Move start to mid+1`);
                start = mid + 1;
            } else {
                console.log(`Target is NOT in the right part → Move end to mid-1`);
                end = mid - 1;
            }
        }
    }

    console.log(`❌ Target ${target} not found`);
    return -1;
}

console.log(`\nResult Index:`, searchInRotatedArray(arr, target));
