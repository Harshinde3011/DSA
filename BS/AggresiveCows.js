// Given an array of length ‘N’, where each element denotes the position of a stall. Now you have ‘N’ stalls and an integer ‘K’ which denotes the number of cows that are aggressive. To prevent the cows from hurting each other, you need to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. Return the largest minimum distance.

const stalls = [1, 2, 8, 4, 9];
const cows = 4;

function canCowsGetPlaced(possibleStalls, dist, cows) {

    // Place the first cow at the first stall
    let lastCow = possibleStalls[0];
    let countCowsPlaced = 1;

    // Try placing remaining cows
    for (let i = 1; i < possibleStalls.length; i++) {

        // If current stall is at least 'dist' away from last placed cow
        if (possibleStalls[i] - lastCow >= dist) {
            countCowsPlaced++;          // place cow
            lastCow = possibleStalls[i]; // update last placed cow position
        }
    }

    // If we could place required number of cows → return true
    return countCowsPlaced >= cows;
}

function getMinandMaxDist(stalls, cows) {

    // Step 1: Sort stalls for valid placement order
    let possibleStalls = stalls.sort((a, b) => a - b);

    // Minimum possible distance = smallest stall position
    // Maximum possible distance = farthest stall position
    let start = Math.min(...possibleStalls);
    let end = Math.max(...possibleStalls);

    let ans = -1; // store best (maximum minimum) distance

    // Binary search on the answer (distance)
    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        // Check if cows can be placed with distance 'mid'
        let isCowsPlaced = canCowsGetPlaced(possibleStalls, mid, cows);

        if (isCowsPlaced) {
            // If placement is possible, try increasing distance
            ans = mid;
            start = mid + 1; // search in right half for larger distance
        } else {
            // If not possible, try smaller distance
            end = mid - 1;
        }
    }

    return ans; // best possible distance
}

console.log(getMinandMaxDist(stalls, cows));

