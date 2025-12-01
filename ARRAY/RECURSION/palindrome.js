const array = [1,2,3,2,1];

function checkPalindrome(nums, s, n) {
    if (s >= Math.floor(n/2)) {
        return true
    }

    if (nums[s] !== nums[n - 1 - s]) {
        return false
    }
    return checkPalindrome(nums, s + 1, n)
}

console.log(checkPalindrome(array, 0, array.length));
