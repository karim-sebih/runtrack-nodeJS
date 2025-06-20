// server.js
const http = require('http');
const { handleRoutes } = require('./routes');

// Création du serveur HTTP
const createServer = () => {
    return http.createServer((req, res) => {
        // Configurer les headers CORS pour permettre les requêtes
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        // Gérer les requêtes OPTIONS pour CORS
        if (req.method === 'OPTIONS') {
            res.writeHead(204);
            res.end();
            return;
        }

        // Passer la requête aux routes
        handleRoutes(req, res);
    });
};

// Fonction pour démarrer le serveur
const startServer = (port) => {
    const server = createServer();
    server.listen(port, () => {
        console.log(`Serveur démarré sur http://localhost:${port}`);
    });
};

module.exports = { startServer};