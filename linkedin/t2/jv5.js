
/*
* Delete messages
*/
function deleteMessages() {
	let container = document.querySelector(".msg-thread.relative.display-flex artdeco-dropdown artdeco-dropdown-content");
	console.log("container ",container);
	let items = container.querySelectorAll("artdeco-dropdown-item");
	
	for (let i = 0; i < items.length; i++) {
		let txt = items[i].textContent.trim();
		console.log('txt ', txt);
		switch (txt) {
			case "Delete":
				items[i].click();		// click on delete option
				break;
		}
	}
}

/*
* Confirm delete
*/
function confirmDelete(el) {
	let messageModal = el.querySelector(".msg-conversation-card__toggle-archive-btn");
	console.log('messageModal ', messageModal);
	if (! messageModal) return;

	let archiveBtn = messageModal.querySelector(".artdeco-button__icon");
	console.log('archiveBtn ', archiveBtn);
	if (! archiveBtn) return;

	// archiveBtn.click();
}

var delay = 500;
setTimeout(function() {
	let elCard = document.querySelector(".msg-conversations-container__conversations-list .msg-conversation-listitem");
	console.log("elCard ", elCard);
	elCard.click();

	setTimeout(function() {
		deleteMessages();

		setTimeout(function() {
			confirmDelete(elCard);
		}, delay + 400);

	}, delay + 400);

}, delay);








