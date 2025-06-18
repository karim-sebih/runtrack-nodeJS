const fs = require('fs')
fs.readdir('../', (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du répertoire:", err);
    return;
  }
  console.log(files);
});