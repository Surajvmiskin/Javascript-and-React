// Immediately Invoked Funtion Expressions (IIFE)

// Named IIFE because it has funtion name
(function chai() {
    console.log(`DB Connected`);
})();

// ()() //defination of IIFE
//     // there is some problems because of global scope to avoid that pollution we use IIFE if IIFE is intialized to a funtion than that will be executed first


// we can use arrow funtion to demonstrate the same
((name) => {
    console.log(`DB connected two ${name}`);
})('Suraj');




// always use ; if you are using more than one IIFE