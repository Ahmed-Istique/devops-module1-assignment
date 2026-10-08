const http = require('http');

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>DevOps Module 1 App</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; background-color: #f4f4f9; }
                h1 { color: #2c3e50; }
                p { color: #34495e; font-size: 18px; }
                .status { padding: 10px 20px; background-color: #2ecc71; color: white; border-radius: 5px; display: inline-block; }
            </style>
        </head>
        <body>
            <h1>DevOps Module 1 Application</h1>
            <p>Status: <span class="status">Running Successfully</span></p>
            <p>Environment: Local Workstation</p>
        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
});