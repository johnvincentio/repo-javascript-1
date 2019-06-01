'use strict';

/* globals budgetController, UIController */

/*-----------------------
App Controller
------------------------*/

var controller = (function($, budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var $DOM = UICtrl.getDOM();
        $DOM.add_btn.on('click', ctrlAddItem);

        $DOM.body.keypress(function(event) {
            console.log(event);
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        $DOM.container.on('click', ctrlDeleteItem);

        $DOM.add_type.on('change', UICtrl.changedType);
    };

    var updateBudget = function() {
        budgetCtrl.calculateBudget();           // calculate the budget
        var budget = budgetCtrl.getBudget();    // get the budget
        UICtrl.displayBudget(budget);           // display budget in UI
    };

    var updatePercentages = function() {
        budgetCtrl.calculatePercentages();  // calculate percentages
        var percentages = budgetCtrl.getPercentages();  // read %ages from budget controller
        UICtrl.displayPercentages(percentages); // update UI with new %ages
    };

    var ctrlAddItem = function() {
        var input = UICtrl.getInput();      // get input field data
        if (input.description.length > 0 && ! isNaN(input.value) && input.value > 0) {
            var newItem = budgetCtrl.addItem (input.type, input.description, input.value); // add item to the budget controller
            UICtrl.addListItem(newItem, input.type);        // add item to the UI
            UICtrl.clearFields();
            updateBudget();         // calculate and update budget
            updatePercentages();    // update percentages
        }
    };

    var ctrlDeleteItem = function(event) {
//        console.log(event.target);
        var itemId = $(event.target).closest('.js--item');
        if (itemId.length > 0) {
            var id = parseInt(itemId.attr('data-item-id'));
            var type = itemId.attr('data-item-type');
            budgetCtrl.deleteItem(id, type);
            UICtrl.deleteListItem(id, type);
            updateBudget();
            updatePercentages();    // update percentages
        }
    };

    var testData = function() {
        UICtrl.addListItem(budgetCtrl.addItem('inc', 'inc1', 4500), 'inc');
        UICtrl.addListItem(budgetCtrl.addItem('inc', 'inc2', 1200), 'inc');

        UICtrl.addListItem(budgetCtrl.addItem('exp', 'exp1', 150), 'exp');
        UICtrl.addListItem(budgetCtrl.addItem('exp', 'exp2', 750), 'exp');
        UICtrl.addListItem(budgetCtrl.addItem('exp', 'exp3', 325), 'exp');
        UICtrl.addListItem(budgetCtrl.addItem('exp', 'exp4', 50), 'exp');
    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
            UICtrl.displayDate();
            testData();
            updateBudget();
            updatePercentages();
        }
    };

})(jQuery, budgetController, UIController);

controller.init();
