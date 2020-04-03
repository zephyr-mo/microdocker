const { exec } = require('shelljs');

const clone = (remoteUrl) => new Promise((resolve, reject) => {
    exec(`git clone ${remoteUrl}`, (code, desc) => {
        if (code !== 0) {
            reject()
        }

        resolve();
    });
});

module.exports = clone;