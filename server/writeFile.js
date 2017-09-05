var fs = require('fs')

function writeFile (data,name) {
  fs.writeFile('./jsonFile/' + name + '.json', data, function (err) {
    if (err) {
      console.log('write file has error')
    }
    console.log("数据写入成功！")
  })
}

module.exports=writeFile
