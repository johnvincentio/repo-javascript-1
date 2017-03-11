var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};


var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName+' '+person.lastName);
}

function list() {
    for (var idx in contacts) {
        printPerson(contacts[idx]);
    }
}

function search(lastName) {
    for (var idx in contacts) {
        if (contacts[idx].lastName === lastName)
            printPerson(contacts[idx]);
    }
}

function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
}

list();

search("Jones");

add("A", "B", "123456789", "abc@gmail.com");

list();


//printPerson(contacts[0]);
//printPerson(contacts[1]);
