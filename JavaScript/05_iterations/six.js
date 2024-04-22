const coding = ['js', 'python', 'cpp', 'c', 'ruby']

// const all_items = coding.forEach((items) => {
//     return items
// })

// console.log(all_items); This will not return


const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums = mynums.filter((num) => {
//     if (num > 5) {
//         return num
//     }
// })
// console.log(newnums);




const newNums = []


mynums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(newNums);