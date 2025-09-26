let nums = [1, 2, 3, 4, 5, 6];

// O(k * n) not optimal
let x = 3;

var leftRotate = function(nums, k) {
    for(let i=0; i <= k; i++){
            let temp = nums[0];
            for(let j =1; j< nums.length; j++){
                nums[j - 1] = nums[j];
            }
            nums[nums.length - 1] = temp
        }

        return nums 
};

var rightRotate = function(nums, k) {
    k = k % nums.length; // avoid unnecessary full rotations
    for (let i = 0; i < k; i++) {
        let temp = nums[nums.length - 1];
        for (let j = nums.length - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }
        nums[0] = temp;
    }
    return nums;
};

console.log("rotate", leftRotate(nums, x));
const dummyArray = [1,2,3,4,5,6,7]
// optimal solution
function reverseArray(num,start, end){
    while (start < end) {
        let temp = num[start];
        num[start] = num[end];
        num[end] = temp;

        start ++;
        end --
    }
}
var optimalLeftRotate = function(nums, k) {
    let start = 0;
    let end = k
    reverseArray(nums, start, end)
    console.log(`nums: ${nums}, start: ${start}, end: ${end}`);
    
    start = k+1;
    end = nums.length -1;
    reverseArray(nums, start, end)
    console.log(`nums: ${nums}, start: ${start}, end: ${end}`);

    
    start = 0;
    end = nums.length -1;
    reverseArray(nums, start, end)
    console.log(`nums: ${nums}, start: ${start}, end: ${end}`);


    return nums
};

// console.log(optimalLeftRotate(dummyArray, 3));


var optimalRightRotate = function(nums, k) {   
    k = k%nums.length;
     
    start = 0;
    end = nums.length -1;
    reverseArray(nums, start, end)

    start = 0;
    end = k -1;
    reverseArray(nums, start, end)

    start = k;
    end = nums.length -1;
    reverseArray(nums, start, end)

    function reverseArray(nums, start, end){
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;

        start ++;
        end --
    }
  }
    return nums
};
