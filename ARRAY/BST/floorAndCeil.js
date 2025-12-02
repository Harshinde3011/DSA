// arr = [1,3,5,7,11,13,17,20], target = 16; floor = 13, ceil = 17
// for this problem use lower bound

const arr = [1,3,5,7,11,13,17,20];
let target = 16;

function findCeilIndex(nums, start, end,target) {
    if (start > end) {
        return -1;
    }
    let ans = -1;
    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[mid] >= target) {
            ans = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return ans;
}

function findFloorIndex(nums, start, end, target) {
    if (start > end) {
        return -1;
    }
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[mid] <= target) {
            ans = mid;
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return ans;
}

function findCeilAndFloor(nums, target) {
    return [
        findCeilIndex(nums, 0, nums.length - 1, target),
        findFloorIndex(nums, 0, nums.length - 1, target)
    ]
}

console.log(findCeilAndFloor(arr, target));
