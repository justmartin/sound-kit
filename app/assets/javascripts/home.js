$(document).ready(function() {

	$('#1').click(function() {
		var playPromise = $('#clap').get(0).play();
	  playPromise.then(function() {
	  	$('#clap').get(0).play()
	  	$('#clap').get(0).currentTime = 0;
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

});