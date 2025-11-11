const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Olá, Back-End!');

});

servidor.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});