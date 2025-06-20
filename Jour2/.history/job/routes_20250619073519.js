server.on("request", (req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Bienvenue sur le serveur de gestion des tâches !");
    }