// in firstProblem there will be fixed positive and negative elements, nums = [3,1,-2,-5,2,-4, 5, 8,7], op= [3,-2,1,-5,2,-4,5,8,7]

const nums = [3,1,-2,-5,2,-4, -5,8,7]

function arrangeElementWithDiffCounts(array) {
    let positiveArray = []
    let negativeArray = []
    let positiveIndex = 0;
    let negativeIndex = 0;
    let i = 0;
    for (const num of array) {
        if (num > 0) {
           positiveArray.push(num) 
        }
        if (num < 0) {
            negativeArray.push(num)
        }
    }

    while ((positiveIndex < positiveArray.length) && (negativeIndex < negativeArray.length)) {
        if (i%2 == 0) {
            array[i] = positiveArray[positiveIndex];
            positiveIndex += 1;
        }
        if(i%2 !== 0){
            array[i] = negativeArray[negativeIndex];
            negativeIndex += 1;
        }

        i++;
    }

    while (positiveIndex < positiveArray.length) {
        array[i++] = positiveArray[positiveIndex++];
    }

    // place remaining negatives
    while (negativeIndex < negativeArray.length) {
        array[i++] = negativeArray[negativeIndex++];
    }

    return array;
}

console.log(arrangeElementWithDiffCounts(nums));
