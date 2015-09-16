window.onload = function() {

	var timeStamp = $('#clock')[0],
		backgroundColor = $('#clockContainer')[0],	
		color1 = getRandomColor(),
		color2 = getRandomColor(),
		hexValue = $('#hexValue')[0],
		whiteLine = $('#whiteLine')[0]
		var width = new Date().getSeconds() * 5

	backgroundColor.style.background = 'radial-gradient(circle,' + color1 + ',' + color2 + ')'

	var getTime = function(){

		var fullDate = new Date()
		var hours = fullDate.getHours()
		if (hours < 10) hours = '0' + hours
		var minutes = fullDate.getMinutes()
		if (minutes < 10) minutes = '0' + minutes
		var seconds = fullDate.getSeconds()
		if (seconds < 10) seconds = '0' + seconds

		var currentTime = hours + ':' + minutes + ':' + seconds

		timeStamp.innerHTML = currentTime

	}

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

		var color3 = color1
		var color4 = color2

	function changeBgColor() {

		var c1change = color1[1] + color1[2] + color1[3] + color1[4] + color1[5] + color1[6]
		var c2change = color2[1] + color2[2] + color2[3] + color2[4] + color2[5] + color2[6]

		c1change = parseInt(c1change, 16) + 20
		c2change = parseInt(c2change, 16) + 20

		c1change = c1change.toString(16)
		c2change = c2change.toString(16)

		color1 = '#' + c1change
		color2 = '#' + c2change

		backgroundColor.style.background = 'radial-gradient(circle,' + color1 + ',' + color2 + ')'
		
	}

	function getHexVal() {
		hexValue.innerHTML = color1[1] + color1[2] + ':' + color1[3] + color1[4] + ':' + color1[5] + color1[6]
	}

	function whiteLineChange() {

		if (width < 300) width += 5

		if (width >= 300) width = 0

		whiteLine.style.width = width + 'px'
		return width
	}

	function changeStuff() {
		changeBgColor()
		getTime()
		getHexVal()
		whiteLineChange()
	}

	setInterval(changeStuff, 1000)



	




}