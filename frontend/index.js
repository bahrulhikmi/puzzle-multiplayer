var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/assets', express.static(__dirname + '/public/assets'));
app.use('/particles', express.static(__dirname + '/public/particles'));
app.use('/test', express.static(__dirname + '/public/test'));
app.get('/', function(req,res){
 res.sendFile(__dirname+'/public/index.html');
});

server.listen(8000, function(){
    console.log('Listening on '+server.address().port);
});

