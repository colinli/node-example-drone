var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Damian!')
})

app.listen(3000, function () {
  console.log('Example app11 listening on port 3000!')
})
