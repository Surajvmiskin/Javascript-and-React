// Date 

let mydate = new Date()

// let myCreatedDate = new Date(2023, 0, 23)

// console.log(myCreatedDate.toLocaleDateString());


let mynewdate = new Date("01-14-2023")
// console.log(mynewdate.toDateString());


let myTimeStamp = Date.now()

// console.log(mynewdate.getTime());
// console.log(Math.ceil(Date.now() / 1000));


let newDate = new Date()
// console.log(newDate.getMonth());

// console.log(`${newDate.getDay()}`)



let printi = newDate.toLocaleDateString('default', {
    weekday: "long",
    day: "numeric"
})

console.log(printi);