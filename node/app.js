const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
  console.log(req);
  res.send();
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
