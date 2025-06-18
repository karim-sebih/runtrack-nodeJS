const fs = require('fs');

try {
    // Lecture synchrone du fichier data.txt
    const content = fs.readFileSync('data.txt', 'utf8');
    // Affichage du contenu dans le terminal
    console.log(content);
} catch (err) {
    console.error('Erreur lors de la lecture du fichier :', err.message);
}