'use strict';

/* jshint multistr: true */

/* exported UIController */

/*-----------------------
UI Controller
------------------------*/

var UIController = (function($) {
    var $DOM = {
        body: $('body'),
        container: $('.js--container'),
        add_btn: $('.js--add-btn'),
        add_type: $('.js--add-type'),
        add_description: $('.js--add-description'),
        add_value: $('.js--add-value'),
        income_list: $('.js--income-list'),
        expenses_list: $('.js--expenses-list'),
        budget_value: $('.js--budget-value'),
        budget_income: $('.js--budget-income-value'),
        budget_expenses: $('.js--budget-expenses-value'),
        budget_expenses_percentage: $('.js--budget-expenses-percentage'),
        budget_title: $('.js--budget-title')
    };

/*
+ or - before the number
2 decimal points
comma separating the thousands
*/
    var formatNumber = function(num, type) {
        num = Math.abs(num);
        num = num.toFixed(2);
        var numSplit = num.split('.');
        var int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
        }
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + numSplit[1];
    };

    var monthName = function(dt) {
        var mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return mlist[dt.getMonth()];
    };

    var incomeTemplate = function(obj) {
return '<div class="item js--item clearfix" data-item-type="inc" data-item-id="{{1}}">\
    <div class="item__description">{{2}}</div>\
    <div class="right clearfix">\
        <div class="item__value">{{3}}</div>\
        <div class="item__delete">\
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\
        </div>\
    </div>\
</div>'.replace('{{1}}',obj.id).replace('{{2}}',obj.description)
    .replace('{{3}}',formatNumber(obj.value), 'inc');
    };
    var expenseTemplate = function(obj) {
return '<div class="item js--item clearfix" data-item-type="exp" data-item-id="{{1}}">\
    <div class="item__description">{{2}}</div>\
    <div class="right clearfix">\
        <div class="item__value">{{3}}</div>\
        <div class="js--item-percentage item__percentage"></div>\
        <div class="item__delete">\
            <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\
        </div>\
    </div>\
</div>'.replace('{{1}}',obj.id).replace('{{2}}',obj.description)
    .replace('{{3}}',formatNumber(obj.value, 'exp'));
    };
    return {
        getInput: function() {
            return {
                type : $DOM.add_type.val(),
                description : $DOM.add_description.val(),
                value : parseFloat($DOM.add_value.val())
            };
        },

        addListItem: function(obj, type) {
            var html;
            if (type === 'inc') {
                html = incomeTemplate(obj);
                $DOM.income_list.append(html);
            }
            else if (type === 'exp') {
                html = expenseTemplate(obj);
                $DOM.expenses_list.append(html);
            }
        },

        deleteListItem: function(id, type) {
            var itemid = $('.js--item[data-item-type="'+type+'"][data-item-id='+id+']');
            itemid.remove();
        },

        clearFields: function() {
            $DOM.add_description.val('');
            $DOM.add_value.val('');
            $DOM.add_description.focus();
        },

        displayBudget: function(obj) {
            var type = obj.budget >= 0 ? type = 'inc' : type = 'exp';
            $DOM.budget_value.text(formatNumber(obj.budget, type));
            $DOM.budget_income.text(formatNumber(obj.totalInc, 'inc'));
            $DOM.budget_expenses.text(formatNumber(obj.totalExp, 'exp'));
            if (obj.percent !== -1) {
                $DOM.budget_expenses_percentage.text(obj.percent + '%');
            }
            else {
                $DOM.budget_expenses_percentage.text('---');
            }
        },

        displayPercentages: function(percentages) {
            var expIds = $('.js--item-percentage');
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            nodeListForEach(expIds, function(item, index) {
                if (percentages[index] > 0) {
                    item.textContent = percentages[index] + '%';
                }
                else {
                    item.textContent = '---';
                }
            });
        },

        displayDate: function() {
            var now = new Date();
            $DOM.budget_title.text(monthName(now) + ' ' + now.getFullYear());
        },

        changedType: function() {
            var optionSelected = $(this).find("option:selected");
            var valueSelected = optionSelected.val();
            console.log('valueSelected '+valueSelected);
            $DOM.add_type.toggleClass('red-focus');
            $DOM.add_description.toggleClass('red-focus');
            $DOM.add_value.toggleClass('red-focus');
            $DOM.add_btn.toggleClass('red');
        },

        getDOM: function() {
            return $DOM;
        }
    };
})(jQuery);
