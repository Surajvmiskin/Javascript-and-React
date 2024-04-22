// singleton

// object literal
// Object.create()

const mySym = Symbol("key1");


const JSuser = {
    name: "Suraj",
    age: 21,
    location: "Suraj",
    email: "Suraj@google.com",
    [mySym]: "Mykey1" //Use square brackets for using symbols in objects
}

// console.log(JSuser.age)
// console.log(JSuser["age"])
// console.log(typeof JSuser[mySym]);
// Object.freeze(JSuser)
JSuser.email = "test@gmail.com"

// console.log(JSuser);

// Fuctions are same as variables in JS
JSuser.greeting = function () {
    console.log("Hello Js user")
}



JSuser.greetingTwo = function () {
    console.log(`Hello Js user ${this.name}`)
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

