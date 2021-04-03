const http = require('http')
const message = require('./message')

const port = 3000

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'type/plain')
    res.end(message())
})

server.listen( port, () => console.log(`Server listening go port: ${port}`))