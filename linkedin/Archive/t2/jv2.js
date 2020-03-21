
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

    setTimeout(() => {
      let archived = false;
			let dropdownItems = document.querySelectorAll("artdeco-dropdown-item");
			console.log('dropdownItems ', dropdownItems)

      // for (let i = 0; i < dropdownItems.length; i++) {
			// 	let txt = dropdownItems[i].textContent.trim();
			// 	console.log('txt ', txt);
/*
        switch (txt) {
          // add the word in your language
          case "Archivieren":
            archived = true;
            dropdownItems[i].click();
            break;
				}
*/
      // }
    }, 1000);
  };

  archiveFn();
})();


