const { exec } = require('shelljs');

const clone = (remoteUrl) => new Promise((resolve, reject) => {
    exec(`git clone ${remoteUrl}`, { aysnc: false }, (code, desc) => {
        console.log(code, desc, 'clone');
        if (code !== 0) {
            reject()
        }

        resolve();
    });
});

module.exports = clone;