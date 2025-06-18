const fs = require('fs')

const newCitation = "Je manipule les fichiers avec un module node !"

fs.writeFileSync('./data.txt', newCitation)