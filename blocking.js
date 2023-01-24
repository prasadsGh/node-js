const getUserSync = require('.src/getUserSync')

const userOne =getUserSync(1)
console.log(userOne)

const userTwo =getUserSync(2)
console.log(userTwo)

const sum= 2+4
console.log(sum)
//this code takes more time due to blocking 
//to run this code go to termnial and in the pwd 
//type-->node blocking.js