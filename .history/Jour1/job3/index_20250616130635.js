const fs = require('fs');

fs.readFile('./Jour1/job3/index.js', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Contenu du fichier Jour1/job3/index.js : ', data);
});