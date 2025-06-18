const fs = require('fs');
const path = require('path');

// Lire le contenu du répertoire courant
fs.readdirSync(process.cwd(), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach(dirent => console.log(dirent.name));




