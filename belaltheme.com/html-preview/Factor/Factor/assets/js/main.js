(function($) {
	'use strict';
    jQuery(document).ready(function() {	
		/* PRELOADER JS*/
			$(window).load(function() { 
				$('.status').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			});  
		/* END PRELOADER JS*/
		
		/* START STICKY MENU JS */
			$('a').on('click', function(e){
				var anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 50
				}, 1500);
				e.preventDefault();
			});		
			
			$(window).on('scroll',function(){
		    if($(this).scrollTop() >0) {
		    	$('.menu-top').addClass('sticky_menu');
			}
			else{
			   $('.menu-top').removeClass('sticky_menu');
			}
			});
			$(document).on('click', '.navbar-collapse.in', function (e) {
				if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
					$(this).collapse('hide');
				}
			});

		/* END STICKY MENU JS */
			
		/* START COUNTER-UP JS */	
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		/* END COUNTER-UP JS */
		
		/* START TESTIMONIAL JS */
			$("#testimonial-slider").owlCarousel({
				items:1,
				loop:true,
				nav: true,
				navText: false,
				dots: true,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination:true,			
				slideSpeed:1000,
				autoPlay:true
			});
		/* END TESTIMONIAL JS */
					
		/*START MIXITUP JS*/
			// START LIGHTBOX
			  lightbox.option({
				'resizeDuration': 500,
				'wrapAround': true
			  })
			  
			// jQuery MixItUp
			$('.portfolio_item_area').mixItUp({});
		/*END MIXITUP JS*/
		
		/* START CLIENTS-AREA JS */
			$(".partner-images").owlCarousel({
				autoplay:true,
				items: 8,
				margin: 30,
				responsive:{
					0:{
						items:2
					},
					400:{
						items:3
					},
					600:{
						items:5
					},
					992:{
						items:8
					}
				}
			
			});
		});		
		/* START CLIENTS-AREA JS */	
		
		/*  Stellar for background scrolling  */
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
		/* End Stellar for background scrolling  */	
	
})(jQuery);	