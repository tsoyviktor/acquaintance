var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('GIT HUB hello world !!! just by commit auto deploy <h1>OH YE XD</h1>');
}).listen(8080);
