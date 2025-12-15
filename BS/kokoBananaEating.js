// Koko loves to eat bananas. There are N piles of bananas, where piles[i] represents the number of bananas in the i-th pile. Koko eats bananas at a constant speed of K bananas per hour.
// During each hour:
// She chooses one pile and eats K bananas from it.
// If the pile has fewer than K bananas, she eats all of them and waits for the next hour.
// She cannot eat from multiple piles in the same hour.
// She must finish all bananas within H hours.
// Find the minimum integer speed K (bananas per hour) that allows Koko to finish all the bananas within H hours.

const piles = [30,11,23,4,20]
const H = 8

function hoursNeededDebug(piles, speed) {
  let hrs = 0;
  for (const pile of piles) {
    hrs += Math.ceil(pile / speed);
  }
  return hrs;
}

function minEatingSpeedDebug(piles, H) {
  let start = 1;
  let end = Math.max(...piles);
  let ans = end;

  console.log(`start=${start}, end=${end}`);
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const req = hoursNeededDebug(piles, mid);
    console.log(`mid=${mid}, requiredHours=${req}, ans=${ans}`);

    if (req <= H) {
      ans = mid;
      console.log(`  mid ${mid} works -> update ans=${ans} and end=${mid - 1}`);
      end = mid - 1;
    } else {
      console.log(`  mid ${mid} too slow -> start=${mid + 1}`);
      start = mid + 1;
    }
  }

  console.log(`final ans=${ans}`);
  return ans;
}


console.log(minEatingSpeedDebug(piles, H));

