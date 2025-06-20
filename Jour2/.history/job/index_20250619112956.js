const { startServer } = require('./server');
startServer(3000);
const { setupRoutes } = require('./routes');
const { setupDatabase } = require('./database');
setupDatabase();
setupRoutes();
