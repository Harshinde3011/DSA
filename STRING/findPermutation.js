// in s2 ba is present which is permutation of s1 so return true 

let s1 = "ab";
let s2 = "eighyba";

function isEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        } 
    }
    return true
}

function isPresent(s1, s2) {
    if (s1.length > s2.length) return false;

    let count1 = new Array(26).fill(0);
    let count2 = new Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        const index = s1[i]?.charCodeAt(0) - 'a'.charCodeAt(0);
        count1[index]++;
    }

    // adding 1st window [e,i]
    let i = 0;
    let windowSize = s1.length;
    while (i < windowSize && i < s2.length) {
        const index = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[index]++;
        i++;
    }

    const compare = isEqual(count1, count2);
    console.log("count 1: ", count1);
    console.log("count 2: ", count2);
    console.log("1st window compare: ", compare);
    
    if (compare) return true;

    // next windows
    while (i < s2.length) {
        let newIndex = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[newIndex]++;

        // remove old index 
        let oldIndex = i - windowSize;
        let oldIndexChar = s2[oldIndex].charCodeAt(0) - 'a'.charCodeAt(0);
        count2[oldIndexChar]--;

        console.log(`newIndex: ${i}, oldIndex: ${i - windowSize}`);
        console.log("count 1: ", count1);
        console.log("count 2: ", count2);
        
        i++;
        if (isEqual(count1, count2)) return true;
    }
    return false;
}

let result = isPresent(s1, s2);

console.log("result: ", result);

