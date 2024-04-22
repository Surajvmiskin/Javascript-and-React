// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

function sayMyname() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyname => Giving reference
// () => Execute
// sayMyname()

// function AddTwoNumbers(Num1, Num2) {
//     console.log(Num1 + Num2);
// }
// AddTwoNumbers(3, null)
function AddTwoNumbers(Num1, Num2) {
    return Num1 + Num2
}
const result = AddTwoNumbers(1, 2);
// console.log("Results", result);


function LogginUserMessage(username) {
    if (!username) {
        return `Please Enter the Username`
    }
    return `${username} Just Logged In`
}
// console.log(LogginUserMessage("Suraj"));
// console.log(LogginUserMessage());// => its undefined

// When we dont know how many paraments/ arguments will be passed so in that case:

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(100, 200, 300, 400));// val1 = 100, val2 = 200, num = [300,400]


const user = {
    username: "Suraj",
    prices: 199
}

function handleObject(anobject) {
    console.log(`${anobject.username} is the name and ${anobject.price}`);
}
// handleObject(user)


// handleObject({
//     username: 'Sam',
//     price: 299
// })

const myNewArr = [200, 400, 100, 600]

function returnSecondVal(getArr) {
    return getArr[0]
}

console.log(returnSecondVal(myNewArr));