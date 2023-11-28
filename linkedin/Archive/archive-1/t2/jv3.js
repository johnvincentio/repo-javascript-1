
(function() {
	
	let elCard = document.querySelector(".msg-conversation-listitem");
	console.log("elCard ", elCard);

	let jv = document.querySelector(".msg-thread.relative.display-flex");
	console.log("jv ",jv);

	let jv1 = document.querySelector(".msg-thread.relative.display-flex artdeco-dropdown artdeco-dropdown-content");
	console.log("jv1 ",jv1);

	let jv2 = document.querySelector(".msg-thread.relative.display-flex artdeco-dropdown artdeco-dropdown-content artdeco-dropdown-item");
	console.log("jv2 ",jv2);

})();


var delay = 1000;
setTimeout(function() {
	from.addClass('highlighted');
}, delay);
setTimeout(function() {
	via.addClass('highlighted');
}, delay + 100);
setTimeout(function() {
	to.addClass('highlighted');
}, delay + 200);


var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");

// let dropdownItems = document.querySelectorAll("artdeco-dropdown-item");
// console.log('dropdownItems ', dropdownItems);

for (let i = 0; i < dropdownItems.length; i++) {
	let txt = dropdownItems[i].textContent.trim();
	