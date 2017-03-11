/*
work with Chai and Mocha
*/

var chai = require('chai');
var assert = chai.assert;

// var assert = require('chai').assert;

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
    this.fullPages = Math.floor(this.collection.length / this.itemsPerPage);
    this.partialPages = Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.collection.length;
};

// returns the number of pages, full and partial
PaginationHelper.prototype.pageCount = function() {
    return this.partialPages;
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    if (pageIndex < 0) return -1;
    if (pageIndex + 1 > this.partialPages) return -1;
    if (pageIndex + 1 <= this.fullPages) return this.itemsPerPage;
    return this.collection.length - this.fullPages * this.itemsPerPage;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if (itemIndex < 0) return -1;
    if (itemIndex >= this.collection.length) return -1;
    return Math.floor((itemIndex + 1) / this.itemsPerPage);
};

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

assert.equal(helper.pageCount(),2);
assert.equal(helper.itemCount(), 6);
assert.equal(helper.pageItemCount(0), 4);
assert.equal(helper.pageItemCount(1), 2);
assert.equal(helper.pageItemCount(2), -1);

// pageIndex takes an item index and returns the page that it belongs on
assert.equal(helper.pageIndex(5), 1);
assert.equal(helper.pageIndex(2), 0);
assert.equal(helper.pageIndex(20), -1);
assert.equal(helper.pageIndex(-10), -1);
assert.equal(helper.pageIndex(7), -1);

//
//describe("Solution", function(){
//  it("should test for something", function(){
//    Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//  });
//});
