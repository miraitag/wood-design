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