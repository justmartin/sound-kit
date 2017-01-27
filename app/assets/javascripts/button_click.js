$(document).ready(function() {

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

	  	$('#2').addClass('playing')

	  	setTimeout(function() {
      	$('#2').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#3').click(function() {
		var playPromise = $('#snare').get(0).play();
	  playPromise.then(function() {
	  	$('#snare').get(0).play()
	  	$('#snare').get(0).currentTime = 0;

	  	$('#3').addClass('playing')

	  	setTimeout(function() {
      	$('#3').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#4').click(function() {
		var playPromise = $('#kick-2').get(0).play();
	  playPromise.then(function() {
	  	$('#kick-2').get(0).play()
	  	$('#kick-2').get(0).currentTime = 0;

	  	$('#4').addClass('playing')

	  	setTimeout(function() {
      	$('#4').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#5').click(function() {
		var playPromise = $('#kick-3').get(0).play();
	  playPromise.then(function() {
	  	$('#kick-3').get(0).play()
	  	$('#kick-3').get(0).currentTime = 0;

	  	$('#5').addClass('playing')

	  	setTimeout(function() {
      	$('#5').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#6').click(function() {
		var playPromise = $('#bass').get(0).play();
	  playPromise.then(function() {
	  	$('#bass').get(0).play()
	  	$('#bass').get(0).currentTime = 0;

	  	$('#6').addClass('playing')

	  	setTimeout(function() {
      	$('#6').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#7').click(function() {
		var playPromise = $('#clap-2').get(0).play();
	  playPromise.then(function() {
	  	$('#clap-2').get(0).play()
	  	$('#clap-2').get(0).currentTime = 0;

	  	$('#7').addClass('playing')

	  	setTimeout(function() {
      	$('#7').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#8').click(function() {
		var playPromise = $('#hit').get(0).play();
	  playPromise.then(function() {
	  	$('#hit').get(0).play()
	  	$('#hit').get(0).currentTime = 0;

	  	$('#8').addClass('playing')

	  	setTimeout(function() {
      	$('#8').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#9').click(function() {
		var playPromise = $('#snap').get(0).play();
	  playPromise.then(function() {
	  	$('#snap').get(0).play()
	  	$('#snap').get(0).currentTime = 0;

	  	$('#9').addClass('playing')

	  	setTimeout(function() {
      	$('#9').removeClass('playing'); 
      }, 100);
	  })
	})

	$('#0').click(function() {
		var playPromise = $('#ohyeah').get(0).play();
	  playPromise.then(function() {
	  	$('#ohyeah').get(0).play()
	  	$('#ohyeah').get(0).currentTime = 0;

	  	$('#0').addClass('playing')

	  	setTimeout(function() {
      	$('#0').removeClass('playing'); 
      }, 100);
	  })
	})

});