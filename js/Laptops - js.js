/* global $, alert, console */

$(function(){
	'use strict';
	
	// Trigger Nice Scroll
	$("html").niceScroll({
		railpadding: {top: 71, right: 0, left: 0, bottom: -80},
		cursorcolor: '#888',
		cursorwidth: '8',
		cursorborder: '1px solid #888',
		cursorborderradius: 8
	});
	
	// Making a Button to scroll to top
	var scrollButtonTop = $("#scroll_top");
	$(window).scroll(function(){if($(this).scrollTop() >= 700){scrollButtonTop.show();} else{scrollButtonTop.hide();}});
	// Scrolling to Top
	scrollButtonTop.click(function(){$("html, body").animate({scrollTop: 0}, 600);});
	
	//  Adjust Slider Height
	var winH = $(window).height(), upperH = $('.upper-bar').innerHeight(),
		  navH = $('.navbar').innerHeight();
	$('.slider, .carousel-item').height(winH - navH);
	
	// Laptop Types Shuffle
	$('.laptop-type ul li').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).data('class') === 'Notebook'){
			$('.shuffle-imgs .col-md').css('opacity', 1);
		} else {
			$('.shuffle-imgs .col-md').css('opacity', '.08');
			$($(this).data('class')).parent().css('opacity', 1);
		}
	});
	
	// Carousel
	$('.carousel').carousel({interval: 4000});
});


// Loading Website
$(window).on('load', function(){
	"use strict";
	$(".loading .spinner").fadeOut("slow", function(){
		$(this).parent().fadeOut(1000, function(){
			$("body").css("overflow", "auto");
			$(this).remove();
		});
	});
});
