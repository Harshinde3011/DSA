// array = [1,1,2,3,3,4,4] find number which occurs onces, while others occurs twice, ans = 2

const array = [1,1,3,3,4,4];

function elementOccursOnce(array) {
    let occursOnce = 0;

    if (array.length % 2 == 0) {
        console.log("lenght even no single element occurs");
        
        return occursOnce;
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i+1]) {
            occursOnce = array[i];
            break;
        } else {
            i++;
        }
    }
        
    return occursOnce;

}

console.log(elementOccursOnce(array));
 