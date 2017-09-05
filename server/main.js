var request = require('./request')
var querystring = require('querystring')

var postData = querystring.stringify({
  index: 1,
  flag: 1
})

var options = {
  hostname: '42.123.76.120',
  port: 8080,
  path: '/watersys/getWatersysDataByPage.do',
  method: 'POST',
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate',
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': new Buffer(postData).length,
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'JSESSIONID=E0A0A38BFE8E194A634E6DD3D208C7ED',
    'Host': '42.123.76.120:8080',
    'Origin': 'http://42.123.76.120:8080',
    'Referer': 'http://42.123.76.120:8080/watersys/manager/index.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.101 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
}

request(options)

