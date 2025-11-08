import http from "http"
import fs from 'fs'
const PORT = 3000

const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'html')
    res.write('<html>')
    res.write('<head><title>Server Created</title></head>')

    if (req.url === '/') {
        // Home page with a form
        res.write(`
            <body>
                <h1>Welcome to Home Page</h1>
                <form action="/form_data" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter Your Name" required><br><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your Email" required><br><br>

                    <h3>Gender:</h3>
                    <input type="radio" id="male" name="gender" value="Male" required>
                    <label for="male">Male</label><br>

                    <input type="radio" id="female" name="gender" value="Female">
                    <label for="female">Female</label><br><br>

                    <button type="submit">Submit</button>
                </form>
            </body>
        `)
        res.write('</html>')
        return res.end()
    } else if(req.url.toLowerCase() === '/form_data' && req.method === 'POST') {
        fs.writeFileSync('User.txt', 'I am a PHP Developer')
        res.statusCode = 200
        res.setHeader('Location', '/')
        return res.end()
    } else if (req.url.toLowerCase() === '/contact') {
        // Contact page with a table
        res.write(`
            <body>
                <h1>Welcome to Contact Page</h1>
                <table border="1" cellpadding="10">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                    </tr>
                    <tr>
                        <td>Qutbuddin Khan</td>
                        <td>qdkhan@example.com</td>
                        <td>Hello from Node.js!</td>
                    </tr>
                </table>
            </body>
        `)
        res.write('</html>')
        return res.end()
    } 
    else {
        // Default page
        res.write(`
            <body>
                <h1>Welcome to the Xipetech</h1>
                <p>This is a default route. Try <a href="/">Home</a> or <a href="/contact">Contact</a>.</p>
            </body>
        `)
        res.write('</html>')
        return res.end()
    }
    
    res.write('</html>')
    return res.end()
}).listen(3000, () => {
     console.log(`Server is running on Port http://localhost:${PORT}`)
})