//
// https://www.basvanbeek.nl/miscellaneous/how-to-delete-all-linkedin-messages-at-once/

;(function () {
  setInterval(() => {
    let deleted = false;
    $('artdeco-dropdown-item').each((i, elem) => {
      let txt = $(elem).text().trim();
      if (txt === 'Delete') {
        deleted = true;
        $(elem).click();
      }
    });
    if (deleted){
      setTimeout(() => $('.msg-modal-delete-convo').find('.artdeco-button--primary').click(), 500)
    } else {
      $('.msg-conversation-card__list-action-icon').eq(1).click();
    }
  }, 350);
}());

