server.on("request", (req, res) => {
    if (req.url === "/users" && req.method === "GET") {
        getAllUsers(req, res);
    } else if (req.url === "/users" && req.method === "POST") {
        createUser(req, res);
    }
    