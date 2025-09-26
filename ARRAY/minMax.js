let nums = [ 2, 1, 44, 34, 655, -1]

function findMax(nums) {
    let max = nums.reduce(function(pre, curr){
        // return pre < curr ? curr : pre
        if (pre < curr) {
            return curr
        } else {
            return pre
        }
    }, 0)

    return max
}

console.log("result", findMax(nums));

function findMin(nums) {
    let max = nums.reduce(function(pre, curr){
        return pre > curr ? curr : pre
    })

    return max
}

console.log("result", findMin(nums));