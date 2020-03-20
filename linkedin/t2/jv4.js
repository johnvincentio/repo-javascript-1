
/*
* find the next message
*/
function findNext() {
	let elCard = document.querySelector(".msg-conversation-listitem");
	console.log("elCard ", elCard);
	elCard.click();
}


/*
* find the next message
*/
function findNext() {
	let elCard = document.querySelector(".msg-conversation-listitem");
	console.log("elCard ", elCard);
	elCard.click();
	return elCard;
}


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
function confirmDelete() {
	let messageModal = document.querySelector(".msg-conversation-card__toggle-archive-btn");
	console.log('messageModal ', messageModal);
	if (! messageModal) return;

	let archiveBtn = messageModal.querySelector(".artdeco-button__icon");
	console.log('archiveBtn ', archiveBtn);
	if (! archiveBtn) return;

	// archiveBtn.click();
}

var delay = 500;
setTimeout(function() {
	findNext();
}, delay);

setTimeout(function() {
	deleteMessages();
}, delay + 200);

setTimeout(function() {
	confirmDelete();
}, delay + 400);





