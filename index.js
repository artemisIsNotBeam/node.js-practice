var express = require("express");
var app = express();


app.get('http:/www.google.com', function(request,result){

	result.send("hello world");
	
})
