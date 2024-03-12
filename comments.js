// Create web server
// Create a web server that will respond to a request with a file
// The server should listen on port 8080
// The file should be called index.html
// The file should contain the following html:
// <html>
// <body>
// <h1>Hello, World!</h1>
// </body>
// </html>
// The server should respond to a request with the file in the following way:
// - Respond with a 200 status code
// - Use the fs.createReadStream() method to stream the file to the response
// - Pipe the read stream to the response object
// - Don't forget to set the Content-Type header to text/html
// - Don't forget to end the response
// The server should respond to all requests with the same file

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
});

server.listen(8080);