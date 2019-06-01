
(function() {       // self-executing closure

    'use strict';

    var p1 = {name: 'p1', h: 125, a: 145};
    var p2 = {name: 'p2', h: 600, a: 50};

    var s1 = p1.h + (5 * p1.a);
    var s2 = p2.h + (5 * p2.a);
    console.log("s1 "+s1+" s2 "+s2);

    if (s1 > s2) {
        console.log("Winner "+p1.name+" Score "+s1);
    }
    else if (s2 > s1) {
        console.log("Winner "+p2.name+" Score "+s2);
    }
    else {
        console.log("Game drawn");
    }
})();
