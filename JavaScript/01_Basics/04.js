// Primitive

// 7 Types : String , Number, Boolean, null, undefined, Symbol, Bigint


// Non Primitive ( Reference Type )

// example : Array, Object, Functions

const isLoggedIn = false


const id = Symbol('123')
const anotherID = '123'

console.log(id === anotherID);

const BigNumber = 12354351354613213524651n
console.log(BigNumber);

// Array
const heros = ["shaktiman", "nagraj"]


// Object

let myobj = {
    name: "suraj",
    age: 22,
}

console.log(myobj);

const myfuntion = function () {
    console.log("Hello world")
}

console.log(typeof myfuntion);



// +++++++++++++++++++++++++++++++++++++++++++

// Stack,Heap

// Stack => Primitive,
// Heap => Non-Premitive



let myYoutubeName = "MyYoutubeChannel"


let anothername = myYoutubeName
anothername = 'chaicode'


console.log(anothername);
console.log(myYoutubeName);


// HEAP (Object)

let userone = {
    email: "Test@gmail.com",
    upi: "abc@ybl"
}

let usertwo = userone


usertwo.email = "Test2@gmail.com"

console.log(userone);
console.log(usertwo);