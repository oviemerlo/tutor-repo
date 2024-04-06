const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Welcome to Our Home Page')
    }
    if (req.url === '/about'){
        res.end('This is an about page')
    }
    res.end(
       `  <h1>Oops this  page does not exist</h1>
       <p>click back to home page<a href="/">Here</a>`
    )
})

server.listen(9000)