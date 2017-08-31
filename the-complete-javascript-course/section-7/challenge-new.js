/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps,
arrow functions, destructuring, etc.

*/

const types = new Map();
types.set(1, 'tiny');
types.set(2, 'small');
types.set(3, 'normal');
types.set(4, 'big');
types.set(5, 'huge');

class Base {
    constructor(name, built) {
        this.name = name;
        this.built = built;
    }
    calculateAge() {
        return new Date().getFullYear() - this.built;
    }
}

class Park extends Base {
    constructor (name, built, trees, area) {
        super(name, built);
        this.trees = trees;
        this.area = area;
    }
}

class Street extends Base {
    constructor (name, built, length, type = 3) {
        super(name, built);
        this.length = length;
        this.type = type;
    }
}

const parks = [
new Park('park-1', 1990, 500, 12000),
new Park('park-2', 1950, 2000, 5000),
new Park('park-3', 1890, 4500, 3000)
];

// 1. Tree density of each park in the town (formula: number of trees/park area)

parks.forEach(function(element) {       // 1
    const density = element.area / element.trees;
    console.log(`park name ${element.name} density = ${density}`);
}, this);

parks.forEach((element) => {            // 1
    const density = element.area / element.trees;
    console.log(`park name ${element.name} density = ${density}`);
}, this);

// 2. Average age of each town's park (formula: sum of all ages/number of parks)

// const total = parks.reduce((sum, item) => {
//     return sum + item.calculateAge();
// }, 0);
// console.log("total "+total);

const sum_of_all_ages = parks.reduce((sum, item) => sum + item.calculateAge(), 0);
console.log("sum_of_all_ages "+sum_of_all_ages);

const average_age = sum_of_all_ages / parks.length;
console.log(`average_age ${average_age}`);


// 3. The name of the park that has more than 1000 trees

parks.forEach((element) => {            // 3
    if (element.trees > 1000) {
        console.log(`More than 1000 trees; park name ${element.name}`);
    }
}, this);



const streets = [
new Street('street-1', 2005, 2500, 1),
new Street('street-2', 1995, 5000),
new Street('street-3', 1970, 7500, 4),
new Street('street-4', 1960, 13500, 5)
];

// 4. Total and average length of the town's streets

const total_street_length = streets.reduce((sum, item) => sum + item.length, 0);
console.log("total_street_length "+total_street_length);

let total_street_length_2 = 0;
streets.forEach(el => total_street_length_2 += el.length);
console.log(`total_street_length_2 ${total_street_length_2}`);

const average_street_length = total_street_length / streets.length;
console.log(`average_street_length ${average_street_length}`);



// 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

streets.forEach((element) => {            // 1
    const str = types.get(element.type);
    console.log(`street name ${element.name} type = ${str}`);
});
