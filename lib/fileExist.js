const fs = require('fs');

const fileExist = (path) => !!fs.existsSync(path)

module.exports = fileExist;