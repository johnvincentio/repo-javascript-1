
function processData(input) {
    console.log(">>> input :"+input+":");
    var parts = input.split(" ");
    console.log("parts :"+parts+":");
    var tests = parts[0];
    for (var j = 1; j <= tests; j++) {
        var item = parts[j];
        var str1 = "", str2 = "";
        for (var i = 0; i < item.length; i++) {
            if (i % 2 === 0)
                str1 += item[i];
            else
                str2 += item[i];
        }
        console.log(str1 + " " + str2);
    }
}
