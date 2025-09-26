// Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other

let s = "supriya";
let t = "aspuiry"

function isAnangram(str1, str2) {
    let newS = s.split('').sort();
    let newT = t.split('').sort(); 
    
    if (newS.length == newT.length) {
        if (JSON.stringify(newS) == JSON.stringify(newT)) {
            return true
        }
    }
    return false
}

const result = isAnangram(s, t);
console.log("result", result);

