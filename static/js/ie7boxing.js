$(document).ready(function(){
	if( !($('html').hasClass('boxsizing')) ){
		$('.boxSized, .boxSized *').each(function(){ 
			var fullW = $(this).outerWidth(), 
				actualW = $(this).width(), 
				wDiff = fullW - actualW,
				newW = actualW - wDiff;
				$(this).css('width',newW);         
		});
	}
});