window.onload = function() {

	var timeStamp = document.getElementById('clock')
	var	backgroundColor = document.getElementById('clockContainer')
	
	var	color1 = getRandomColor()
	var color2 = getRandomColor()

	backgroundColor.style.cssText = 'background: radial-gradient(circle,' +color1+',' +color2 + ');'


	var getTime = function(){

		var fullDate = new Date()
		var hours = fullDate.getHours()
		if (hours < 10) hours = '0' + hours
		var minutes = fullDate.getMinutes()
		if (minutes < 10) minutes = '0' + minutes
		var seconds = fullDate.getSeconds()
		if (seconds < 10) seconds = '0' + seconds

		var currentTime = hours + ':' + minutes + ':' + seconds

		timeStamp.innerText = currentTime

	}

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	function changeBgColor() {
		var c1change = color1[1] + color1[2] + color1[3] + color1[4] + color1[5] + color1[6]
		var c2change = color2[1] + color2[2] + color2[3] + color2[4] + color2[5] + color2[6]

		c1change = parseInt(c1change, 16) + 10
		c2change = parseInt(c2change, 16) + 10

		c1change = c1change.toString(16)
		c2change = c2change.toString(16)

		backgroundColor.style.background = 'radial-gradient(circle,' + '#' + c1change + ',' + '#' + c2change + ');'
	}



	getTime()
	setInterval(getTime, 1000)
	setInterval(changeBgColor, 1000)

	timeStamp.onmouseover = function() {
		this.innerHTML = color1[1] + color1[2] + ':' + color1[3] + color1[4] + ':' + color1[5] + color1[6]
	}

	timeStamp.onmouseout = getTime


	




}