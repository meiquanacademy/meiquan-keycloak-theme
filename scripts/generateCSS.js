#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const backgroundsDir = './backgrounds';
const outputDir = `./build/themes/keycloak/login/resources/img/bg`;
const cssFilename = `./build/themes/keycloak/login/resources/css/background.css`;

const section = (id, ext) => {
    const key = (id + 1).toString().padStart(3, '0');
    return (`
.login-background-${key} {
    background: url("../img/bg/${key}${ext}")  no-repeat center center fixed;
}
`.trim());
}

const files = fs.readdirSync(backgroundsDir).map(file => {
    return path.join(backgroundsDir, file);
});

const outputFiles = files.map((file, index) => {
    const ext = path.parse(file).ext;
    const outputFilename = path.join(outputDir, `${index + 1}`.padStart(3, '0') + ext);
    return ({ file, outputFilename, ext });
});

const sections = outputFiles.map((f, i) => section(i, f.ext)).join('\n\n');

fs.mkdirSync(outputDir, { recursive : true });

fs.writeFileSync(cssFilename, sections);
outputFiles.forEach(f => {
    fs.copyFileSync(f.file, f.outputFilename);
});

console.log('Background files:');
console.log(outputFiles.map(f => `  ${f.file.padEnd(40)} ==> ${f.outputFilename}`).join('\n'));