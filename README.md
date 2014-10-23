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
Insert instructions for installing Node, npm, modules, etc

Startup
-------
Insert instructions for how to start the servers and the client

Notes
-----
Insert tips such as

* Ctrl+c will kill the server
* Avoid hitting Ctrl+v, as it will pause the server, requiring a restart or port change to work again
