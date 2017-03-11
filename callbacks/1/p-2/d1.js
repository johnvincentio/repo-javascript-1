/* jshint browser: true */

var myImage = "http://images.hertz.com/content/dam/herc/hes/misc/enUS/promo-banner_port-power.jpg";

getData(myImage, writeData, 1, 'abc', true);

document.getElementById('image').innerHTML += "show this before data ...";

function getData(dataURI, callback) {
    var myData = getSomeData(dataURI); // fake function
    callback(myData);
}

function writeData(myData, par1, par2, par3) {
    document.getElementById('output').innerHTML += par1;
    document.getElementById('output').innerHTML += par2;
    document.getElementById('output').innerHTML += par3;
}

function getSomeData() {
    // this would make an XHR connection to the server and get, say, some JSON back
    var data = 'this is data from the server';
    return data;
}

function getImage() {
    console.log(">>> getImage; name " + name + " path " + path);
    var that = this;
    var request = $.ajax( {
        url : path,
        type : "get",
        dataType : "json",
        async : false
    });
    request.done (function(data) {
        console.log ("HES.Content:load; done; name "+name);
        that.storage[name] = data.content; // only want the content portion
    });
    request.fail (function(jqXHR, textStatus) {
//			console.log ("HES.Content:load; name "+name+" Request failed: " + textStatus);
    });
    console.log("<<< getImage; name " + name);
}
