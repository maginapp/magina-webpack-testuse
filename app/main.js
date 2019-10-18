//main.js 

import './Greeter.css';

const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());


var a = [1,2,3,4]

a.map(item => console.log(item))

// var m = new Map([['a', 2], ['f', 3]])

// a.reduce((pre, item) => console.log(item))

/// var c = [...m]

// console.log(c)

// new Promise(function() {
//   setTimeout(item => {
//     console.log('setTimeout')
//   }, 1000)
//   console.log('end')
// })


// var [aa, bb] = [1, 2]

// console.log(aa + bb)