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
var card = {
	el : $( '.wd-card'),
	alto :'',
	items : [],
	init : function(){
		card.load();
		card.resize();
		card.el.find('.wd-card__item-description button').on('click', function(){
			if( !$(this).parents('.wd-card__item-description').hasClass('open')){
				card.el.find('.wd-card__item-description').removeClass('open');
				card.el.find('.wd-card__item-description button').text('+');
				card.el.find(".wd-card__item").removeAttr('style');
				$(this).parents('.wd-card__item-description').addClass('open');
				$(this).text('-');
				card.el.find('.wd-card__item-description:not(.open)').parents('.wd-card__item').height(card.alto);
			}else{
				$(this).parents('.wd-card__item-description').removeClass('open');
				$(this).text('+');
			}
		});
	},
	load : function(){
		loading = setInterval(function(){
			for( var image = 0 ; image < card.el.find(".wd-card__item").length; image++ ){
				if( card.el.find(".wd-card__item img")[image].complete ){
					card.images( image );
				}
			}
		}, 300);
	},
	images : function(index){
		if( card.items.length !== card.el.find(".wd-card__item").length ){
			card.items.push( card.el.find(".wd-card__item").eq(index).outerHeight());
		}else{
			clearInterval( loading );
			card.alto = card.items[0];
		}
	},
	resize : function(){
		window.addEventListener('resize', function(){
			card.el.find(".wd-card__item").removeAttr('style');
			card.alto = card.el.find('.wd-card__item-description:not(.open)').parents('.wd-card__item').height();
			card.el.find('.wd-card__item-description.open').parents('.wd-card__item').height(card.alto);
			card.el.find('.wd-card__item-description.open').removeClass('open');
			card.el.find('.wd-card__item-description button').text('+');
		}, false);
	}
};

$(document).ready(function($) {
	if( $('.wd-card').length ){
		card.init();
	}
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
	  autoplaySpeed: 5000,
  });
});