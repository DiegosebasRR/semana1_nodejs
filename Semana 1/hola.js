var http = require('http');

var manejador = function(req, res) {
    console.log('Conexion entrante');
    res.end('Hola Mundo')
};

var servidor = http.createServer(manejador);

servidor.listen(8080)