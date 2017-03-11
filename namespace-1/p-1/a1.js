'use strict';

module.exports = {
    do_1 : function() {
        console.log("--- a1.do_1");
	},
	
	do_2 : function(par1, par2) {
		console.log("--- a1.do_2; par1 " + par1 + " par2 " + par2);
        return par1 + " , " + par2;
	}
};
