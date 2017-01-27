$(document).ready(function() {

	window.addEventListener('keypress', playSound);
	window.addEventListener('keypress', addStyle);

	function playSound(e) {
		var keyCode = (e.keyCode)
		var audio = document.querySelector(`audio[data-key-code="${keyCode}"]`) 

		audio.play()
		audio.currentTime = 0;
	}

	function addStyle(e) {
		var keyCode = (e.keyCode)
		var key = document.querySelector(`.key[data-key-code="${keyCode}"]`) 

		key.classList.add('playing');

		setTimeout(function(){
       key.classList.remove('playing');
    }, 100);
	}


// JS to play audio on button click
	$('#1').click(function() {
		var playPromise = $('#clap').get(0).play();
	  playPromise.then(function() {
	  	//plays sounds
	  	$('#clap').get(0).play()
	  	$('#clap').get(0).currentTime = 0;

	  	//adds styling
	  	$('#1').addClass('playing')

	  	//timeout function to remove class in milliseconds
	  	setTimeout(function() {
      	$('#1').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#2').click(function() {
		var playPromise = $('#kick').get(0).play();
	  playPromise.then(function() {
	  	$('#kick').get(0).play()
	  	$('#kick').get(0).currentTime = 0;
	  })
	})

	$('#3').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

	$('#4').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

	$('#5').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

	$('#6').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

	$('#7').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

	$('#8').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

	$('#9').click(function() {
		var playPromise = $('#airhorn').get(0).play();
	  playPromise.then(function() {
	  	$('#airhorn').get(0).play()
	  	$('#airhorn').get(0).currentTime = 0;
	  })
	})

	$('#0').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;
	  })
	})

});