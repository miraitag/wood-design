var thumbs = {
	el : $('.wd-card-thumbs'),
	off : '',
	init : function(){
		thumbs.el.find('.wd-card-thumbs__item').each(function(index, el) {
			var el = $(this);
			thumbs.load(el);
		});
	},
	load : function(self){
		thumbs.outer();
		self.find('.wd-card-thumbs__item-button').on('touchstart click', function(){
			thumbs.open(this);
		});
	},
	open : function(el){
		if( !$(el).siblings('.wd-card-thumbs__item-description').hasClass('open') ){
			thumbs.el.find('.wd-card-thumbs__item-description.open').removeClass('open');
			$(el).parent().removeAttr('style');
			$(el).siblings('.wd-card-thumbs__item-description').addClass('open');
		}else{
			$(el).siblings().removeClass('open');
			thumbs.off = $(el).siblings().offset().top;
			if( typeof thumbs.off !== 'undefined'){
				$('body,html').animate({scrollTop:thumbs.off})
			}
		}
	},
	outer : function(){
		$(document).on('touchstart click', function(e){
			if($(e.target).closest('.wd-card-thumbs__item').length === 0 ){
				thumbs.open();
			}
		});
	}
}

$(document).ready(function($) {
	if($('.wd-card-thumbs').length ){
		thumbs.init();
	}
});
var card = {
	el : $( '.wd-card'),
	alto :'',
	items : [],
	init : function(){
		card.resize();
		card.el.find('.wd-card__item-description__button').on('click', function(){
			if( !$(this).parents('.wd-card__item').hasClass('open')){
				card.el.find('.wd-card__item').removeClass('open');
				card.el.find('.wd-card__item button').text('+');
				if($(this).parent().find('a').length){
					card.el.find('a').removeClass('a');
					$(this).parent().find('a').addClass('open');
				}
				$(this).parents('.wd-card__item').addClass('open');
				$(this).text('-');
			}else{
				$(this).parents('.wd-card__item').removeClass('open');
				$(this).text('+');
			}
		});
	},
	resize : function(){
		window.addEventListener('resize', function(){
			card.el.find('.wd-card__item.open').removeClass('open');
			card.el.find('.wd-card__item button').text('+');
		}, false);
	}
};

$(document).ready(function($) {
	if( $('.wd-card').length ){
		card.init();
	}
});
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
var menu = {
	init : function() {
		self = $('.wd-menu');
		if(!self.length ) return false;

		self.each(function(index, el) {
			menu.loading();
		});
	},
	loading : function(){
		var mn = {
			element : self.find('.wd-menu__top'),
			trigger : self.find('.wd-menu__top-trigger'),
			second : self.parents('body').find('.wd-main'),
			panel : self.find('.wd-menu__panel'),
			open : function(){
				mn.trigger.on('touchstart touchend click', function(){
					mn.actionOpen();
				});
			},
			actionOpen : function( ){
				if( !self.hasClass('open') ){
					self.addClass('open');
					mn.second.addClass('collapsable');
					$('html, body').css('overflow', 'hidden');
				}else{
					self.removeClass('open');
					mn.second.removeClass('collapsable');
					$('html, body').removeAttr('style');
					mn.panel.find('.wd-menu__panel-content__item').removeClass('open');
				}
			},
			openSubmenu : function(){
				mn.panel.find('.wd-menu__panel-content__item').on('touchstart click', function(event){
					mn.actionSubmenu(event, this);
				});
			},
			actionSubmenu : function(ev, el){
				if( $(el).hasClass('submenu') && !$(el).hasClass('open') ){
					event.preventDefault();
					mn.panel.find('.wd-menu__panel-content__item').removeClass('open');
					$(el).addClass('open');
				}else if ( $(el).hasClass('open') && ev.target === $(el).find(' > a')[0] ){
					event.preventDefault();
					$(el).removeClass('open');
				}
			}
		}
		mn.open();
		mn.openSubmenu();
	}
};

$(document).ready(function() {
	menu.init();
});



$(document).ready(function(){
  $('.wd-slider').slick({
    slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 30000,
  });
});