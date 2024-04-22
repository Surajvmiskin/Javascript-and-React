const marvel = ['thor', 'Ironman', 'spiderman']

const dc = ['superman', 'flash', 'batman']
// marvel.push(dc)
// console.log(marvel);

// marvel_arr = marvel.concat(dc);
// console.log(marvel_arr);

// Spread Method
const all = [...marvel, ...dc]
// console.log(all);

const another_arr = [1, 2, [3, 4, 5, [6, 7, 8, [10, 11, 12]]]]

const real_arr = another_arr.flat(3)

// console.log(real_arr);

// console.log(Array.isArray("hitesh"))


// console.log(Array.from("Suraj")) 


// console.log(Array.from())  //Interesting
let score1 = 50;
let score2 = 60;
let score3 = 70;

console.log(Array.of(score1, score2, score3))



