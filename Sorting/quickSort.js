// pick pivot index, set it its fix position, place smaller ele at right and bigger on left, do the same 

let nums = [8,1,3,2,5,6,7];

function partition(array, s, e) {
    let pivot = array[s];
    let count = 0;

    console.log("pivot: ",pivot);
    
    for (let i = s+1; i < e; i++) {
        if (array[i] < pivot) {
            count++;
        }
    }

    let pivotIndex = s + count;
    [array[pivotIndex], array[s]] = [array[s], array[pivotIndex]];

    console.log("fix pivot at its rigth index", array);
    
    let i = s, j = e;
    while (i < pivotIndex && j > pivotIndex) {
        while ( array[i] < array[pivotIndex]) {
            i++;
        }

        while ( array[j] > array[pivotIndex]) {
            j--;
        }

        if (i < pivotIndex && j > pivotIndex) {
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return pivotIndex;
}

function quickSort(array, start, end) {
    
    if (start>=end) {
        return
    }

    // partition
    let p = partition(array, start, end);

    // left sort
    quickSort(array, start, p - 1);

    // right sort
    quickSort(array, p+1, end);

    return array
}

console.log(quickSort(nums, 0, nums.length - 1));
