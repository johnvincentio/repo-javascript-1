
var variables = {
    IMAGE_1a: "http://c2.staticflickr.com/2/1627/24158981729_a6a10e95db_b.jpg",
    IMAGE_1b: "http://c2.staticflickr.com/2/1627/24158981729_a6a10e95db_m.jpg",

    IMAGE_2a: "http://c2.staticflickr.com/2/1714/24231194070_e818fd763e_b.jpg",
    IMAGE_2b: "http://c2.staticflickr.com/2/1714/24231194070_e818fd763e_m.jpg",

    IMAGE_3a: "http://c2.staticflickr.com/2/1461/24444422151_fb98264155_b.jpg",
    IMAGE_3b: "http://c2.staticflickr.com/2/1461/24444422151_fb98264155_m.jpg",

    IMAGE_4a: "http://c2.staticflickr.com/2/1706/23898567464_2ea4836476_b.jpg",
    IMAGE_4b: "http://c2.staticflickr.com/2/1706/23898567464_2ea4836476_m.jpg",

    TITLES_1: "Title 1",
    TITLES_2: "Title 2",
    TITLES_3: "Title 3",
    TITLES_4: "Title 4",

    LOREM_1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, magni!"
};

window.onload = function() {
    var body = document.body.innerHTML;
    for(varname in variables) {
        body = body.replace(new RegExp('#'+varname+'#', 'g'), variables[varname]);
    }
    document.body.innerHTML = body;
};
