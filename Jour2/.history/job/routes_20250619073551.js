server.on("request", (req, res) => {
    if (req.url === "/users" && req.method === "GET") {
    getAll§Users(req, res);
    }