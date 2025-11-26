// sum of natural numbers 1+2+3+4 = 10

function sumNumbers(i, sum) {
    console.log("Entering function with i:", i, "and sum:", sum);

    if (i < 1) {
        console.log("Base condition reached!");
        console.log("Final sum: ", sum);
        return;
    }

    console.log("Adding", i, "to sum!");
    sum = sum + i;
    i = i - 1;
    console.log("After adding, new i:", i, "new sum:", sum);

    sumNumbers(i, sum);

    console.log("Returning from function with i:", i, "sum:", sum);
}

sumNumbers(4, 0);
