'use strict';

var MY_1 = MY_1 || {};

MY_1.A1 = require('./a1');
MY_1.A2 = require('./a2');

module.exports = {

    do_1 : function() {
        console.log("--- a3.do_1");
        MY_1.A1.do_1();
        MY_1.A2.do_99();
	},
	
	do_2 : function(par1, par2) {
		console.log("--- a3.do_2; par1 " + par1 + " par2 " + par2);
        MY_1.A1.do_2(par1, par2);
        return par1 + " , " + par2;
	}
};

/*
var GHI = GHI || {};

GHI.Subspace = {

    do_1 : function() {
        console.log("--- GHI.Subspace.do_1");
        ABC.Subspace.do_1();
        DEF.Subspace.do_1();
	},
	
	do_2 : function(name, path) {
		console.log("--- GHI.Subspace.do_2; name " + name + " path " + path);
        ABC.Subspace.do_2(name,path);
        DEF.Subspace.do_2(name,path);
	}
};

*/
