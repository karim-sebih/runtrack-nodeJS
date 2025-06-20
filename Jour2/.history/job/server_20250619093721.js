setupRoutes();

function startServer(port) {
    const http = require('http');
    const fs = require('fs');
    const path = require('path');

    const server = http.createServer((req, res) => {
        if (req.url === '/' || req.url === '/data.json') {
            fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Erreur serveur');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(data);
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page non trouvée');
        }
    });

    server.listen(port, () => {
        console.log(`Serveur démarré sur http://localhost:${port}`);
    });
}