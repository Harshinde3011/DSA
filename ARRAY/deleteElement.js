let data = [10,20,30,40,50,60,70]
let position = 2 

console.log("length", data.length);

for (let i = 0; i < data.length - 1; i++) {
    if (i >= position) {
        data[i] = data[i+1];
    }    
}

data.length = data.length - 1

console.log("result", data);
