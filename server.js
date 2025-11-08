const http = require('http')

const server = http.createServer((res, req) => {
    res.setHeader('Content-Type', 'html')
    res.write('<html>')
    res.write('<head><title>Server Created</title></head>')
    res.write('<body><h1>Like / Share / Subscribe </h1></body>')
    res.write('</html>')
    res.end()
})

const PORT = 3000

server.listen(PORT, () => {
    consoler.log(`Server is running on Port http://localhost:${PORT}`)
})