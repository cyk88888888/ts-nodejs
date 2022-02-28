#!/usr/bin/env node
const exec = require('child_process').exec;
const path = require('path');
let root_dir = __dirname.split('bin')[0];
let tsconfig_dir = root_dir + 'src';
exec(root_dir + 'node_modules/.bin/tsc-plus -p ' + tsconfig_dir, {encoding: 'utf8'}, function (err, stdout, stderr) {
    if (err) {
        console.log(err);
        console.log('stderr:' + stderr);
        return;
    }
    console.log('编译typescript完成！！！！！！');
});