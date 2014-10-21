var connect = require('connect');
var fs=require('fs');
var sys=require('sys');
var express=require ('express');
var http=require ('http');
console.log("outside");
var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function (req, res) {
		console.log("hello 1");
		if (req.url === '/process') {
			console.log("inside request");
			/**var address=req.body.address1;
			console.log(address);
			console.log("hello");
			//res.end(req.body.address + ' would repeat ' + 5 + ' times.');
			var data = address.replace(/^data:image\/\w+;base64,/, "");
			//console.log(data);
			var buf = new Buffer(data, 'base64');
			//fs.createWriteStream("C:\Users\vinay\Documents\GitHub" + '/text.png')
			
			fs.writeFile('C:/Users/vinay/Documents/image.png', buf);**/
			
		}
		
		 else {
			res.end("Invalid Request");
		}
		
	})
	.listen("8080");