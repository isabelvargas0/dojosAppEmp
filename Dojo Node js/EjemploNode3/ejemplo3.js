var http = require("http");
var modulo = require("./ejemploModulo");
var suma = modulo.suma(5,6);

http.createServer(function (request,response){
	console.log("Servidor iniciado");
	response.write("Suma: "+suma);
	response.end();
}).listen(8888);