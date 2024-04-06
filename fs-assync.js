const { readFile, writeFile } = require('fs')

console.log('Start')

//asynchronous will need a callback
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result of write test: ${first} AND ${second}`, (err, result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done')
        })
    })
})
console.log('starting next task')