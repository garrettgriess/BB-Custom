// ==UserScript==
// @name        BB-Custom
// @include     https://chartbeat.com/labs/publishing/bigboard/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @grant       none
// ==/UserScript==
$(document).ready(function(){ 
	$('body').css("background-color","#090f14");
	$('.filled-bar').css("background-color","#233743");
	var i = 0;
	function loopForever() {
		setInterval(function() {
			$('.page-authors').css("color","rgba(255,255,255,.3)"); //Authors
			$('li a:not([href*=".html"])').css("color","#4a3963"); //landing pages
			$('li a[href*="/obituaries"]').css("color","#1d4a68"); //obit pages
			$('li a[href*="/obits"]').css("color","#1d4a68"); //deprecated obit pages
			$('li a[href*="/realestate"]').css("color","#1b5e60"); //real estate pages (when this line is after 'landing pages' this will override /realestate landing page color)
			$('li a[href*="/classifieds"]').css("color","#1b5e60"); //classifieds pages (when this line is after 'landing pages' this will override /classifieds landing page color)
			$('li a[href*="/marketplace"]').css("color","#1b5e60"); //marketplace pages (when this line is after 'landing pages' this will override /marketplace landing page color)
		}, 2000);
	}
	$(loopForever);
});
