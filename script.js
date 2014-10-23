// JavaScript Document
var sys = require("sys"),
    http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    net=require("net"),
    host="127.0.0.1",
    port="2468",
    playlist="normal-demo.sos",
    id="3";

http.createServer(function(request, res) { 
	//console.log("open");   
	var address;
   var parsed_url = url.parse(request.url);
   //console.log(parsed_url);
   var uri = parsed_url.pathname;
   //console.log(uri);
    if(fs.existsSync('/home/sos/image1.png'))
			{
				console.log("file exists");
				fs.unlinkSync('/home/sos/image1.png');
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
			fs.writeFile('/home/sos/image1.png', buf);
          res.write("Post data");
          res.end();
		  console.log("file created");
	
	
var net = require('net');

var client = new net.Socket();
client.connect(port, host, function() {

   console.log('CONNECTED TO: ' + host + ':' + port);
   //server will receive it as message from the client 
   client.write("enable" + "\n", "UTF-8");
   client.write("set_auto_presentation_mode 0\n", "UTF-8");
   client.write ("open_playlist " + playlist + "\n", "UTF-8");
   client.write("play " +id + "\n", "UTF-8");
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    // Close the client socket completely
    //client.destroy();
    
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});

		
      })            
	console.log("outside")
   } else if(uri === "/") {
	   console.log(uri);
	   console.log("inside uri//");
       fs.readFile("/home/sos/gsv-pano-save/public/index.html",function(err, data){
         if(err) throw err;
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.end(data);
       });    
   }

}).listen(3602); 

