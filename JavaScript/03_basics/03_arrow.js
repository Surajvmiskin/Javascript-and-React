// current context
// This keyword is used to refer the current context// context means values what all values do the object holds called as context of values


const user = {
    username: "Suraj",
    price: 199,

    welcomeMessage: function () {
        console.log(`${this.username},Welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()

// user.username = "Sam"
// user.welcomeMessage()

// console.log(this) //if you run only this there is no context so this will refer to empty object

function chai() {
    let username = "Suraj"
    // console.log(this.username); // This will not work this will wok in obj only
}
// chai()
// const newchai = () => {
//     let username = "Suraj"
//     console.log(this)
// }
// // newchai()



// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// +++++++++++++++++++Impicit return+++++++++++
// const addTwo = (num1, num2) => num1 + num2


// If u use curly braces then u should write return if u use parentisis no need to write return
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(5, 2))


// to return object
const addTwo = () => ({ username: "Suraj" })
console.log(addTwo())

const myArr = [2, 1, 5, 3, 5]

// myArr.forEach(function () => {}) It is for looops