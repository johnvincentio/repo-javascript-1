
'use strict';

/*-----------------------
Budget Controller
------------------------*/

/* exported budgetController */

var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(item) {
            sum += item.value;
        });
        data.totals[type] = sum;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percent: -1     // default; not set
    };

    return {
        addItem: function(type, description, value) {
            var newItem;
            var id = 0;
            if (data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            if (type === 'exp') {
                newItem = new Expense(id, description, value);
            }
            else if (type === 'inc') {
                newItem = new Income(id, description, value);
            }
            data.allItems[type].push(newItem);
            return newItem;
        },
        deleteItem: function(id, type) {
            var ids = data.allItems[type].map(function(item) {
                return item.id;
            });
            var index = ids.indexOf(id);
            if (index > -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        calculateBudget: function() {
            calculateTotal('inc');      // calculate total income
            calculateTotal('exp');      // calculate total expenses
            data.budget = data.totals.inc - data.totals.exp;    // calculate budget
            if (data.totals.inc > 0) {
                data.percent = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else {
                data.percent = -1;
            }
        },
        calculatePercentages: function() {
            data.allItems.exp.forEach(function(item) {
                item.calcPercentage(data.totals.inc);
            });
        },
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(item) {
                return item.getPercentage();
            });
            return allPerc;
        },
        getBudget: function() {
            return {
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                budget: data.budget,
                percent: data.percent
            };
        },
        testing: function() {
            console.log(data);
        }
    };
})();
