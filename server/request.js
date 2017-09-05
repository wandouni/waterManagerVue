var http = require('http')
var writeFile = require('./writeFile')

function request (options) {
  var req = http.request(options, function (res) {
    console.log(JSON.stringify(res.headers))
    console.log(res.headers.referer)
    console.log(res)
    res.setEncoding('utf-8')
    res.on('data', function (chun) {
      console.info(chun)
      writeFile(chun)
    })
    res.on('end', function () {
      console.log('No more data in response.********')
    })
  })
  req.on('error', function (err) {
    console.error(err)
  })

  req.end()
}
module.exports = request

