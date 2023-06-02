'use strict';
// require('../config/env'); vue-cli-service build &&

const path = require('path');
const fs = require('fs');

setting();

function setting() {
  let ds = fs.readFileSync('conf.json').toString(); //, 'utf-8'
  let dt = JSON.parse(ds);
  dt.version += 1;
  console.log(dt);
  // console.log("set", path, fs);
  fs.writeFileSync('conf.json', JSON.stringify(dt));
}
