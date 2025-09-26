let nums = [1,0,2,3,0,0,4,5,0];

// step 1, find non zero elements

function moveZeros(nums) {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            temp.push(nums[i]);
        }
    }

// step insert non zeros at front    
    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i]        
    }

// now add zeros to remaining postions

    for (let i = temp.length; i < nums.length; i++) {
        nums[i] = 0        
    }

    return nums
}

// console.log("final output: ", moveZeros(nums));


// optimal approach

// let nums = [1,0,2,3,0,0,4,5,0];

function optimalApproach(nums) {
    // step 1 find index of zeroth element
    let j = -1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            j = i;
            break;
        }        
    }
    
    // step 2 now shift non zeros and non-zeros
    for (let i = j+1; i < nums.length; i++) {
        console.log("i", i);
        console.log("j index", j );
        
        if (nums[i] != 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
            console.log("nums:", nums);

        }      
    }
    return nums
}

console.log("optimal solution: ", optimalApproach(nums));
