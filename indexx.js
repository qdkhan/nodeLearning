import http from "http"
import fs from 'fs'
const PORT = 3000

http.createServer(function (req, res) {

    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'html')
    res.write('<html>')
    res.write('<head><title>Server Created</title></head>')
    res.write('<body>')
    res.write(`
                <h1>Welcome to the Xipetech</h1>
                <p>This is a default route. Try <a href="/">Home</a> or <a href="/men">Men</a> or <a href="/women">Women</a> or <a href="/kids">Kids</a> or <a href="/cart">Cart</a>.</p>
        `)

    if (req.url === '/') {
        // Home page with a form
        res.write(`
                <h1>Welcome to the Home page</h1>
        `)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/men') {
        res.write(`
            <h1>Welcome to Men</h1>
        `)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/women') {
        res.write(`
            <h1>Welcome to Women</h1>
        `)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/kids') {
        res.write(`<body>
            <h1>Welcome to Kids</h1>
        `)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === '/cart') {
        res.write(`<body>
            <h1>Welcome to Cart</h1>
        </body>`)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    } else {
        // Default page
        res.write(`<p>This is a invalid route. </p>`)
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    res.write('</html>')
    return res.end()
}).listen(3000, () => {
    console.log(`Server is running on Port http://localhost:${PORT}`)
})