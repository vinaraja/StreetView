// JavaScript Document
var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs");

http.createServer(function(request, res) { 
	//console.log("open");   
	var address;
   var parsed_url = url.parse(request.url);
   //console.log(parsed_url);
   var uri = parsed_url.pathname;
   //console.log(uri);
    if(fs.existsSync('C:/Users/vinay/Pictures/image1.png'))
			{
				console.log("file exists");
				fs.unlinkSync('C:/Users/vinay/Pictures/image1.png');
			}
			else
			{
				console.log("does not exist");
			}
	
   if(uri === "/test"){
	console.log("insdie Uri");
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      request.addListener('data', function (chunk) {
          // removed this - eval("(" + chunk + ")");
		  //console.log(chunk);
         address += chunk;
		 
      })
      request.addListener('end', function() {
          //console.log(address);
		 
		  var data = address.replace(/^undefineddata:image\/\w+;base64/, "");
			//console.log(data);
			var buf = new Buffer(data, 'base64');
			fs.writeFile('C:/Users/vinay/Pictures/image1.png', buf);
          res.write("Post data");
          res.end();
		  console.log("file created");
      });              

   } else if(uri === "/") {
	   console.log("inside uri//");
       fs.readFile("./public/index.html",function(err, data){
         if(err) throw err;
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
       });    
   }

}).listen(8080); 






/**var connect = require('connect');
var fs=require('fs');
var sys=require('sys');
var express=require ('express');
console.log("outside");
var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function (req, res) {
		console.log("hello 1");
		if (req.url === '/process') {
			console.log("inside request");
			var address=req.body.address1;
			console.log(address);
			console.log("hello");
			//res.end(req.body.address + ' would repeat ' + 5 + ' times.');
			var data = address.replace(/^data:image\/\w+;base64,/, "");
			//console.log(data);
			var buf = new Buffer(data, 'base64');
			//fs.createWriteStream("C:\Users\vinay\Documents\GitHub" + '/text.png')
			
			fs.writeFile('C:/Users/vinay/Documents/image.png', buf);
			
		} else {
			res.end("Invalid Request");
		}
		
	})
	.listen("8080");**/