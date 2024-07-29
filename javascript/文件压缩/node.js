const fs = require('fs-extra')
const archiver = require('archiver')

const dir = 'test-file'
const distDirZip = 'result.zip'
// fs.emptyDirSync(dir)
// fs.copySync('test.js', `${dir}/test.js`)
const output = fs.createWriteStream(distDirZip)
const archive = archiver('zip')
output.on('close', function () {
  // fs.removeSync(distDir)
  console.log(archive.pointer() + ' total bytes')
  console.log('打包完成')
})

output.on('end', function () {
  console.log('Data has been drained')
})

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err
  }
})

// good practice to catch this error explicitly
archive.on('error', function (err) {
  throw err
})
archive.directory(dir, false)
archive.pipe(output)
archive.finalize()