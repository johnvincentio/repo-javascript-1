// alert("Hey");
// document.write("hey");

var arr = [];
var l = document.links;
console.log("l "+l.length);
for(var i=0; i<l.length; i++) {
    arr.push(l[i].href);
}

for (var j=0; j< arr.length; j++) {
    console.log ("j "+j+" url "+arr[j]);
}

console.log ("done");
