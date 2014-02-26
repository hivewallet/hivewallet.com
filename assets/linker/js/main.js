jQuery(function($){ 

/* ============================================================
 * SEQUENCE.JS (main slider)
 * ============================================================ */

	var options = {
	    nextButton: true,
	    prevButton: true,
	    pagination: true,
	    animateStartingFrameIn: true,
	    autoPlay: true,
	    autoPlayDelay: 3000,
	    preloader: true
	};
	
	var mySequence = $("#sequence").sequence(options).data("sequence");
    

/* ============================================================
 * CAROUSEL
 * ============================================================ */
 
	$('.carousel').carousel({
	  interval: 4000
	});


/* ============================================================
 * PAGESLIDE
 * ============================================================ */

  $(".show-nav").pageslide({ direction: "left", modal: true });
  

/* ============================================================
 * BACKSTRETCH
 * ============================================================ */

  //$.backstretch("img/bg-image.jpg");



/* ============================================================
 * PAGESCROLL
 * ============================================================ */
	
	$("#nav ul li a[href^='#']").on('click', function(e) {
	 e.preventDefault();
	 $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 600);
	});



/* ============================================================
 * FORM VALIDATION
 * Created 09/27/09	
 * Questions/Comments: jorenrapini@gmail.com	
 * COPYRIGHT NOTICE	
 * Copyright 2009 Joren Rapini
 * ============================================================ */


	// Place ID's of all required fields here.
	required = ["email"];
	// If using an ID other than #email or #error then replace it here
	email = $("#email");
	errornotice = $("#error");
	// The text to show up within a field when it is incorrect
	emptyerror = "Fill out this field";
	emailerror = "Enter a valid email";

	$("#newsletter").submit(function(){	
		//Validate required fields
		for (i=0;i<required.length;i++) {
			var input = $('#'+required[i]);
			if ((input.val() == "") || (input.val() == emptyerror)) {
				input.addClass("needsfilled");
				input.val(emptyerror);
				errornotice.fadeIn(750);
			} else {
				input.removeClass("needsfilled");
			}
		}
		// Validate the e-mail.
		if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.val())) {
			email.addClass("needsfilled");
			email.val(emailerror);
		}

		//if any inputs on the page have the class 'needsfilled' the form will not submit
		if ($(":input").hasClass("needsfilled")) {
			return false;
		} else {
			errornotice.hide();
			return true;
		}
	});
	
	// Clears any fields in the form when the user clicks on them
	$(":input").focus(function(){		
	   if ($(this).hasClass("needsfilled") ) {
			$(this).val("");
			$(this).removeClass("needsfilled");
	   }
	});



});
