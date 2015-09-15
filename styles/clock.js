
window.onload = function() {


	var time = new Date().toLocaleTimeString()

	var timeStamp = document.getElementById('clock')
	
	var time = document.getElementById('time')

	var createEl = document.createElement('script')

	createEl.innerHTML = "00:64:00"




	timeStamp.onmousehover = function() {
		timeStamp.replaceChild(createEl, time)
	}





}