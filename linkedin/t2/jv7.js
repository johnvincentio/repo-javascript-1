
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
	let messageModal = document.querySelector("#artdeco-modal-outlet");
	// let messageModal = document.querySelector("#artdeco-modal-outlet");
	console.log('messageModal ', messageModal);
	if (! messageModal) return;

	let allBtns = messageModal.querySelectorAll(".artdeco-modal .artdeco-modal__actionbar button");
	console.log('allBtns ', allBtns);
	if (! allBtns) return;

	let deleteBtn = allBtns[0];			// to delete, use [1]
	console.log('deleteBtn ', deleteBtn);
	if (! deleteBtn) return;

	deleteBtn.click();

	// artdeco-modal__actionbar ember-view

	// let archiveBtn = messageModal.querySelector(".artdeco-button__icon");
	// console.log('archiveBtn ', archiveBtn);
	// if (! archiveBtn) return;

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
		}, delay + 800);

	}, delay + 400);

}, delay);
