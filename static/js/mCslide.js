$(document).ready(function(){
	
	//행사 슬라이드
	var calSlider = $( ".cal_list" ).bxSlider( {
		mode: 'vertical',		
		speed: 600,        
		pager: false,      
		controls: false,
		moveSlides: 1,     
		minSlides: 5,      
		maxSlides: 5,      
		slideMargin: 0,    
		auto: true,        
		autoHover: true,   
		controls: false    
	} );
	
	$( "a.calpre" ).on( 'click', function () { 
		calSlider.goToPrevSlide(); 
		return false;                        
	} );
	
	$( "a.calstop" ).on( 'click', function () {
		calSlider.stopAuto(); 
		return false;           
	} );

	$( "a.calnext" ).on( 'click', function () {
		calSlider.goToNextSlide(); 
		return false;           
	} );

	var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    //퀵메뉴 이동 슬라이드
	$('.quick_slick').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		speed: 700,
		fade: false,
		autoplay: false,
		arrows: false,
		cssEase: 'linear'
	});

	$('.quick_prev').on('click', function () {
		$('.quick_slick').slick('slickPrev')
	})
	$('.quick_next').on('click', function () {
		$('.quick_slick').slick('slickNext')
	})
	$('.quick_stop').on('click', function () {
		$('.quick_slick').slick('slickPause')
	})

	function quickwidth(){
		
		if(winWidth < 400) {
			$('.quick_slick').slick('slickSetOption', 'slidesToShow', 1, true);
		} else if(winWidth >= 401 && winWidth < 599) {
			$('.quick_slick').slick('slickSetOption', 'slidesToShow', 2, true);
		} else if(winWidth >= 600 && winWidth < 768) {
			$('.quick_slick').slick('slickSetOption', 'slidesToShow', 3, true);
        } else if(winWidth >= 769 && winWidth < 900) {
			$('.quick_slick').slick('slickSetOption', 'slidesToShow', 4, true);
		} else if(winWidth >= 901 && winWidth < 1430) {
			$('.quick_slick').slick('slickSetOption', 'slidesToShow', 5, true);
		} else {
			$('.quick_slick').slick('slickSetOption', 'slidesToShow', 5, true);
		} 
	}
    
	//사진 슬라이드 : 앨범의 슬라이드를 이용할 때 사용

	$('.photo_fade').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		speed: 800,
		fade: false,
		autoplay: false,
		prevArrow: '.photo_prev', //prev 버튼
		nextArrow: '.photo_next', //netx 버튼
		cssEase: 'linear'
	});

	function photowidth(){
		
		if(winWidth < 600) {
			$('.photo_fade').slick('slickSetOption', 'slidesToShow', 1, true);
		} else if(winWidth >= 601 && winWidth < 1300) {
			$('.photo_fade').slick('slickSetOption', 'slidesToShow', 2, true);
		} else {
			$('.photo_fade').slick('slickSetOption', 'slidesToShow', 6, true);
		} 
	}


	//팝업존 스크립트
	var popSlider = $( ".pop_list" ).bxSlider( {
		mode: 'vertical',		
		speed: 500,        
		pager: false,      
		controls: false,
		moveSlides: 1,     
		minSlides: 2,      
		maxSlides: 2,      
		slideMargin: 0,    
		auto: true,        
		autoHover: true,   
		controls: false    
	} );
	
	$( "a.popup_pre" ).on( 'click', function () { 
		popSlider.goToPrevSlide(); 
		return false;                        
	} );

	$( "a.popup_stop" ).on( 'click', function () {
		popSlider.stopAuto(); 
		return false;           
	} );

	$( "a.popup_next" ).on( 'click', function () {
		popSlider.goToNextSlide(); 
		return false;           
	} );

	// ban - slick
	var banSlide = $('.ban-slick').slick({
		dots: false,
		infinite: true,
		slidesToShow: 5,
		speed: 800,
		fade: false,
		autoplay: true,
		prevArrow: '.ban_btn_prev',
		nextArrow: '.ban_btn_next',
		cssEase: 'linear'
	});

	$('.ban_btn_stop').on('click', function(e){
		if($(e.currentTarget).hasClass('active')){
			$(e.currentTarget).removeClass('active');
			banSlide.slick('slickPlay');
		} else {
			$(e.currentTarget).addClass('active');
			banSlide.slick('slickPause');
		}
	})

	$('.ban_btn_prev').on('click', function(){
		banSlide.slick('slickPlay');
	})
	
	$('.ban_btn_next').on('click', function(){
		banSlide.slick('slickPlay');
	})

	function banwidth(){
		
		if(winWidth < 560) {
			banSlide.slick('slickSetOption', 'slidesToShow', 1, true);
		} else if(winWidth >= 561 && winWidth < 768) {
			banSlide.slick('slickSetOption', 'slidesToShow', 2, true);
		} else if(winWidth >= 768 && winWidth < 950) {
			banSlide.slick('slickSetOption', 'slidesToShow', 3, true);
		} else if(winWidth >= 951 && winWidth < 1430) {
			banSlide.slick('slickSetOption', 'slidesToShow', 4, true);
		} else {
			banSlide.slick('slickSetOption', 'slidesToShow', 6, true);
		} 
	}
	
	$(window).resize(function(){
		winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		banwidth();
		photowidth();
        quickwidth();
	})

	banwidth();
	photowidth();
    quickwidth();

	// 팝업 레이어 
	var layerPopup = $('.popup_on')
	var slickPopup = $('.pop-slick')
	var popTxt = $('.popup_hide')
	var sliderPopup = null
    if(layerPopup.find('.popup_layer').length > 0) {
		layerPopup.addClass('active')
		sliderPopup = slickPopup.slick({
			autoplay: true,
			autoplaySpeed: 3000
		})
		$('.popup_open').addClass('openact')
		popTxt.text('내 정보확인 닫기')
	} else {
		$('.popup_pc').css({ display: 'none' })
	}
    $('.popup_pre').on('click', function () {
		sliderPopup.slick('slickPrev')
	})
	$('.popup_next').on('click', function () {
		sliderPopup.slick('slickNext')
	})
	$('.popup_stop').on('click', function () {
		sliderPopup.slick('slickPause')
	})
	$('.open_pop').on('click', function () {
		togglePopup()
	})
	function togglePopup(){
		if(layerPopup.hasClass('active')){
			layerPopup.animate({
				opacity: 0
			}, 600).removeClass('active')
			$('.popup_open').removeClass('openact')
			popTxt.text('내 정보')
		} else {
			layerPopup.animate({
				opacity: 1
			}, 600).addClass('active')
			$('.popup_open').addClass('openact')
			popTxt.text('내 정보 닫기')
		}
	}
	
	// 퀵메뉴 슬라이드
var quicks = $('.quick_list')
	var quickSlide = null

	if(quicks.length > 1) {
		setQuick()
	}

	function setQuick() {
		quickSlide = quicks.slick({
			dots: false,
			infinite: true,
			slidesToShow: 5,
			slidesToScroll: 1,
			speed: 600,
			fade: false,
			autoplay: true,
			arrows: true,
			cssEase: 'linear',
			dots: false,
			responsive: [
				{
					breakpoint: 1199,
					settings: {
						slidesToShow:5,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 1050,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 950,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 630,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 450,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				}
			]
		})
	
		$('.quick_btn_pre').on('click', function(e) {
			e.preventDefault()
			quickSlide.slick('slickPrev')
		})
	
		$('.quick_btn_next').on('click', function(e) {
			e.preventDefault()
			quickSlide.slick('slickNext')
		})
    }
    
    $('.btn_quick_tit').on('click',function(e) {
	    e.preventDefault()
        quickSlide.slick('destroy')
        $('.btn_quick_tit').removeClass('on')
        $(e.currentTarget).addClass('on')
        $('.quick_tb').addClass('hide')
        $($(e.currentTarget).next()[0]).removeClass('hide')
        setQuick()
    })
});