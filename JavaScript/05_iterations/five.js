const coding = ['js', 'cpp', 'c', 'python', 'ruby']
// coding.forEach(function (item) {
//     console.log(item);
// })



// coding.forEach((val) => {
//     console.log(val);
// })



// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme)



// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "PYTHON",
        languageFile: "py"
    }
]

mycoding.forEach((item) => {
    console.log(item.languageName);
})