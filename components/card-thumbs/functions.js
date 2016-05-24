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
		thumbs.alto();
		self.find('.wd-card-thumbs__item-button').on('touchstart click', function(){
			thumbs.open(this);
		});
	},
	alto : function(){
		for(var i = 0; i < thumbs.el.find('.wd-card-thumbs__item').length; i++){
			var hh = thumbs.el.find('.wd-card-thumbs__item').eq(i).outerHeight();
			thumbs.el.find('.wd-card-thumbs__item').eq(i).height(hh);
		}
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