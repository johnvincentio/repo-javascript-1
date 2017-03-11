/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1

*/

var assert = require("assert");

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


describe("Solution", function(){
  it("should test for something", function(){
    Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
  });
});
