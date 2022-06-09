var _href,
	thisWid,
	mobileH,
	nowSize,
	menuMode,
	preMode,
	nowMode=""

$(document).ready(function(){
	
	//서브에 나오는 비주얼 
	var wrap = $('#wrap')
	var visual = $('.mslides').slick({
		autoplay : true,
		dots: true,
		speed :3800,
		infinite: true,
		autoplaySpeed: 5000,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		zIndex:10
	})

	visual.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		wrap.removeClass()
		if(nextSlide === 1) {
			wrap.removeClass('line_color01')
			wrap.addClass('line_color02')
		} else {
			wrap.removeClass('line_color02')
			wrap.addClass('line_color01')
		}
	})

	wrap.addClass('line_color01')

	thisWid = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	nowSize = thisWid;

	var wrap = $('#wrap'),
	    btnAll = $('.btn_all'),
	    gnb = $('#gnb'),
	    mobileBg = $(".mobile_bg"),
	    body = $('body'),
	    btnClose = $('.allbtnclose'),
	    gmn = $('.gmn > a'),
		naviSub = $('.navi_sub'),
		subMn = $('.submn'),
		scrollTop = $(window).scrollTop(),
		header = $('#mainheader')

	function checkDevice(wdth) {
		if(wdth > 1980) {
			
			if(!wrap.hasClass('pc')){
				wrap.removeClass('mobile')
				wrap.addClass('pc')
				btnAll.off()
				btnClose.off()
				mobileBg.off()
				gmn.off()
				gnb.css({right:'', display:''})
				body.css({overflow: '', height: ''})
				wrap.css({marginLeft:''})
				mobileBg.css({display:'', opacity: ''})
				$("#mainheader").css({"z-index":100});
				naviSub.css({display:''})
				if(subMn.length > 0) {
					subMn.css({display: ''})
				}	
			}
			
			//mouseover
			$(".gmn").on("mouseenter focusin",function(e){
				$(this).find(".navi_sub").css({"display":"block"});
			});

			//mouseout
			$(".gmn").on("mouseleave focusout",function(e){
				$(this).find(".navi_sub").css({"display":"none"});
			});

			//상단고정
			/*
			var topBar = $("#mainheader").offset();
			
			$(window).scroll(function(){
				var docScrollY = $(document).scrollTop();
				
				if(docScrollY > 43) {
					header.stop().animate({marginTop:"-43px"},50,"easeOutCubic");
				} else {
					header.stop().animate({marginTop:0},50,"easeOutCubic");
				}
			});
			*/			

		} else {
			if(!wrap.hasClass('mobile')) {
				wrap.removeClass('pc')
				wrap.addClass('mobile')

				gnb.css({right:'-260px'})
				
				btnAll.on('click', function(e) {
					e.preventDefault()
					//body.css({overflow: 'hidden', height: '100%'})
					$('html, body').css({'overflow': 'hidden', 'height': '100%'});
					$('#element').on('scroll touchmove mousewheel', function(event) {
						event.preventDefault();
						event.stopPropagation();
					   return false;
					});
					$("#mainheader").css({"z-index":"auto"})
					gnb.css({display:'block'}).stop().animate({right:0},300, 'easeOutCubic')
					mobileBg.css({display:'block'}).stop().animate({opacity:0.7}, 300, 'easeOutCubic')
					wrap.stop().animate({marginLeft:'-150px'}, 300, 'easeOutCubic')
				})

				btnClose.on('click', function() {
					//body.css({overflow: '', height: ''})
					$('html, body').css({'overflow': '', 'height': '100%'});
					$('#element').off('scroll touchmove mousewheel');
					gnb.css({display:'', right:'-260px'})
					mobileBg.css({display:'', opacity: ''})
					wrap.css({marginLeft:''})
					$("#mainheader").css({"z-index":100})
				})

				mobileBg.on('click', function() {
					body.css({overflow: '', height: ''})
					gnb.css({display:'', right:'-260px'})
					mobileBg.css({display:'', opacity: ''})
					wrap.css({marginLeft:''})
				})

				gmn.on('click', function(e) {
					e.preventDefault()
					var el = $(e.currentTarget).closest('.gmn')
					if(el.hasClass('act')) {
						el.removeClass('act')
						el.find('.navi_sub').stop().slideUp()
					} else {
						$('.gmn').removeClass('act')
						naviSub.css({display:''})
						el.addClass('act')
						el.find('.navi_sub').stop().slideDown()
					}
				})
			}
		}
	}

	checkDevice(thisWid)

	//서브에서의 카테고리 메뉴 출력
	$("a.cfirst").click(function(){	
		//if(wrap.hasClass('mobile')) {
			if ($(".nav01 > .submn").css("display")=="none"){
				$(".nav01 > .submn").removeClass("act");
				$(".nav01 > div").hide();				
				$(".nav01 > div").addClass("act"); //main menu
				$(".nav01 > div").slideDown(200, "easeInOutCubic");
				//다른메뉴
				$(".nav02 > div").slideUp(200, "easeInOutCubic");
				$(".nav03 > div").slideUp(200, "easeInOutCubic");
			} else {
				$(".nav01 > div").removeClass("act");
				$(".nav01 > div").hide();				
				$(".nav01 > div").slideUp(200, "easeInOutCubic");
			};
		//}
	});

	$("a.csecon").click(function(){	
		//if(wrap.hasClass('mobile')) {
			if ($(".nav02 > .submn").css("display")=="none"){
				$(".nav02 > .submn").removeClass("act");
				$(".nav02 > div").hide();				
				$(".nav02 > div").addClass("act"); //main menu
				$(".nav02 > div").slideDown(200, "easeInOutCubic");
				//다른메뉴
				$(".nav01 > div").slideUp(200, "easeInOutCubic");
				$(".nav03 > div").slideUp(200, "easeInOutCubic");
			} else {
				$(".nav02 > div").removeClass("act");
				$(".nav02 > div").hide();				
				$(".nav02 > div").slideUp(200, "easeInOutCubic");
			};
		//}
	});

	$("a.cthird").click(function(){	
		//if(wrap.hasClass('mobile')) {
			if ($(".nav03 > .submn").css("display")=="none"){
				$(".nav03 > .submn").removeClass("act");
				$(".nav03 > div").hide();				
				$(".nav03 > div").addClass("act"); //main menu
				$(".nav03 > div").slideDown(200, "easeInOutCubic");
				//다른메뉴
				$(".nav01 > div").slideUp(200, "easeInOutCubic");
				$(".nav02 > div").slideUp(200, "easeInOutCubic");
			} else {
				$(".nav03 > div").removeClass("act");
				$(".nav03 > div").hide();				
				$(".nav03 > div").slideUp(200, "easeInOutCubic");
			};
		//}
	});

	var topBtn = $("#quickmenu")
	var floatPosition = parseInt(topBtn.css('top'));

	function MobileTop (thisWid, scrollTop) {
		if (thisWid > 800) {
			topBtn.css({display:''})
		} else {
			if (scrollTop > 220) {
				topBtn.css({display:'block'})
			} else {
				topBtn.css({display:'none'})
			}
		}
        
	}
  
	function fixHeader (scrollTop) {
		if(scrollTop > 0) {
			header.addClass('fixed')
		} else {
			header.removeClass('fixed')
		}
	}
	
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop()
		var newPosition = scrollTop + floatPosition + "px"
		
		topBtn.stop().animate({
			"top" : newPosition
		}, 500)

		MobileTop(thisWid, scrollTop)
		fixHeader(scrollTop)

	}).scroll()

	MobileTop(thisWid, scrollTop)
	fixHeader(scrollTop)
	
	$('.btn_top a').click(function () {
		$('body,html').stop().animate({
			scrollTop: 0
		}, 800);
		return false;
	})

	$(window).resize(function() {
		thisWid = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		scrollTop = $(window).scrollTop()
		checkDevice(thisWid)
		MobileTop(thisWid, scrollTop)
	})

});
