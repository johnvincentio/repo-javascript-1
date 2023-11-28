
(function() {
  const archiveFn = () => {
    let elCard = document.querySelector(".msg-conversation-listitem");
    console.log("elCard ", elCard);
    if (!elCard) {
      return setTimeout(() => {
        alert("No more message to archive");
      }, 250);
    }
    elCard.click();
  };
	let dropdownItems = document.querySelectorAll("artdeco-dropdown-item");
	console.log('dropdownItems ', dropdownItems)
  archiveFn();
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
