
const fs = require('fs')

fs.readFile('./data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du répertoire:", err);
        return;
    }

    // console.log(data);
    

    function tri(data) {
        const l = [...data].length;
        // console.log(l);
        let r = ""
        for (let i=0;i<l;i+=2) {
            r+=data[i];
        }
        return r;
    }

    const result = tri(data);

    console.log(result);
})
