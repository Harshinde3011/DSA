// const coding = ["js", "cpp", "python", "pearl"]

// const values = coding.forEach( (lang) => {
//     console.log(lang);
// } )

// console.log(values);  // return undefined, cause foreach doesnt return anything


const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.filter( (num) => num > 5 )

console.log(newNum);  // op = [ 6, 7, 8, 9, 10 ]


// chaining

const array = [1,2,3,4,5,6,7,8,9]

const ModifiedArray = array.map( (num) =>  num + 10).filter( (num) => num > 15 ).map( (num) => num * 10 )

console.log(ModifiedArray);

 
// reduce

const array1 = [1, 2, 3, 4, 5]
 
const initialValue = 0

const NewArray1 = array1.reduce( 
    (accumulator, currentValue) => {
        return accumulator + currentValue
    },  
    initialValue 
)
//initialValue hi accumulator la jate i.e "0" ani currentValue "1" it returns accu + curr = 1 , hyanchi sum ji "1" yete ti value accumulator madhe jate 
console.log(NewArray1);

