var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello Damian!')
})

app.listen(3000, function () {
  console.log('Example app1 listening on port 3000!')
})
