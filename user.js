import fs from 'fs'

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Server Created</title></head>')

    if (req.url === '/') {
        res.write(`
            <body>
                <h1>Welcome to Home Page</h1>
                <form action="/form_data" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required><br><br>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required><br><br>

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
    }

    if (req.url.toLowerCase() === '/form_data' && req.method === 'POST') {
        const body = []

        req.on("data", chunk => {
            body.push(chunk)
        })

        req.on("end", () => {
            const fullBody = Buffer.concat(body).toString()
            const params = new URLSearchParams(fullBody)
            const bodyObject = Object.fromEntries(params)

            console.log('Form Data:', bodyObject)

            // ✅ Safely write file and handle errors
            fs.writeFile('UserData.txt', JSON.stringify(bodyObject, null, 2), err => {
                if (err) {
                    console.error('Error writing file:', err)
                    res.statusCode = 500
                    res.write('<h1>Server Error: Unable to save data</h1>')
                    return res.end()
                }

                // ✅ Redirect to home page after success
                res.statusCode = 302
                res.setHeader('Location', '/')
                res.end()
            })
        })
        return
    }

    if (req.url.toLowerCase() === '/contact') {
        res.write(`
            <body>
                <h1>Welcome to Contact Page</h1>
                <table border="1" cellpadding="10">
                    <tr><th>Name</th><th>Email</th><th>Message</th></tr>
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

    // Default route
    res.write(`
        <body>
            <h1>Welcome to the Xipetech</h1>
            <p>This is a default route. Try <a href="/">Home</a> or <a href="/contact">Contact</a>.</p>
        </body>
        </html>
    `)
    res.end()
}

export default userRequestHandler
