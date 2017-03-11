'use strict';

var budgetController = (function() {

    var x = 23;
    var add = function(a) {
        return x + a;
    };

    return {
        publicTest: function(b) {
            return add(b);
        }
//        anotherTest: function() {
//            console.log("anotherTest");
//        }
    };
})();

var UIController = (function() {

// some code

})();

var controller = (function(budgetCtrl, UICtrl) {
    var z = budgetCtrl.publicTest(34);
    return {
        anotherTest: function() {
            console.log(z);
        }
    };

})(budgetController, UIController);
