$(document).ready(function(){
	$('.wd-carousel .wd-carousel__main').slick({
	  centerMode: true,
	  centerPadding: '10px',
	  slidesToShow: 5,
	  adaptiveHeight: true,
	  autoplay : true,
	  autoplaySpeed: 2000,
	  responsive: [
	    {
	      breakpoint: 1010,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '100px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 947,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '100px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 647,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '1vw',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '1vw',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
});