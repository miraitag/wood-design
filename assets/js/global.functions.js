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




/*$('.wd-slider__content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
});*/

$(document).ready(function(){
  $('.wd-slider__content').slick({
      slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
  });
});