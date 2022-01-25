// http

const http = require ('http');
const port = 5000;

const server = http.createServer((req, res) => {
  res.end("Esta es la respuesta ok....🚀🚀.");
});

server.listen(port, () => console.log('Funcionando 😎')
);
