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

