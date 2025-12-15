// Insertion sort works the same way you arrange playing cards in your hand
// You pick one card at a time and insert it in the correct position among the already sorted cards.

const nums = [13, 46, 24, 52, 20, 9];

for (let i = 1; i < nums.length; i++) {
    let key = nums[i];          // element to insert
    let j = i - 1;

    // Move elements that are greater than key to one position ahead
    while (j >= 0 && nums[j] > key) {
        nums[j + 1] = nums[j];
        j--;
    }

    nums[j + 1] = key;          // place the key in its correct position
    console.log(`After pass ${i}:`, nums);
}
 
console.log("Final sorted array:", nums);
   