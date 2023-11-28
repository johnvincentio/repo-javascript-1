
setTimeout(function() {
	to.toggleClass('replay-occupied replay-empty');
}, delay + 750);

setTimeout(function() {
	from.toggleClass('replay-occupied replay-empty');
}, delay + 900);

delay = 2050;
setTimeout(function() {
	from.removeClass('highlighted');
	via.removeClass('highlighted');
	to.removeClass('highlighted');
	if (!APP.model.victories.isNextMove()) {
		$restart.removeAttr('disabled');
		$show_me.removeAttr('disabled');
	} else {
		handleShowMeNextMove();
	}
}, delay);


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

(function () {
	console.log('in test script');
}());
