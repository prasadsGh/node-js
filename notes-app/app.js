const fs = require('fs')

//fs should be loaded using the require function
fs.writeFileSync('notes.txt', 'this file was created by nodejs!')
fs.writeFileSync('notes.txt','my name is prasad')

//fs can be replaced with anything just it should be replaced anywhere 
// const filsystem= require('filsystem')
// filsystem.writeFileSync('notessssss.txt','this is new file')
//only one file can be created 
