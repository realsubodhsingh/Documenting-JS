console.log("in this lecture we are going to do array operations")

let arr=[1,2,3,4,5]
console.log(arr)
// the below two lines shows that array is mutable in nature unlike strings
arr[0]=455;
console.log(arr)
console.log(arr.length)
console.log(arr[0])

console.log(arr.toString); //converts the above array into string
console.log(arr.join("and")) // jaha jaha comma hoga vaha add aajayega

console.log(arr.pop())
console.log(arr.push("subodh"))
console.log(arr)

// loops tutorial
let a = [1,3,434,5,6,88]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

// performing the for each function looop in the array
a.forEach((value,index,arr)=>{
console.log(value, index, arr)
    }
)
