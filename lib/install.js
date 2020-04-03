const { exec, which } = require('shelljs');

const install  = () => new Promise((resolve, reject) => {
    if (!which('yarn')) {
        exec('npm install', (code, desc) => {
            if (code !== 0) {
                reject();
            }

            console.log('end');
            resolve();
        })
    } else {
        exec('yarn', (code, desc) => {
            if (code !== 0) {
                reject();
            }

            resolve(desc);
        })
    }
})

module.exports = install;