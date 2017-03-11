var assert = require("assert");

function findOutlier(integers) {
    var cnt = [0, 0], nums = [];

    for (var i = 0; i < integers.length; i++) {
        var item = integers[i];
        var remainder = Math.abs(item) % 2;
        cnt[remainder]++;
        nums[remainder] = item;
        console.log("item "+item+" remainder "+remainder+" cnt[remainder] "+cnt[remainder]+" nums[remainder] "+nums[remainder]);
        if (cnt[0] > 1 && cnt[1] > 0) return nums[1];
        if (cnt[0] > 0 && cnt[1] > 1) return nums[0];
    }
}

//var a1 = -196518127;
//var a2 = Math.abs(a1) % 2;
//console.log("a2 "+a2);

//
//var ret = findOutlier([0, 1, 2]);
//assert.equal(ret, 1);
//
//var ret = findOutlier([1, 2, 3]);
//assert.equal(ret, 2);
//
//var ret = findOutlier([2, 6, 8, 10, 3]);
//assert.equal(ret, 3);
//
//var ret = findOutlier([0, 0, 3, 0, 0]);
//assert.equal(ret, 3);
//
//var ret = findOutlier([1, 1, 0, 1, 1]);
//assert.equal(ret, 0);
//
//var ret = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
//assert.equal(ret, 11);
//
//var ret = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
//assert.equal(ret, 160);

// -127721566,142036456,20041420,-49773054,132423752,117152830,-64826816,-67243270,-157375732,-76496578,158350820,-156838284,40849046,-82888564,-141837190,-184896564,-9229098,-44027754,-151633602,169639042,105679256,-94298658,151870836,111464478,69387224,-50338782,-147763204,11688336,-35202264,-181087094,56509524,169931520,63701784,-196518127,-144976486,-116245510

var ret = findOutlier([-127721566,142036456,20041420,-49773054,132423752,117152830,-64826816,-67243270,-157375732,-76496578,158350820,-156838284,40849046,-82888564,-141837190,-184896564,-9229098,-44027754,-151633602,169639042,105679256,-94298658,151870836,111464478,69387224,-50338782,-147763204,11688336,-35202264,-181087094,56509524,169931520,63701784,-196518127,-144976486,-116245510]);
assert.equal(ret, -196518127);




/*
function findOutlier(integers) {
    var cnt = [0, 0], nums = [];

    for (var i = 0; i < integers.length; i++) {
        var item = integers[i];
        var remainder = Math.abs(item) % 2;
        cnt[remainder]++;
        nums[remainder] = item;
        console.log("item "+item+" remainder "+remainder+" cnt[remainder] "+cnt[remainder]+" nums[remainder] "+nums[remainder]);
        if (cnt[0] > 1 && cnt[1] > 0) return nums[1];
        if (cnt[0] > 0 && cnt[1] > 1) return nums[0];
    }
}
*/
