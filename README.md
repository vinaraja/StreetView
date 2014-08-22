gsv-pano-save
=============

Save a Google Street View panorama as an equirectangular texture. Borrows heavily from http://www.clicktorelease.com/code/street/.

Dependencies
------------

* GSVPano.js - https://github.com/spite/GSVPano.js or https://github.com/pnitsch/GSVPano.js/
* Three.js - http://threejs.org/
* Canvas2Image.js - http://blog.nihilogic.dk/2008/04/saving-canvas-data-to-image-file.html or https://github.com/hongru/canvas2image
* Google Maps API

Future Ideas from Canvas2Image blog post comments
------------

Bade.I. says:
For the filename issue, add the download attribute to your \ tag. i.e. 

```html
<a download="test.png" 
href="javascript:document.getElementById(<canvas_div_id>).toDataURL('image/png').replace(image/png);">link</a>
```

Michael says:
However, if you want to change the file name but you don't have a link to add the download attribute to you can create a link using javascript and call the click function on it:

```javascript
var a = document.createElement("a");
a.download = fileName + fileExtension;
a.href = strData;
a.click();
```

To use this code, change the contents of the function saveFile to that above. This is useful for automatically downloading multiple images. You may want to pass fileName and fileExtension as parameters to the saveFile function along with strData.

This worked for me on Windows 8.1, Chrome 33.0 although I did get the following warning message.
"This site is attempting to download multiple files. Do you want to allow this?" 