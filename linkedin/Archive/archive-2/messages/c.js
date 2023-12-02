
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
	// console.log("container ",container);
	let items = container.querySelectorAll("artdeco-dropdown-item");
	for (let i = 0; i < items.length; i++) {
		let text = items[i].textContent.trim();
		// console.log('text ', text);
		if (text === "Delete") {
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
	// console.log('messageModal ', messageModal);
	if (! messageModal) return;

	let allBtns = messageModal.querySelectorAll(".artdeco-modal .artdeco-modal__actionbar button");
	// console.log('allBtns ', allBtns);
	if (! allBtns) return;

	let deleteBtn = allBtns[1];			// to delete, use [1], to not delete use [0]
	// console.log('deleteBtn ', deleteBtn);
	if (! deleteBtn) return;

	deleteBtn.click();
}

/*
* find the next message
*/
function findNext() {
	let elem = document.querySelector(".msg-conversations-container__conversations-list .msg-conversation-listitem");
	// console.log("elem ", elem);
	if (! elem) {
		return false;
	}
	elem.click();
	return true;
}

/*
* main
*/
let count = 0;
var intervalId = setInterval(function() {
	if (++count > 100) return;
	if (! findNext()) return;

	setTimeout(function() {
		deleteMessages();
		setTimeout(function() {
			confirmDelete();
		}, 1200);
	}, 500);
}, 2000);