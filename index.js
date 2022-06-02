var express = require("express");
var app = express();
var userCount = 0;

app.use('/client', express.static(__dirname + '/client'));

app.get('/', function(request,result){
	userCount +=1;
	result.sendFile(__dirname + '/client/index.html');

	
})

app.listen(3000, function(){
		console.log("server started");
})