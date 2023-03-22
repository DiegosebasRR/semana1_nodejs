var http = require('http'),
fs = require('fs');

var html = fs.readFileSync('./plantillas/inicio.html');

http.createServer(function(req, res){
    fs.readFile('./plantillas/inicio.html', function(error,html){
        res.write(html);
        res.end();
    })
}).listen(3000);
