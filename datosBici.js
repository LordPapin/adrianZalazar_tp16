const fs = require('fs');
const path = require('path');

const bicicletas = JSON.parse(fs.readFileSync(path.join(__dirname, 'bicicletas.json')));

module.exports = bicicletas;



