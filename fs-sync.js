const { readFileSync, writeFileSync } = require('fs')
console.log('Start')

//you need 2 parameter for read file
//first parameter is the name of the file
//the second parameter is the encoding

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

//You need 2 parameters for write file 
//the first parameter is the path to the file
//the second parameter is the content of the file

//a third optional parameter 'flag' with value 'a' is used to append values to existing file

writeFileSync('./content/result-symc.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})
console.log('Am done with the task')

console.log('Starting the next one')

