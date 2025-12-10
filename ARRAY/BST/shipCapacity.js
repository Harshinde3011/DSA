

function calculateDays(weights, end){
    let daysTaken = 1;
    let load = 0;

    for(const weight of weights){
        if(load + weight > end){
            daysTaken++;
            load = weight;
        }else{
            load = load + weight;
        }
    }

    return daysTaken;
}

var shipWithinDays = function(weights, days) {
    let start = Math.max(...weights);
    let end = weights.reduce((a, b) => a + b, 0);
        let ans = -1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        let daysRequire = calculateDays(weights, mid)

        if(daysRequire <= days){
            ans = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return ans;
};