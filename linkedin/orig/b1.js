(function() {
  const archiveFn = () => {
    let elCard = document.querySelector(".msg-conversation-listitem");
    //console.log(elCard);
    if (!elCard) {
      return setTimeout(() => {
        alert("No more message to archive");
      }, 250);
    }
    elCard.click();

    setTimeout(() => {
      let archived = false;
      let dropdownItems = document.querySelectorAll("artdeco-dropdown-item");

      for (let i = 0; i < dropdownItems.length; i++) {
        let txt = dropdownItems[i].textContent.trim();
        switch (txt) {
          // add the word in your language
          case "Archivieren":
            archived = true;
            dropdownItems[i].click();
            break;
        }
      }

      if (!archived) return archiveFn();

      setTimeout(() => {
        let messageModal = document.querySelector(".msg-conversation-card__toggle-archive-btn");
        if (!messageModal) return;

        let archiveBtn = messageModal.querySelector(".artdeco-button__icon");
        if (!archiveBtn) return;

        archiveBtn.click();
        archiveFn();
      }, 500);
    }, 1000);
  };

  archiveFn();
})();

