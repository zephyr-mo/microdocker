const { exec } = require('shelljs');
const pull = () => new Promise((resolve, reject) => {
    exec('git pull', { aysnc: false }, (code, desc) => {
        if (code !== 0) {
            reject();
        }

        resolve();
    })
})

module.exports = pull;