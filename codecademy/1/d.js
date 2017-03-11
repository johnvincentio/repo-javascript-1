
var friends = {
//    firstName: '',
//    lastName: '',
//    number: ''
//    abc() {
//        return 'xyz';
//    }
};

friends["bill"] = {};
friends.bill.firstName = "Bill";
friends.bill.lastName = "Last";
friends.bill.number = "12345";

friends.steve = {};
friends.steve.firstName = "Steve";
friends.steve.lastName = "Jobs";
friends.steve.number = "(408) 555-5555";
friends.steve.address1 = "1 Infinite Loop";
friends.steve.address2 = "Cupertino, CA 95014";

var myobj = {};
myobj.bill = new Object();
myobj.bill.firstName = "Bill";
myobj.steve = new Object();
myobj.steve.firstName = "Steve";

function list() {
    for (var key in friends) {
        console.log(key);
    }
}
function search(name) {
    for (var key in friends) {
        if (friends[key].firstName === name) {
//            console.log(friends[key]);
            display(friends[key]);
            return friends[key];
        }
    }
}
function display(friend) {
    console.log("First Name: "+friend.firstName);
    console.log("Last Name: "+friend.lastName);
    console.log("Number: "+friend.number);
    console.log("Address: "+friend.address1);
    console.log("         "+friend.address2);
}

//list();
//
//console.log("search...");
//search("john");
search("Steve");

//console.log(friends.steve.abc());
