console.log("in this code we are going to take care of string laterals in javascript");

let a= "harry";
console.log(a)
console.log(a[0])

console.log(a.length) // gives the array length

let realname = "harry";
let friend = "shivam";

//typical way
console.log("his name is " + realname + " and his friend name is " + friend);

// strings lateral way
console.log(`his name is ${realname} and his friend name is ${friend}`)

console.log(friend.toUpperCase())
console.log(friend.toLowerCase())

console.log(friend.slice(2,3))
console.log(friend.replace("sh", "chii"))

console.log(friend.concat(realname, "subodh"))


