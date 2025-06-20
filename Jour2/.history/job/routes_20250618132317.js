
const url = new URL("https://www.google.com/?search=nodejs");



const protocole = url.protocol;
console.log(protocole);

const hote = url.hostname;
console.log(hote);

const param = url.searchParams;
console.log(param);

url.hostname = "www.laplateforme.io";
console.log(url.href);

url.searchParams.append('lang', 'fr');
console.log(url.href);

