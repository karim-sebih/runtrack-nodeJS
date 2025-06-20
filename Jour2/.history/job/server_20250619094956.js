const http = require('http');
const { setupRoutes } = require('./routes');
const { setupDatabase } = require('./database');

function startServer(port) {