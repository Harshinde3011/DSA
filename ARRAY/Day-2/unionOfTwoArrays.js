let num1 = [1,2,3,4,6];
let num2 = [1,1,2,5,6,7]

// op will be [1,2,3,4,6,7]


var union = function(nums1, nums2) {
    let set = new Set();

    for(let i =0; i< nums1.length; i++){
        set.add(nums1[i]);
    }

    for(let i =0; i< nums2.length; i++){
        set.add(nums2[i]);
    }
    // return Array.from(set) or
    let temp = [];

    for (const num of set) {
        temp.push(num)
    }

    return temp
};


// console.log("intersection", union(num1, num2));

// optimal solution
function optimalApproach(num1,num2) {
    let n1 = num1.length;
    let n2 = num2.length;
    let union = [];
    let i = 0;
    let j = 0;

    while (i<n1 && j<n2) {
        if (i > 0 && num1[i] == num1[i-1]) {
            i++;
        }
        if (j > 0 && num2[j] == num2[j-1]) {
            j++;
        }

        if (num1[i] < num2[j]) {
            union.push(num1[i]);
            i++;
        }else if (num1[i] > num2[j]) {
            union.push(num2[j]);
            j++;
        }else if(num1[i] == num2[j]){
            union.push(num1[i]);
            i++;
            j++;
        }
    }

    while (i< n1) {
        if (i > 0 && num1[i]  != num1[i-1] ) {
            union.push(num1[i]);
            i++
        }
    }

    while (j < n2) {
        if (j > 0 && num2[j]  != num2[j-1] ) {
            union.push(num2[j]);
            j++
        }
    }

    return union
}

console.log("union", optimalApproach(num1, num2));