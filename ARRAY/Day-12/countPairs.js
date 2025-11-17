// count pauirs from the array whose left ele is greater than 2 of its left element 
// [50, 25, 10, 30, 9, 7, 2], (50,10), (50,9), (50,7) ...

const nums = [50, 25, 10, 30, 9, 7, 2];

function mergeArray(array, s, e) {
    const mid = Math.floor((s+e)/2);

    console.log(`\n🔹 Merging ranges [${s}, ${mid}] and [${mid+1}, ${e}]`);

    const leftArray = array.slice(s, mid + 1);
    const rightArray = array.slice(mid + 1, e + 1);

    console.log("   Left :", leftArray);
    console.log("   Right:", rightArray);

    let i = 0;
    let j = 0;
    let k = s;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            array[k] = leftArray[i];
            i++;
        } else {
            array[k] = rightArray[j];
            j++;
        }
        k++;
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

    console.log("   ✔ After merge:", array.slice(s, e+1));

    return array;
}

function countPairs(array, s, e) {
    const mid = Math.floor((s+e)/2);
    let right = mid + 1;
    let count = 0;

    console.log(`\n🔍 Counting pairs in ranges [${s}, ${mid}] and [${mid+1}, ${e}]`);

    for (let i = s; i <= mid; i++) {
        while (right <= e && array[i] > 2 * array[right]) {
            console.log(`   👍 Pair found: (${array[i]}, ${array[right]})`);
            right++;   
        }
        count += (right - (mid + 1));
    }

    console.log(`   ➕ Pairs counted in this step → ${count}`);

    return count;
}

function mergeSort(array, s, e) {
    if (s >= e) {
        return 0;
    }

    const mid = Math.floor((s+e)/2);
    console.log(`\n====================\n📌 mergeSort(${s}, ${e}) | mid = ${mid}`);

    let count = 0;

    count += mergeSort(array, s, mid);
    count += mergeSort(array, mid+1, e);

    count += countPairs(array, s, e);

    mergeArray(array, s, e);

    console.log(`📈 Total count till now for range [${s}, ${e}] →`, count);

    return count;
}

console.log("\n\n🚀 Final Answer =", mergeSort(nums, 0, nums.length - 1));