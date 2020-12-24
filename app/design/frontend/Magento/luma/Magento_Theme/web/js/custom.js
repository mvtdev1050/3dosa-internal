require(['jquery','slick'], function($) { "use strict";
$(document).ready(function(){
	$('.multiple-products').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 3000,
		infinite: true,
		responsive: [
	        {
	          breakpoint: 1080,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 1
	          }
	        }
	  	]
	});
});
$(document).ready(function(){
	$('.multiple-videos').slick({
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		infinite: true,
		// prevArrow:"<div class='a-left control-c prev slick-prev'><img src='images/arrow.png'></div>",
		// nextArrow:"<div class='a-right control-c next slick-next'><img src='img/arrow.png'></div>"
	});
});
$(document).ready(function(){
	$('.multiple-testimonals').slick({
		slidesToShow: 1,
		arrows: true,
		slidesToScroll: 1,
		infinite: true,
		// prevArrow:"<div class='a-left control-c prev slick-prev'><img src='app/design/frontend/Magento/luma/web/images/dark-arrow.png'></div>",
		// nextArrow:"<div class='a-right control-c next slick-next'><i class='fa fa-angle-right'></i></div>"
	});
});


$(document).ready(function(){
	$(".single_video").click(function(){
		$(this).children('.video_play').hide();
		$(this).children('video').get(0).play();
		// $(this).data( "src" );
	});
});
});