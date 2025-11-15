// array = [3,2,5,4,1], possible inversions are (3,2), (3,1), (2,1), (5,4), (5,1), (4,1)
// An inversion is a pair (i, j) such that i < j and array[i] > array[j]
// using merge sort logic suppose we have an array [ 3,2,5,4,1 ]
// 1stleftSort = [3,2,5], 2stleftSort = [3,2] [5], 1stleftSort = [3] ,[2] ,[5], so we have to count array[i] > array[j], so 3 is > 2 count 1
// afterSorting = [2,3] [5], no any inversion we get 
// afterSorting = [2,3,5]
// 1stRightSort = [4] [1], 4 > 1, now count becomes 2
// afterRightSorting = [1,4]
// now leftArray = [2,3,5] rightArray = [1,4]
// now compare 2 and 1, after that all ele from left are gt 1 so count 2 + 3, .............................step I
// now compare (3, 4) then (5,4) which is last pair, so we get total 6 inversion pairs 

const nums =  [ 3,2,5,4,1 ]

function merge(array, s, e) {
    let mid = Math.floor((s+e)/2);
    let leftArray = array.slice(s, mid+1);
    let rightArray = array.slice(mid+1, e+1);

    console.log("leftArray: ", leftArray);
    console.log("rightArray: ", rightArray);
    
    let i = 0;
    let j = 0;
    let k = s;
    let count = 0;

    while (i < leftArray.length && j < rightArray.length) {
        console.log("condition: ", leftArray[i] > rightArray[j]);
        if (leftArray[i] > rightArray[j]) {
            array[k] = rightArray[j];
            j++;
            k++;
            count += leftArray.length - i  // from I step 
        }else{
            array[k] = leftArray[i];
            k++;
            i++;
        }
    }

    while (i < leftArray.length) {
        array[k] = leftArray[i];
        i++;
        k++;
    }

    while (j < rightArray.length) {
        array[k] = rightArray[j];
        j++;
        k++;
    }

    return count;
}

function mergeSort(array, s, e) {
    if (s>=e) {
        return 0
    }

    let mid = Math.floor((s+e)/2);

    // left Array 
    let leftCount = mergeSort(array, s, mid);

    // right Array
    let rightCount = mergeSort(array, mid+1, e);

    let count = merge(array, s, e);

    return count + leftCount + rightCount;
}

console.log(mergeSort(nums, 0, nums.length));
