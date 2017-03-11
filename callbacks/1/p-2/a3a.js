getData('http://fakedomain1234.com/userlist', writeData);

document.getElementById('output').innerHTML += "show this before data ...";

function getData(dataURI, callback) {
    var myData = getSomeData(); // fake function
    callback(myData);
}

function writeData(myData) {
    document.getElementById('output').innerHTML += myData;
}

function getSomeData() {
    // this would make an XHR connection to the server and get, say, some JSON back
    var data = 'this is data from the server';
    return data;
}
