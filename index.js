const fs = require('fs');
const path = require('path');
const request = require('request');
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const localFile = 'prettify.js';
const filePath = path.resolve('regsSource', localFile);
let re = /([a-zA-Z_]+\s*=\s*)?\/(?=[^*>/])[^\s[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*(?=([ ,;]+))/ig;
// 匹配压缩代码，但是会把http链接里的/***/匹配进去
let reMin = /([a-zA-Z_]+\s*=\s*)?\/(?=[^*>/])[^\s[/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\/]*)*?\/[gimuy]*(?=([\s.\],;]*))/ig;

// 读取cdn
readUrl();

// 读取本地文件
// readFile(filePath);

function readUrl() {
    let questions = [
        {
            type: 'input',
            name: 'url',
            message: '输入url：',
            validate(input) {
                if (!input) {
                    return false;
                }
                return true;
            }
        }
    ];
    prompt(questions).then(answer => {
        let url = answer.url;
        let name = getName(url);
        request.get(url, (e, r, b) => {
            // console.log(e, r, b);
            if (!e) {
                let s = '';
                s = getRegs(b);
                writeFile(name, s);
            }
        });
    });
}
function readFile(filePath) {
    let text = fs.readFileSync(filePath, {encoding: 'utf-8'});
    let name = getName(filePath);
    let s = '';
    s = getRegs(text, true);
    writeFile(name, s);
}
function writeFile(name, s) {
    fs.writeFileSync(`./regsResult/${name}`, s);
}
function getName(filePath) {
    let name = filePath.match(/[^\/][a-zA-Z_\-\.]+(?=(?:\.js))/gi);
    name = name && name.length > 0
            ? name[0] + '.js'
            : new Date().toDateString() + '.js';
    return 'regs-' + name;
}
function getRegs(text, local) {
    let res;
    if (local) {
        res = text.match(reMin);
    }
    else {
        res = text.match(re);
    }
    if (!res || !res.length) {
        console.log('可能没有正则哦');
        return;
    }
    let s = '';
    res && res.forEach(function(item, i) {
        console.log(item, i);
        s += item + ';\n';
    });
    return s;
}
