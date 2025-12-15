// when function call itself, until it a speacial condition met
let n = 5;
function writeName(i, n) {
    if (i > n) {
        return 0;
    }
    writeName(i+1, n);
    console.log("i: ", i);
}
writeName(0, n)

function writeCount(i, n) {
    if (i > n) {
        return 0;
    }
    console.log("i: ", i);
    writeName(i+1, n);
}
writeCount(0, n)