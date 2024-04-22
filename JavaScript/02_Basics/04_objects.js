// const tinderUser = new Object()
const tinderUser = {} // Singleton object
// console.log(tinderUser)


tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUSer = {
    email: "Sura@gmail.com",
    FullName: {
        UserFullName: {
            firstName: "Suraj",
            LastName: "Miskin"
        }
    }
}

// console.log(regularUSer.FullName.UserFullName.firstName);


const Obj1 = {
    1: "a",
    2: "b"
}
const Obj2 = {
    3: "c",
    4: "d"
}
// const obj3 = { Obj1, Obj2 }



// const obj3 = Object.assign({}, Obj1, Obj2)


const obj3 = { ...Obj1, ...Obj2 }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
    },
    {
        id: 1,
        email: "1@gmail.com"
    }
]
// console.log(users[0].email);
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
