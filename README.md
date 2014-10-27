gsv-pano-save
=============

A system for fetching Google Street View panoramas and viewing them on a [Science On a Sphere](http://sos.noaa.gov). Consists of:

* A web client which allows the user to search for a panorama, view it, and send it to the SOS
* A server which runs on the SOS host. This server receives the panorama from the client and updates the SOS playlist with the new panorama

The web client borrows heavily from Jaume Sanchez Elias' [WebGL Google Street Viewer](http://www.clicktorelease.com/code/street/).

Dependencies
------------

* [GSVPano.js](https://github.com/pnitsch/GSVPano.js/) for fetching the Street View images
* [Three.js](http://threejs.org/) for displaying the panorama on a sphere
* [Canvas2Image.js](http://blog.nihilogic.dk/2008/04/saving-canvas-data-to-image-file.html) or [alternative](https://github.com/hongru/canvas2image) for saving the panorama image on the client-side
* Google Maps API
* [Node.js](http://www.nodejs.org/) for the server which receives the panorama and updates the SOS playlist

Setup
-----
Step 1:
Install Node.js to your system.
Please follow this video to set up Node.
http://www.youtube.com/watch?v=TObxI3vUUUk.
Step 2:
Once Node is installed type Npm on the command prompt it should display some files which shows Node was installed successfully.If the terminal says module not found please reinstall Node following step 1.

Startup
-------
1.Once Node is setup download the zip file from github.iu.edu/dmreagan/gsv-pano-save.
2.Next step open the terminal.Redirect it to the folder which containes the zip file.
3.Next run npm install on terminal.It will install all the node modules that is required.
4.Once this is done the node modules will appear in the directory.
5.Next open a terminal and type node server.js.
6.You will be able to open the webpage using the //ipaddress:3600.
7.Next open a new terminal and type node script.js.
8.Your website should be able to send images to the system.

Notes
-----
Insert tips such as

* Ctrl+c will kill the server
* Avoid hitting Ctrl+z, as it will pause the server, requiring a restart or port change to work again
* Please make the following changes if you run it on a new system.Change the host in script.js to the current ip address of the system and the port to current telnet port supported by sos.
* Open index.html contained in the public folder and replace this line var url = "http://localhost:3602/test" with var url = "http://"ipaddress":3602/test".
