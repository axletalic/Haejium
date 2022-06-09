//상단 검색 
function topFindCheck()
{
	if (!requireString($id('topFindFrm').search_key, "검색할 내용을 입력하세요.")) return false;
	return true;
}

//메인_공지사항 등 탭에 따른 내용 변경
function listTab(m_id,s_id)
{
	var tabSect = new Array("notice");
	var tabName = tabSect[s_id]+"0"+m_id;
	var limit = 5;

	for(var i=1; i<=limit; i++)
	{
		if(m_id == i) {
			$id(tabName).style.display					= "block";
			$(".noticetab0"+m_id).addClass("on");
		}
		else {
			$id(tabSect[s_id]+"0"+i).style.display		= "none";
			$(".noticetab0"+i).removeClass("on");
		}
	}
}


//메인 _ 학급바로가기
function classTab(m_id){
	$('.grade li').removeClass("on")
	for(var i=1; i<=6; i++) {
		if(m_id == i) {
			$id('class_list0'+m_id).style.display	= "block";
			$('.grade > li:eq('+(m_id-1)+')').addClass("on");
		} else {
			$id('class_list0'+i).style.display		= "none";
		}
	}
}//JAVASCRIPT::classTab()


//대메뉴 onmouseover 및 mouseout 처리
function quickMenu(id,disp)
{
	for(var i=1; i<=2; i++) {
		if(i == id && disp == 1) {
			$('.quicktab0'+id).addClass("on");
			$('#quick0'+id).removeClass("hide");
			$('.quickmenu0'+id).slick('slickSetOption', 'slidesToShow', 1, true);
		} else {
			$('.quicktab0'+i).removeClass("on");
			$('#quick0'+i).addClass("hide");
		}
	}
}	

function quickClose(id)
{
	$('.quick0'+id).removeClass("on");
}

$(document).ready(function(){
	//유튜브 재생/중지 
	$(".youtubeplay").on("click", function(){ $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*'); });
	$(".youtubepause").on("click", function(){ $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*'); });
	$(".youtubestop").on("click", function(){ $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); });
	
	//일반동영상 재생관련
	$( "a.mvplay" ).on('click', function () { 
		mvPlayer.play();                    
	});

	$( "a.mvpause" ).on('click', function () { 
		mvPlayer.pause();                    
	});

	$( "a.mvstop" ).on('click', function () { 
		mvPlayer.stop();                    
	});
	
	//알리미 창 닫기
	$( ".alimiclose" ).on('click', function () { 
		$(".alimi_wrap").addClass("hide");                   
	});

	setSubGuide();
	$(window).resize(function(){
		setSubGuide();
	});	
	
	//학교연혁 탭
	$('.his_year').on('click',function(e) {
		//e.preventDefault()
		$('.his_year').removeClass('on')
		$(e.currentTarget).addClass('on')
		$('.his_txtbox').addClass('hide')
        $($(e.currentTarget).find('.his_txtbox')).removeClass('hide')
	})
	

	//바로가기 퀵메뉴
	$('.quick_titbtn').on('click',function(e) {
		
		e.preventDefault();	
		var showval = $($(e.currentTarget).next()[0]);
		$('.quick_titbtn h4').removeClass('over');
		$('.popup_on').removeClass('active')
		$('.popup_on').removeClass('openact')

		if(showval.hasClass("show")) {
			$('.quick_titbtn > h4').removeClass('over');
			$('.quick_txtbox').removeClass('show');
			$(this).children().removeClass("over");
			$($(e.currentTarget).next()[0]).removeClass('show');
		} else {
			$('.quick_titbtn').addClass('over');
			$('.quick_txtbox').removeClass('show');
			$(this).children().addClass("over");	
			$($(e.currentTarget).next()[0]).addClass('show');
		}
    })

	$(".introbtn").on("click",function(e){
		$(".didim_layer").css({"display":"block"});
	});

	$(".didim_closebtn").on("click",function(e){
		$(".didim_layer").css({"display":"none"});
	});
    
    //오늘의 식단
	$('.foodtp').on('click',function(e) {
	    e.preventDefault()
		var showval = $($(e.currentTarget).parent().parent());
		$('.foodlay').removeClass("on");
		showval.addClass("on");
    })
    
    // family_site
	$('.site_tit').on('click', function(e){
		e.preventDefault();
		var btn = $(e.currentTarget);
		var el_box = btn.next();
		if(btn.hasClass('active')){
			btn.removeClass('active')
			el_box.stop().animate({ height: '0', })
		} else {
			$('.site_tit').removeClass('active')
			$('.site_lst').stop().animate({ height: '0', })
			btn.addClass('active')
			el_box.stop().animate({ height: '89px', })
		}
	});
});


//페이지 NAVI width 값 조절
function setSubGuide(){
	
	var screen = $(window).width();
	var wdth3 = '';
	var wdth2 = '';

	if( /MSIE 7.*Trident/.test( navigator.userAgent ) ) {
		wdth3 = '33%';
		wdth2 = '49.5%';
	} else {
		wdth3 = '33.3%';
		wdth2 = '50%';
	}

	if(screen < 799){
		var lis = $('.naviarea > ul > li');
		if (lis.length > 2) {
			$('.naviarea>ul>li').css({'width':wdth3});
		} else {
			$('.naviarea>ul>li').css({'width':wdth2});
		}
	} else {
		$('.naviarea>ul>li').css({'width':''});
	}
	$('.guide_wrap > .btn_home').css({'width':''});
}
