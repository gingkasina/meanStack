var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Teacher My name is Kasina Suksila ');
}).listen(3003);