//this code will take less time due to non-blocking 
//to execute this code we have to tyoe in termina the followind code
//node non-blocking.js
const getUser =require('./src/getUser')

getUser(1,(user)=>{console.log(user)})

getUser(2,(user)=>{console.log(user)})

const sum=1+22
console.log(sum)


  