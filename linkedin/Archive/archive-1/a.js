
// https://www.linkedin.com/messaging

/*
will need to repeat the script

load the url
google console
paste in this script
execute the script

reload the url and repeat.
*/

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
	let messageModal = document.querySelector("#artdeco-modal-outlet");
	console.log('messageModal ', messageModal);
	if (! messageModal) return;

	let allBtns = messageModal.querySelectorAll(".artdeco-modal .artdeco-modal__actionbar button");
	console.log('allBtns ', allBtns);
	if (! allBtns) return;

	let deleteBtn = allBtns[1];			// to delete, use [1], to not delete use [0]
	console.log('deleteBtn ', deleteBtn);
	if (! deleteBtn) return;

	deleteBtn.click();
}

let count = 0;
var intervalId = setInterval(function() {
	if (count > 2) return;
	count++;

	let elCard = document.querySelector(".msg-conversations-container__conversations-list .msg-conversation-listitem");
	console.log("elCard ", elCard);
	if (! elCard) {
		return;
	}
	elCard.click();

	setTimeout(function() {
		deleteMessages();
		setTimeout(function() {
			confirmDelete();
		}, 1200);
	}, 500);
}, 2000);
