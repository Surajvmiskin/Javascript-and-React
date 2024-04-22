// for of

// ["", "", ""]
// [{},{},{}]
// myarr = [1, 2, 3, 4, 5, 6]
// for (const num of myarr) {
//     console.log(num);
// }


// const greetings = "Hello World!"

// for (const great of greetings) {
//     console.log(`Each char in ${great}`);
// }


// Maps remembers the inputed(maintains the order) value does not contain duplicate values

const map = new Map()
map.set("IN", "India")
map.set("UK", "United Kingdom")

// for (const [key, value] of map) {
//     console.log(key, ":=", value);

// }


const myobj = {
    "game1": "NFS",
    "game2": "Spiderman"
}

// for (const [key,value] of object) {
//     console.log(key, ":=", value);
// }    Does not work in objects


const myobject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    py: "Python"
}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}