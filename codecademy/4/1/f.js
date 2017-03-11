/*
JavaScript automatically defines the prototype for class with a constructor. For example, our Dog constructor ensures that the Dog prototype has a breed property. Remember, the Dog prototype keeps track of what Dog has, doesn't have, can, or can't do.
*/
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() {
    console.log("Woof Woof");
};

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();
