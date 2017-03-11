gQ.start = function(){

	gQ('#msg span').text('Hello.');

	var ticker = gQ.ticker();

	ticker.add(100,4,function(){
		//console.log("i'm called 4 times at 100 ms");
	});
	
	ticker.add(500,2,function(){
		//console.log("i'm called 2 times at 500 ms");
	})

	ticker.add(1000,-1,function(){
		//console.log("i'm called forever times at 1000 ms");
	})




	var count = 0;
	ticker.addEvent('tick',onTick);


	function onTick(e){
		++count;
		console.log("a tick just happened" , count);
		e.target.removeEvent('tick',onTick);
	}


};









