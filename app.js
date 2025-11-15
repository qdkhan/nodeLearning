import http from 'http'
import userRequestHandler from './user.js';
import { runtime } from './runtime.js';

const PORT = 3001
// http.createServer(userRequestHandler).listen(PORT, () => {
//     console.log(`Server is Running On PORT: http://localhost:${PORT}`)
//     runtime()
// }) 

http.createServer((req, res) => {
    runtime()
}).listen(PORT, () => {
    console.log(`Server is Running On PORT: http://localhost:${PORT}`)
    runtime()
}) 