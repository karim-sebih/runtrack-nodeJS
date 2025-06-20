const fs = require('fs');
const path = require('path'); 
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
// Route to serve data.json
app.get('/data.json', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), (err, data) => {
        if (err) {
            res.status(500).send('Erreur serveur');
            return;
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
}
);
