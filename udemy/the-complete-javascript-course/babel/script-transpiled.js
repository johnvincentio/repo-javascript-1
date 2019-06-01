/*jshint esnext: true */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
    function Base(name, year) {
        _classCallCheck(this, Base);

        this.name = name;
        this.year = year;
    }

    _createClass(Base, [{
        key: 'age',
        value: function age() {
            return new Date().getFullYear() - this.year;
        }
    }]);

    return Base;
}();

var Park = function (_Base) {
    _inherits(Park, _Base);

    function Park(name, year, trees, area) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, year));

        _this.trees = trees;
        _this.area = area;
        return _this;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            var density = this.trees / this.area;
            console.log(this.name + ' has a tree density of ' + density + ' trees per sq km');
        }
    }, {
        key: 'toString',
        value: function toString() {
            return '[' + this.name + ',' + this.year + '], [' + this.trees + ',' + this.area + ']';
        }
    }]);

    return Park;
}(Base);

var Parks = function () {
    function Parks() {
        _classCallCheck(this, Parks);

        this.container = [];
    }

    _createClass(Parks, [{
        key: 'add',
        value: function add(index, park) {
            this.container.push(park);
        }
    }, {
        key: 'showDensity',
        value: function showDensity() {
            this.container.forEach(function (el) {
                return el.treeDensity();
            });
        }
    }, {
        key: 'averageAge',
        value: function averageAge() {
            var total = 0;
            this.container.forEach(function (el) {
                return total += el.age();
            });
            var avg = total / this.container.length;
            console.log('Our ' + this.container.length + ' parks have an average age of ' + avg + ' years');
        }
    }, {
        key: 'namedPark',
        value: function namedPark(maxTrees) {
            this.container.forEach(function (el) {
                if (el.trees > maxTrees) {
                    console.log(el.name + ' has more than ' + maxTrees + ' trees');
                }
            });
        }
    }, {
        key: 'toString',
        value: function toString() {
            this.container.forEach(function (el) {
                return console.log('' + el.toString());
            });
        }
    }]);

    return Parks;
}();

var Street = function (_Base2) {
    _inherits(Street, _Base2);

    function Street(name, year, length) {
        var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'normal';

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, year));

        _this2.length = length;
        _this2.type = type;
        return _this2;
    }

    _createClass(Street, [{
        key: 'show',
        value: function show() {
            console.log(this.name + ', built in ' + this.year + ', is a ' + this.type + ' street');
        }
    }, {
        key: 'toString',
        value: function toString() {
            return '[' + this.name + ',' + this.year + '], [' + this.length + ',' + this.type + ']';
        }
    }]);

    return Street;
}(Base);

var Streets = function () {
    function Streets() {
        _classCallCheck(this, Streets);

        this.container = [];
    }

    _createClass(Streets, [{
        key: 'add',
        value: function add(index, park) {
            this.container.push(park);
        }
    }, {
        key: 'averageLength',
        value: function averageLength() {
            var total = 0;
            this.container.forEach(function (el) {
                return total += el.length;
            });
            var avg = total / this.container.length;
            console.log('Our ' + this.container.length + ' streets have a total length of ' + total + ' km, with an average length of ' + avg + ' km');
        }
    }, {
        key: 'showType',
        value: function showType() {
            this.container.forEach(function (el) {
                return el.show();
            });
        }
    }, {
        key: 'toString',
        value: function toString() {
            this.container.forEach(function (el) {
                return console.log('' + el.toString());
            });
        }
    }]);

    return Streets;
}();

var parks = new Parks();
parks.add(1, new Park('park-1', 1990, 500, 12000));
parks.add(2, new Park('park-2', 1950, 2000, 5000));
parks.add(3, new Park('park-3', 1890, 4500, 3000));
// parks.toString();

var streets = new Streets();
streets.add(1, new Street('street-1', 2005, 2500, 'tiny'));
streets.add(2, new Street('street-2', 1995, 5000));
streets.add(3, new Street('street-3', 1970, 7500, 'big'));
streets.add(4, new Street('street-4', 1960, 13500, 'huge'));
// streets.toString();

console.log('--- Parks Report ---');
parks.showDensity(); // 1.
parks.averageAge(); // 2.
parks.namedPark(1000); // 3.

console.log('--- Streets Report ---');
streets.averageLength(); // 4.
streets.showType(); // 5.
