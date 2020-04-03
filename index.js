const { exec, cd, ls } = require('shelljs');
const ora          = require('ora');
const fileExist    = require('./lib/fileExist');
const pull         = require('./lib/pull');
const install      = require('./lib/install');
const clone        = require('./lib/clone');

const remoteUrl  = 'https://github.com/Rebecca9791/koa_test';
const dockerName = 'koa_test';
const targeDir   = `../${dockerName}`;
const isExist    = fileExist(targeDir);
const spinner    = ora('');
const start      = async () => {
    if (isExist) {
        cd(targeDir);
        spinner.start();
        spinner.text = `进入${targeDir}`;
        exec('git status', { async: false }, async (code, des) => {
            if (code !== 0) {
                throw new Error('maybe something wrong!');
            }

            if (!des.match('Your branch is up to date')) {
                await pull();
            }

            spinner.text = `安装依赖中`;
            await install();

            spinner.text = `打开浏览器`;
            spinner.stop();
            exec('open http://localhost:3000');
            exec('node koaTest.js');
        })
    } else {
        try {
            cd('..');
            spinner.start();

            spinner.text = `拉取代码 --> ${remoteUrl}`;
            await clone(remoteUrl);

            cd(`./${dockerName}`);
            spinner.text = `安装依赖中`;
            await install();
            spinner.stop();

            exec('open http://localhost:3000');
            exec('node koaTest.js');
        } catch (err) {
            console.log('看看error是什么', err.message);
        }
    }
}

start();