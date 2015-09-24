/*
 * jQuery Select v1.0
 * https://github.com/ilnazkamaev/jQuerySelect
 *
 * Copyright 2014-2015 Ilnaz (http://ilnazkamaev.ru)
 *
 * Date: 24.09.2015
 *
 */

;(function($){

	$.fn.select = function(){

		var title  = this.children('.select__title'),
			list   = this.children('.select__list'),
			item   = list.children('.select__item'),
			input  = this.children('.select__input');

		title.on('click', function(){
			if(title.hasClass('active')){
				title.removeClass('active');
				list.slideUp(100);
				return false;
			}
			else{
				$('.select__title').removeClass('active');
				$('.select__list').slideUp(100);
				title.addClass('active')
				list.slideDown(100);
				return false;
			}
		});

		item.on('click', function(){
			item.removeClass('active');
			$(this).addClass('active');
			title.text($(this).text());
			input.val($(this).text());
			list.slideUp(100);
		});

		$(document).click(function(){
			title.removeClass('active');
			list.slideUp(100);
		});

		return this;
	};

})(jQuery);


