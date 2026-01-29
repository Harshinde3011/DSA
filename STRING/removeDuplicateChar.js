const str1 = "abbabcc";  // remove adjecent duplicates 

// 1st bb removed remaining string aabc
// 2nd aa removed remaining ctring bc

function removeDuplicates(str1) {
    const stack = [];

    for (let i = 0; i < str1.length; i++) {
        const element = str1[i];
        
        if (stack.length && (stack[stack.length - 1] === element)) {
            stack.pop(element);
        }else{
            stack.push(element)
        }
    }

    return stack;
}

console.log(removeDuplicates(str1));