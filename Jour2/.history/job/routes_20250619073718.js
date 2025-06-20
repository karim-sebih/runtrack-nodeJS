server.on("request", (req, res) => {
    if (req.url === "/users" && req.method === "GET") {
        getAllUsers(req, res);
    } else if (req.url === "/users" && req.method === "POST") {
        createUser(req, res);
    } else if (req.url.startsWith("/users/") && req.method === "PUT") {
        updateUser(req, res);
    } else if (req.url.startsWith("/users/") && req.method === "DELETE") {
        deleteUser(req, res);
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" })
    }
});