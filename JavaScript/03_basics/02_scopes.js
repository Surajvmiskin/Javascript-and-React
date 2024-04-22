// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    let c = 30
}
let array = [1, 2, 3, 4]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element)
}

// console.log(b)
// console.log(c)


// DOM => Document Object Model is used to alter the HTML page using JS

// CLOOSER   The Child function can access the var of the parent var like two can access  username


function one() {
    const username = "Suraj"

    function two() {
        const website = "Youtube"
        // console.log(website);
    }
    // console.log(username);
    two()
}
one()


if (true) {
    const username = "Suraj"
    if (username == "Suraj") {
        // const website = "Youtube"
        // console.log(username + website)
    }
    // console.log(website); Cannot access
}

// console.log(username); Cannot access


// ++++++++++++++++++++++++++++++++++++++++++++  interesting +++++++++++++++++++++

function addOne(num) {
    return num + 1
}

const addTwo = function (num) {
    return num + 2
}
console.log(addOne(5));
console.log(addTwo(5)); 