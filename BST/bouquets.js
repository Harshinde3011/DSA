// You are given an integer array bloomDay, an integer m and an integer k.
// You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.
// The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
// Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

const bloomDays = [7,7,7,7,11,12,7,7,13];
const m = 2; /*2 bouquets */
const k = 3; /*(3 flowers)*/

function checkIsBouquetForms(array, mid, bouquets, flowers) {
    let count = 0;
    let bouquetFormed = 0;

    for (const bloomDay of array) {
        if (bloomDay <= mid) {
            count++;

            if (count == flowers) {
                bouquetFormed++;
                count = 0;
            }
        }else{
            count = 0;
        }
    }
    return bouquetFormed >= bouquets;
}

function makingBouquets(array, bouquets, flowers) {
    let start = Math.min(...array);
    let end = Math.max(...array);
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start+end)/2);
        const isBonquetsFormed = checkIsBouquetForms(array, mid, bouquets, flowers);

        console.log(`mid id ${mid}, isBonquets formed: ${isBonquetsFormed}`);
        
        if (isBonquetsFormed == true) {
            ans = mid;
            end = mid - 1
        }else{
            start = mid + 1
        }
    }

    return ans;
}

console.log(makingBouquets(bloomDays, m, k));
