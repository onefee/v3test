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
    fs.writeFileSync(fp, JSON.stringify(dt));
  } else {
    // console.log('fs', fs);
    //复制版本号文件
    fs.copyFileSync(fp, 'dist/conf.json');
    const path = 'dist/favicon.ico';
    //删除ico
    if (fs.existsSync(path)) fs.unlinkSync(path);
    ZIP('D:/wrok/pro/demo/vue/test/dist.rar', 'D:/wrok/pro/demo/vue/test/dist/');
  }
}
/**
 * 压缩文件
 * "C:\Program Files\WinRAR\WinRAR.exe" a -ag -ibck D:\wrok\pro\demo\vue\test\dist.rar D:\wrok\pro\demo\vue\test\dist\
 * @param {*} toPath 压缩路径
 * @param {*} tagPath 被压缩路径
 */
function ZIP(toPath, tagPath) {
  var cp = require('child_process');
  const exePath = 'C:/Program Files/WinRAR/WinRAR.exe';
  return new Promise(async (resolve, reject) => {
    cp.execFile(exePath, ['a', '-r', '-ep1', '-ibck', toPath, tagPath], function (err, stdout) {
      if (err) {
        reject(err);
      }
      resolve(stdout);
    });
  });
}
