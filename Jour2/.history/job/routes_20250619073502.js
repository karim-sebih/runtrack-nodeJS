server.on("request", (req, res) => {
    if (req.method === 'GET' && req.url === '/api/jobs') {
        // Simuler une réponse pour la route GET /api/jobs
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Liste des jobs" }));
    }