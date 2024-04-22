// for 


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is Best number");
//     }
//     console.log(element);
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`Inner Loop ${i} and inner loop value ${j}`);
//         console.log(i + '*' + j + '=' + i * j);
//     }

// }

let myarr = ["Flash", "Superman", "Superman"]
// console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);

}

// Break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is:${index}`);
}