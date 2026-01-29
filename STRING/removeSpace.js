let str = "My name is Harsh";
let temp = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
        str[i] += "@40";
    }else{
        str[i] += str[i];
    }
}

console.log(str);


let s = "abababcabcbca";
let p = "abc";

// const newStr = s.replaceAll(p,"");
// console.log(newStr);

function removeSubstring(s, p) {
    console.log("s: ", s);
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        
    }

}

removeSubstring(s, p);

