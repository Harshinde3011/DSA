// return true if duplicate found,false if not found

let nums = [1,2,3,4, 1]


// 1st approach
var containsDuplicate = function (nums) {
    let map = new Map()
    console.log("map", map);
    
    for (const n of nums) {
        if (map.has(n)) {

            console.log("map", map)

            return true            
        }
        map.set(n, true)
    }
    return false
}

console.log("result", containsDuplicate(nums));
 

// 2nd approach
// set holds only unique values, use set to store unique values then check lenght of array and set 

let checkDuplicate =  function findDupilcate(nums) {

    let set = new Set(nums)

    let arrayLen = nums.length;
    let setLen = set.length;

    if (arrayLen == setLen) {
        return false
    }
    return true
}

console.log("checkDuplicate", checkDuplicate(nums));


