// O(log (m+n))

const arr1 = [1,3,4,7,10,11];
const arr2 = [2,3,6,15];

function findMedianFromSortedArray(num1, num2) {
    let n1 = num1.length;
    let n2 = num2.length;

    if (n1 > n2) {
        return findMedianFromSortedArray(num2, num1);
    }

    let start = 0;
    let end = n1;
    let left = Math.floor((n1 + n2 + 1) / 2);
    let n = n1 + n2;

    while (start <= end) {
        let mid1 = Math.floor((start + end) / 2);
        let mid2 = left - mid1;
        let l1 = -Infinity;
        let l2 = -Infinity;
        let r1 = Infinity;
        let r2 = Infinity;

        if(mid1 < n1) r1 = num1[mid1];
        if(mid2 < n2) r2 = num2[mid2];
        if(mid1 - 1 >= 0) l1 = num1[mid1 - 1];
        if(mid2 - 1 >= 0) l2 = num2[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if(n % 2 !== 0) return Math.max(l1, l2);
            return ((Math.max(l1,l2) + Math.min(r1, r2))/2);
        }else if (l1 > r2) {
            end = mid1 - 1;
        }else if (l2 > r1) {
            start = mid1 + 1;
        }
    }

    return 0;
}

console.log(findMedianFromSortedArray(arr1, arr2));
