// Custom JavaScript
$(document).ready(function() {
    "use strict";
 
	// sticky header
	function headerSticky(){
		var windowPos=$(window).scrollTop();
		if( windowPos>20){
			$('.fixed-top').addClass("on-scroll");
			$('.light-nav-on-scroll').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-scroll').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		} else {
			$('.fixed-top').removeClass("on-scroll");
			$('.light-nav-on-load').addClass("dtr-menu-light").removeClass("dtr-menu-dark");
			$('.dark-nav-on-load').addClass("dtr-menu-dark").removeClass("dtr-menu-light");
		}
	}
	headerSticky();
	$(window).scroll(headerSticky);
	
	// main menu
	$('.main-navigation .sf-menu').superfish({
		delay: 100,                   
		animation: { opacity: 'show', height: 'show' },
		speed: 300,      
	});
	
	// menudropdown auto align      
	var wapoMainWindowWidth = $(window).width();
	$('.sf-menu ul li').mouseover(function(){
		// checks if third level menu exist         
		var subMenuExist = $(this).find('.sub-menu').length;            
		if( subMenuExist > 0){
			var subMenuWidth = $(this).find('.sub-menu').width();
			var subMenuOffset = $(this).find('.sub-menu').parent().offset().left + subMenuWidth;
	
			// if sub menu is off screen, give new position
			if((subMenuOffset + subMenuWidth) > wapoMainWindowWidth){                  
				var newSubMenuPosition = subMenuWidth;
				$(this).find('.sub-menu').css({
					left: -newSubMenuPosition,
					top: '0',
				});
			}
		}
	 }); // menu ends
		 	
	// scrollspy
	$('body').scrollspy({
		offset:	120,
		target:	'.dtr-scrollspy'
	});
	
	// nav scroll	
	if($('#dtr-header-global').length){
		var navoffset = $('#dtr-header-global').height();
		$('.dtr-nav a[href^="#"], .dtr-scroll-link').on("click", function(e) {
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - navoffset - 37
			}, "slow","easeInSine");
		});
	} else {
		$('.dtr-scroll-link').on("click", function(e) {
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, "slow","easeInSine");
		});
	}

	// responsive header nav scroll
	var mnavoffset = $('.dtr-responsive-header').height();
	var scroll = new SmoothScroll('.dtr-responsive-header-menu a', {
		speed: 500,
		speedAsDuration: true,
		offset: mnavoffset + 15
	});
		
	// responsive menu
	$('.main-navigation .dtr-nav').slicknav({
		label:"",
		prependTo: '.dtr-responsive-header-menu',
		closedSymbol: '',
		openedSymbol: '',
		allowParentLinks:"true",  
		menuButton: '#dtr-menu-button',
		closeOnClick:true
	});
	// responsive scrollspy
	$('.slicknav_nav').addClass("dtr-scrollspy")
			
	// responsive menu button
	$("#dtr-menu-button").on("click", function(e) { 
		$(".slicknav_nav").slideToggle(); 
	}); 
		
	// responsive menu hamburger
	var $hamburger = $("#dtr-menu-button");
		$hamburger.on("click", function(e) {
		$hamburger.toggleClass("is-active");
	});
	
	// testimonial
	$('.dtr-testimonial-style-center').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000
	});
	
	// testimonial
	$('.dtr-testimonial-style-left').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
		speed: 1000
	});
	
	// img slider 3col
	$('.dtr-img-slider-3col').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});
	
	// img slider 2col
	$('.dtr-img-slider-2col').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});
	
	// img slider 1col
	$('.dtr-img-slider-1col').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		infinite:true,
		autoplay: true,
		autoplaySpeed: 4500,
		responsive: [
		{
		  breakpoint: 768,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
	  ]
	});

	// wow animations
	if( $(window).outerWidth() >= 767 ) {
		new WOW().init({
			mobile: false,
		});
	}
	
	// parallax
	if( $(window).outerWidth() >= 767 ) {	 
		$(".parallax").parallaxie({
			speed: 0.60,
			size: 'auto',
		});
		$(".parallax.parallax-slow").parallaxie({
			speed: 0.30,
		});
	}

	// video popup
	$('.dtr-video-popup').venobox(); 
	
	// Popup video
	$(".popup-video").magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		preloader: false,
		fixedContentPos: false
	});

	// Popup image
	$('.popup-image').magnificPopup({
		type: 'image',
	});
	
	// Popup gallery
	$('.popup-gallery').magnificPopup({
		type: 'image',
		mainClass: 'mfp-fade',
		removalDelay: 150,
		gallery: {
			enabled: true
		},
	});

	//Contact form
	$(function () {
		var v = $("#contactform").validate({
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					target: "#result",
					clearForm: true
				});
			}
		});
	});
	//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#contactform #message').val('');
	
	//Quote form
	$(function () {
		var v = $("#quoteform").validate({
			submitHandler: function (form) {
				$(form).ajaxSubmit({
					target: "#quote-result",
					clearForm: true
				});
			}
		});
	});
	//To clear message field on page refresh (you may clear other fields too, just give the 'id to input field' in html and mention it here, as below)
	$('#quoteform #message').val('');
				
}); // document ready

// on load
$(window).on('load', function(){ 
	// preloader
	$('.dtr-preloader').delay(400).fadeOut(500);
	
	// portfolio		
	$('.dtr-portfolio-grid').imagesLoaded( function () {
		$('.dtr-portfolio-grid').isotope( 
			{
			itemSelector: '.dtr-portfolio-item',
			masonry: {},
			});
		});
		$('.dtr-filter-nav a').on('click', function () {
			$('.dtr-filter-nav a').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$('.dtr-portfolio-grid').isotope({
			filter: selector
		});
		return false;
	});

}); // close on load