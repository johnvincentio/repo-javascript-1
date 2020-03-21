
(function () {
	console.log('in test script');
	$('.msg-conversations-container__convo-item').each((i, elem) => {
		console.log('found item')
	});
}());


(function () {
	console.log('in test script');
	$('.msg-conversations-container__convo-item').each(function(i, elem) {
		console.log('found item 99')
	});
}());


function jv() {
	console.log('in jv script');
	$(".msg-conversations-container__convo-item").each(function(i, elem) {
		console.log('found item 99')
	});
}

function jv() {
	console.log('in jv script');
	var a1 = $('li.msg-conversations-container__convo-item');
	console.log('a1 ', a1);
	var item1 = $( "a" )
	var a2 = a1.find(item1);
	console.log('a2 ', a2);
}
jv();


function jv() {
	console.log('in jv script');
	var a1 = $('li.msg-conversations-container__convo-item').find($("a"));
	console.log('a1 ', a1);
}
jv();



msg-conversation-listitem msg-conversations-container__convo-item msg-conversations-container__pillar ember-view

msg-conversations-container__conversations-list list-style-none ember-view

(function () {
	console.log('in test script');
	var a2 = $('.msg-conversations-container__conversations-list');
	console.log('a2 ', a2);
}());

(function () {
	console.log('in test script');
	var item1 = $(".msg-conversation-listitem");
	var a2 = $('.msg-conversations-container__conversations-list');
	console.log('a2 ', a2);

	var a3 = $(".msg-conversations-container__conversations-list").find(item1)
	console.log('a3 ', a3);
}());


var $main = $('main');


