const arr = [1,1,2,2,3,4,4,5,5,6,6];

function findeUniqueElement(nums) {
    if (nums.length == 1) {
        return nums[0]
    }

    if ((nums.length)%2 == 0) {
        return false;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if(nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
        
        if (mid%2 !== 0) {
            mid--;
        }

        if (nums[mid] == nums[mid + 1]) {
            start = mid + 2;
        }else{
            end = mid;
        }
    }

    return nums[start]
}

console.log(findeUniqueElement(arr));
