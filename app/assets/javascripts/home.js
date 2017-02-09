$(document).ready(function() {

	window.addEventListener('keypress', playSound);
	window.addEventListener('keypress', addStyle);

	function playSound(e) {
		var keyCode = e.keyCode
		var audio = document.querySelector("audio[data-key-code='"+keyCode+"']");
		console.log(audio);
		audio.play()
		audio.currentTime = 0;
	}

	function addStyle(e) {
		var keyCode = (e.keyCode)
		var key = document.querySelector(".key[data-key-code='"+keyCode+"']"); 

		key.classList.add('playing');

		setTimeout(function(){
       key.classList.remove('playing');
    }, 100);
	}

});