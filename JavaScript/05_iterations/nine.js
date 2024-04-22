// reduce

const myNums = [1, 2, 3]

// const mytotal = myNums.reduce(function (acc, cur_val) {
//     console.log(`acc:${acc} and curr:${cur_val}`);
//     return acc + cur_val
// }, 0)



// Using arrow funtion
// const mytotal = myNums.reduce((acc, cur) => acc + cur, 0)

// console.log(mytotal);


const shoppingcart = [
    {
        itemname: "js course",
        price: 299
    },
    {
        itemname: "python course",
        price: 999
    },
    {
        itemname: "web dev course",
        price: 599
    },
    {
        itemname: "data science course",
        price: 1299
    }
]


const pricetopay = shoppingcart.reduce((acc, item) => { return acc + item.price }, 0)

console.log(pricetopay);