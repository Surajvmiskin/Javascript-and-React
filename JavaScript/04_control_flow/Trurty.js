const useremail = "S@gmail.com"

// if (useremail) {
//     console.log("Got user mail.")
// } else {
//     console.log("Don't have user email");
// }
// TODO:
// Truty and flasy values:

// Flasy Values
// flase, 0, "", -0 , BigInt 0n, null, undefined, NaN

// Truthy values:
// "0" , 'false', " ", [], {}, function(){} --> empty funtion is also
arr = []

if (arr.length == 0) {
    // console.log("Array is empty");
}

const Obj = {}

if (Object.keys(Obj).length == 0) {
    // console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): null undefined
// some time whenever we are handling the cases according to data then we use this ex: Null or is there
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10  //10--> complex function
val1 = null ?? 10 ?? 20
// console.log(val1);


// terniary operator

const teaprice = 100

// teaprice <= 80 ? console.log("less Than 80") : console.log("More than 80");


const arr = [1, 2, 3, 4, 5]
console.log(arr.entries());