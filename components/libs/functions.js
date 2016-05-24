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