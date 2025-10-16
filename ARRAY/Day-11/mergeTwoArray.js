// const arr1 = [1, 3, 5, 7];
// const arr2 = [2, 4, 6, 8];

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

function mergeArray(num1, nums2) {
    let left = num1.length - 1;
    let right = 0;
    while (left >= 0 && right < nums2.length) {
        if (num1[left] > nums2[right]) {
          [num1[left], nums2[right]] = [nums2[right], num1[left]];
        }else{
            break;
        }
        num1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);
    }

    return {
        1 : num1,
        2 : nums2
    }
}

console.log(mergeArray(arr1, arr2 ));   