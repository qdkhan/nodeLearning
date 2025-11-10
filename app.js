import http from 'http'
import userRequestHandler from './user.js';

const PORT = 3001
http.createServer(userRequestHandler).listen(PORT, () => {
    console.log(`Server is Running On PORT: http://localhost:${PORT}`)
}) 