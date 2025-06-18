const fs = require('fs').promises;

async function readFileAsync() {
    try {
        // Lecture asynchrone du fichier data.txt
        const content = await fs.readFile('data.txt', 'utf8');
        // Affichage du contenu dans le terminal
        console.log(content);
    } catch (err) {
        console.error('Erreur lors de la lecture du fichier :', err.message);
    }
}

readFileAsync();