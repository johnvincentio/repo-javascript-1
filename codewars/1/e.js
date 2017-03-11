var assert = require("assert");

function removeSmallest(numbers) {
    var smallest = Math.min.apply(null, numbers);
    var index = numbers.indexOf(smallest);
    numbers.splice(index, 1);
    return numbers;
}

function OLDremoveSmallest(numbers) {
    var smallest = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallest) smallest = numbers[i];
    }
    //    console.log("smallest "+smallest);
    for (i = 0; i < numbers.length; i++) {
        //        console.log("i "+i+" numbers[i] "+numbers[i]);
        if (numbers[i] === smallest) {
            numbers.splice(i, 1);
            return numbers;
        }
    }
    return numbers;
}

var ret = removeSmallest([1, 2, 3, 4, 5]);
assert.deepEqual(ret, [2, 3, 4, 5]);

//var ret = removeSmallest([5, 3, 2, 1, 4]);
////console.log("ret "+ret);
//assert.deepEqual(ret, [5, 3, 2, 4]);
//
//var ret = removeSmallest([2, 2, 1, 2, 1]);
//assert.deepEqual(ret, [2, 2, 2, 1]);
//
//var ret = removeSmallest([2, 2, 2, 1]);
//assert.deepEqual(ret, [2, 2, 2]);
//
//var ret = removeSmallest([2, 2, 2]);
//assert.deepEqual(ret, [2, 2]);
//
//var ret = removeSmallest([]);
//assert.deepEqual(ret, []);


//var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
//var my1 = fruits.splice(2, 2);
//console.log("my1 "+my1);
//console.log("fruits "+fruits);
//
//var arr1 = [5, 3, 2, 1, 4];
//var my2 = arr1.splice(3, 1);
//console.log("my2 "+my2);
//console.log("arr1 "+arr1);
//
//var testArray  = ["a","b","c"];
//console.log(testArray);
//console.log("size:" + testArray.length);
//testArray.splice(0,1);
//console.log(testArray);
//console.log("size:" + testArray.length);


/*

function removeSmallest(numbers) {
    var sorted = numbers.sort();
    console.log("sorted "+sorted);
    var smallest = sorted[0];
    console.log("smallest "+smallest);
    var jv = Math.min(numbers);
    console.log("jv "+jv);
}
*/
