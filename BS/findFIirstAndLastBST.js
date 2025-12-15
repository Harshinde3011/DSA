const arr = [40, 40, 40, 40, 40, 60, 70];
// TC: O(log n)

function findFirstIndex(arr, start, end, target) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start+end)/2);

    if (arr[mid] == target) {
        let firstIndex = findFirstIndex(arr, start, mid - 1, target);
        return firstIndex !== -1 ? firstIndex : mid;
    }else if(arr[mid] < target){
        return findFirstIndex(arr, mid + 1, end, target)
    }
    else{
        return findFirstIndex(arr, start,mid - 1, target)
    }
}

function findlastIndex(arr, start, end, target) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start+end)/2);

    if (arr[mid] == target) {
        let lastIndex = findlastIndex(arr, mid + 1, end, target);
        return lastIndex !== -1 ? lastIndex : mid;
    }else if(arr[mid] > target){
        return findlastIndex(arr, start, mid - 1, target)
    }
    else{
        return findlastIndex(arr, mid + 1, end, target)
    }
}

function findFirstAndLastIndex(arr, start, end, target) {
    return [
        findFirstIndex(arr, start, end ,target),
        findlastIndex(arr, start, end ,target)
    ]

}


console.log(findFirstAndLastIndex(arr, 0, arr.length - 1, 40));


// alternate solution

function findfirstIndex(nums, start, end,target) {
    if (start > end) {
        return -1;
    }
    let ans = -1;
    
    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[mid] == target) {
            ans = mid;
            end = mid - 1;
        }else  if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
}

function findlastIndex(nums, start, end, target) {
    if (start > end) {
        return -1;
    }
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if (nums[mid] == target) {
            ans = mid;
            start = mid + 1;
        }else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return ans;
}

function findFirstAndLastIndex(nums, target) {
    return [
        findfirstIndex(nums, 0, nums.length - 1, target),
        findlastIndex(nums, 0, nums.length - 1, target)
    ]
}


console.log(findFirstAndLastIndex(arr, 40));
