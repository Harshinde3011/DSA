let data = [10, 4, 40, -1, 20, 30, 99]
let element = 30


// linear search
for (let i = 0; i < data.length - 1; i++) {
    if (data[i] == element) {
        console.log(i);
        break;
    }    
}


// js function
let index = data.indexOf(30)
console.log("index", index);
