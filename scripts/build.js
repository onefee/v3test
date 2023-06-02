'use strict';
// const path = require('path');
const fs = require('fs');

setting();

function setting() {
  let action = '';
  if (process.argv.length > 2) {
    action = process.argv[2];
  }
  const fp = 'conf.json';
  // 添加版本号
  if (action === 'pre') {
    let ds = fs.readFileSync(fp).toString(); //, 'utf-8'
    let dt = JSON.parse(ds);
    dt.version += 1;
    console.log(dt);
    // console.log('set', fs);
    fs.writeFileSync(fp, JSON.stringify(dt));
  } else {
    fs.copyFileSync(fp, 'dist/conf.json');
  }
}
