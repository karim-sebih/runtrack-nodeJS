// const fs = require('fs');
const path = require('path');

// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.error("Erreur lors de la lecture du répertoire:", err);
//         return;
//     }
const files = __filename

    const fname = path.basename(files);
    const fext = path.extname(files);
    const fparent = path.dirname(files);

    console.log("Nom du fichier : " + fname)
    console.log("Extension du fichier : " + fext)
    console.log("Répertoire parent du fichier : " + fparent)
// });