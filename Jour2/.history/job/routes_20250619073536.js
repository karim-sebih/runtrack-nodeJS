server.on("request", (req, res) => {
    if (req.url === "/users" && req.method === "GET") {
        // Simuler une réponse pour la route /users
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify([{ id: 1, name: "John Doe" }]));
    }