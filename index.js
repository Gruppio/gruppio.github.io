var https = require('https');
var fs = require('fs');
var options = {
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem')
};
var a = https.createServer(options, function (req, response) {
response.writeHead(200, {"Content-Type": "text/html"});
response.write("<html>");
response.write('<body>');
response.write('1515513610');
response.write('</body>');
response.write('</html>');
response.end();
}).listen(443);