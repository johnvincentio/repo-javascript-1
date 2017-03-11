
var assert = require("assert");

function OKD_diamond(n) {
    if (n === undefined || typeof n != 'number' || n < 0 || n % 2 === 0) return null;
    var result = "", diam = line(x, n);
    for (var i = 1; i <= n - 2; ) {
        result += add((n - i)/2, '*', i);
        i += 2;
    }
    result += add(0, '*', n);
    for (i = n - 2; i >= 0; ) {
        result += add((n - i)/2, '*', i);
        i -= 2;
    }
    return result;
}

function diamond(n){
  if( n%2==0 || n<1 ) return null;
  var x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}
function repeat(str,x){return Array(x+1).join(str); }
function line(spaces,stars){ return repeat(" ",spaces)+repeat("*",stars)+"\n"; }


//
//assert.equal(diamond(), null);
//assert.equal(diamond('a'), null);
//
////assert.equal(diamond(-1), null);
////assert.equal(diamond(0), null);
////assert.equal(diamond(2), null);
////assert.equal(diamond(10), null);
////
////assert.equal(diamond(1), '*\n');
////assert.equal(diamond(3), ' *\n***\n *\n');
//
//var result = diamond(3);
//assert.equal(result, ' *\n***\n *\n');
//
var result = diamond(3);
console.log("result :\n"+result+"\n:");

