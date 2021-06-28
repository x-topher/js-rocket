var timer = null;
var countDownNumber = 3;

var changeState = function (state) {

	document.body.className = 'body-state'+state;
	
	clearInterval(timer);

	countDownNumber = 3;
	document.getElementById('countdown').innerHTML = countDownNumber;



	if (state == 2) {

		timer = setInterval (function () {
		document.getElementById('countdown').innerHTML = countDownNumber - 1;
		countDownNumber = countDownNumber - 1;

			if (countDownNumber <= 0) {
				changeState(3);
			};
		}, 1000);

	} else if (state == 3) {
		var success = setTimeout(function() {
			var randdomNumber = Math.round(Math.random()*10);
			console.log('randdomNumber: ', randdomNumber);
			if (randdomNumber > 5) {
				changeState(4);
			} else {
				changeState(5);
			}

		}, 2000);
	}
};