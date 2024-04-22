// Array
// In JS the array is resizable
const myArr = [0, 1, 2, 3, 5]
// console.log(myArr);


let myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2[0]);

// Array Methods

myArr.push(6)
// console.log(myArr);

// myArr.unshift(2) //Add the number at starting at the arry

// myArr.shift() Removes the first element of the array like pop

// myArr.includes(9) returns True or False if the Element is present in the array

// myArr.indexOf(6) Finds the Element and return the index of the element given

const newArr = myArr.join() // Makes a string

// console.log(newArr); 
// console.log('A ', myArr);
const myn1 = myArr.slice(1, 3)
// console.log('B ', myArr);
// console.log(myn1);

const myn2 = myArr.splice(1, 3)

// console.log('C ', myArr);
// console.log(myn2)