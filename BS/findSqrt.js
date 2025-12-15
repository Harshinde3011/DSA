const n = 28;

function findSqrtOfGivenNumber(n) {
    let ans = 1;   // 1 is smallest possible answer 
    let start = 1;
    let end = n;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);

        if ((mid * mid) <= n) {
            ans = mid;
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return ans;
}

console.log(findSqrtOfGivenNumber(n));
