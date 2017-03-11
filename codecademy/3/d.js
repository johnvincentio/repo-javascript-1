function Person(name, age) {
    this.name = name;
    this.age = age;
}

var family = [];
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);

for (var idx in family) {
    var item = family[idx];
    console.log(item.name);
}
