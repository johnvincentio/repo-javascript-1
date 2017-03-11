function Dog(breed) {
    this.breed = breed;
}
Dog.prototype.bark = function() {
    console.log("Woof");
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();
