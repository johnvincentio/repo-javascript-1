function Person(job, married) {
    this.job = job;
    this.married = married;
    this.speak = function() {
        console.log("Hello");
    };

}

var user = new Person("Codecademy Student", false);
user.speak();

var james = {
    job: "programmer",
    married: false,
    speak: function(str) {
        console.log(str);
    },
    sayJob: function() {
        console.log("Hi, I work as a "+this.job);
    }
};

james.speak("great");
james.speak("just okay");


james.sayJob();

james.job = "super programmer";

james.sayJob();
