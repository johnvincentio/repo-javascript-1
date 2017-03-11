// 'use strict';

var ABC = ABC || {};

ABC.A1 = require('./a1');
var A2 = require('./a2');
var a3 = require("./a3");

function test1() {
    ABC.A1.do_1();
    console.log("concat: "+ABC.A1.do_2("abc", "def"));
}
function test2() {
    A2.do_99();
}
function test3() {
//    a3.do_1();
    console.log("concat a3: "+a3.do_2("xyz", "XYZ"));
}

// test1();
// test2();
test3();
