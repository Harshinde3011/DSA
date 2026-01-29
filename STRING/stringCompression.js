const array = ['a','a','a','b','b','b','c','c','d'];
// op= ['a',3,'b',3,'c',2,'d'];

function stringCompression(array) {
    let oldIndex = 0;
    let i = 0;
    let arr = [];
    while (i < array.length) {
        let j = i + 1;
        
        while (j < array.length && (array[i] == array[j])) {
            j++;
        }

        // store char
        array[oldIndex] = array[i];
        oldIndex++;

        let count = j - i;

        if (count > 1) {
            array[oldIndex] = count;
            oldIndex++;
        }
        i = j;
    }

    return oldIndex;
}

console.log(stringCompression(array));
