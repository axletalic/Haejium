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
		if(wdth > 1199) {
			
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

				gnb.css({right:'-250px'})
				
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
					wrap.stop().animate({marginLeft:'-250px'}, 300, 'easeOutCubic')
				})

				btnClose.on('click', function() {
					//body.css({overflow: '', height: ''})
					$('html, body').css({'overflow': '', 'height': '100%'});
					$('#element').off('scroll touchmove mousewheel');
					gnb.css({display:'', right:'-250px'})
					mobileBg.css({display:'', opacity: ''})
					wrap.css({marginLeft:''})
					$("#mainheader").css({"z-index":100})
				})

				mobileBg.on('click', function() {
					body.css({overflow: '', height: ''})
					gnb.css({display:'', right:'-250px'})
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