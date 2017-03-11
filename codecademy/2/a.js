
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;

bob.setAge = function (newAge){
  bob.age = newAge;
};

bob.getYearOfBirth = function () {
  return 2014 - bob.age;
};
console.log(bob.getYearOfBirth());

bob.setAge(40);
