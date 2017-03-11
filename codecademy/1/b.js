
var outer = 21;
var safer = 35;
console.log("(1) outer "+outer);
console.log("(1) safer "+safer);

var jv = function() {
    outer = 15;
    var safer = 49;
    console.log("jv::outer "+outer);
    console.log("jv::safer "+safer);
};

jv();

console.log("(2) outer "+outer);
console.log("(2) safer "+safer);

var nameString = function (name) {
    return "Hi, I am" + " " + name;
};

console.log(nameString("ok"));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var computerChoice = getRandomIntInclusive(1, 3);


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var user = prompt("Choose from: 1 = Rock, 2 = Paper, 3 = Scissors");
console.log(user);

var computer = getRandomIntInclusive(1, 3);
console.log(computer);

if (user === computer) {
    console.log("Tie");
}
else {
    if (user === 1) {
        if (computer === 2) {
            console.log("Computer Wins");
        }
        else {
            console.log("User Wins");
        }
    }
    else if (user === 2) {
        if (computer === 3) {
            console.log("Computer Wins");
        }
        else {
            console.log("User Wins");
        }
    }
    else {
        if (computer === 1) {
            console.log("Computer Wins");
        }
        else {
            console.log("User Wins");
        }
    }
}
