/*jshint esnext: true */

'use strict';

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Base {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        return new Date().getFullYear() - this.year;
    }
}

class Park extends Base {
    constructor(name, year, trees, area) {
        super(name, year);
        this.trees = trees;
        this.area = area;
    }
    treeDensity() {
        let density = this.trees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per sq km`);
    }
    toString() {
        return `[${this.name},${this.year}], [${this.trees},${this.area}]`;
    }
}

class Parks {
    constructor() {
        this.container = [];
    }
    add(index, park) {
        this.container.push(park);
    }
    showDensity() {
        this.container.forEach(el => el.treeDensity());
    }
    averageAge() {
        let total = 0;
        this.container.forEach(el => total += el.age());
        const avg = total / this.container.length;
        console.log(`Our ${this.container.length} parks have an average age of ${avg} years`);
    }
    namedPark(maxTrees) {
        this.container.forEach(el => {
            if (el.trees > maxTrees) {
                console.log(`${el.name} has more than ${maxTrees} trees`);
            }
        });
    }
    toString() {
        this.container.forEach(el => console.log(`${el.toString()}`));
    }
}

class Street extends Base {
    constructor(name, year, length, type = 'normal') {
        super(name, year);
        this.length = length;
        this.type = type;
    }
    show() {
        console.log(`${this.name}, built in ${this.year}, is a ${this.type} street`);
    }
    toString() {
        return `[${this.name},${this.year}], [${this.length},${this.type}]`;
    }
}

class Streets {
    constructor() {
        this.container = [];
    }
    add(index, street) {
        this.container.push(street);
    }
    averageLength() {
        let total = 0;
        this.container.forEach(el => total += el.length);
        const avg = total / this.container.length;
        console.log(`Our ${this.container.length} streets have a total length of ${total} km, with an average length of ${avg} km`);
    }
    showType() {
        this.container.forEach(el => el.show());
    }
    toString() {
        this.container.forEach(el => console.log(`${el.toString()}`));
    }
}

const parks = new Parks();
parks.add(1, new Park('park-1', 1990, 500, 12000));
parks.add(2, new Park('park-2', 1950, 2000, 5000));
parks.add(3, new Park('park-3', 1890, 4500, 3000));
// parks.toString();

const streets = new Streets();
streets.add(1, new Street('street-1', 2005, 2500, 'tiny'));
streets.add(2, new Street('street-2', 1995, 5000));
streets.add(3, new Street('street-3', 1970, 7500, 'big'));
streets.add(4, new Street('street-4', 1960, 13500, 'huge'));
// streets.toString();

console.log('--- Parks Report ---');
parks.showDensity();        // 1.
parks.averageAge();      // 2.
parks.namedPark(1000);      // 3.

console.log('--- Streets Report ---');
streets.averageLength();        // 4.
streets.showType();     // 5.
