// find mid, split array from it, then merger array in sorted way 

let nums = [8,1,3,2,5,6,7];

function merge(array, s, e) {

    console.log("s: ", s);
    console.log("e: ", e);
    
    let mid = Math.floor((s+e)/2);
    
    let len1 = mid - s + 1;
    let len2 = e - mid;

    let leftArray = new Array(len1);
    let rightArray = new Array(len2);
    
    for (let i = 0; i < len1; i++) {
        leftArray[i] = array[s+i];    
    }

    for (let i = 0; i < len2; i++) {
        rightArray[i] = array[mid + 1+ i];
    }

    console.log("leftArray: ", leftArray);
    console.log("rightArray: ", rightArray);
    // merge two arrays
    let i = 0;
    let j = 0;
    let k = s;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            array[k] = leftArray[i];
            i++;
            k++;
        }else{
            array[k] = rightArray[j];
            j++;
            k++
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

    return array;
}

function mergeSort(array, s, e) {
  if (s >= e) {
    console.log(`Base case reached for [${s}, ${e}] →`, array[s]);
    return;
  }

  let mid = Math.floor((s + e) / 2);
  console.log(`Dividing [${s}, ${e}] → mid: ${mid}`);

  mergeSort(array, s, mid);
  mergeSort(array, mid + 1, e);

  console.log(`Merging [${s}, ${mid}] and [${mid+1}, ${e}]`);
  merge(array, s, e);

  console.log(`After merge [${s}, ${e}] →`, array.slice(s, e + 1));
  return array;
}


console.log(mergeSort(nums, 0, nums.length - 1));
