const http = require('http');
const { setupRoutes } = require('./routes');
const { setupDatabase } = require('./database');

  const server = http.createServer((req, res) => {
    setupRoutes(req, res);
  });

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
