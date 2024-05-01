new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promised Consumed")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Promised Resolved");
})

const Promise3 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "chai", email: "example@gmail.com" })
    }, 1000);
})

Promise3.then(function (user) {
    console.log(user);
})


const Promise4 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Suraj", password: "1213" })
        } else {
            reject("Error: Something error")
        }
    }, 1000);
})

Promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
})
.finally(()=> console.log("The promise is either resolved or rejected"))



const Promise5 = new Promise(function(resolve,reject)=>{
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "Suraj", password: "1213" })
        } else {
            reject("Error: Something error")
        }
    }, 1000);
});

// We can use asyc insead of .then()
// example

async function consumePromise5(){
    const response = awiat promiseFive
    console.log(response);
}