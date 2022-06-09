/* vim: set tabstop=4 shiftwidth=4 syntax=javascript: */
/* 2009.8.10일 이후 웹접근성 때문에 alertWindow함수 사용안함 */

//common -- call element 
function $id() {
	var ret = [];
	
	for ( var i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] == 'string') {
			ret[ret.length] = document.getElementById(arguments[i]);
		} else {
			ret[ret.length] = arguments[i];
		}
	}
	return ret[1] ? ret : ret[0];
}

//레이어 표시
function show_layer(layid)
{
	$id(layid).style.display = "block";
}

function hide_layer(layid)
{
	$id(layid).style.display = "none";
}

// 팝업창 표시 : 위치자동
function openWin(uri, target, width, height, scrollbars, resize, pos)
{
	var xy_pos = "";
	if (pos)
	{
		xy_pos  = ",left=" + (Math.round(screen.width/2) - Math.round(width/2));
		xy_pos += ",top="  + (Math.round(screen.height/3) - Math.round(height/3));
	}
	var remote = window.open(uri, target,
		"width=" + width +
		",height=" + height +
		",scrollbars=" + scrollbars +
		",resizable=" + resize +
		xy_pos +
		",toolbar=no,location=no" +
		",directories=no,mebar=no,status=yes");
	remote.focus();
	return remote;
}

// 팝업창 표시 : 위치지정
function openTopLeftWin(uri, target, top, left, width, height, scrollbars, resize)
{
	var remote = window.open(uri, target,
		"width=" + width +
		",height=" + height +
		",top="  + top +
		",left="  + left +
		",scrollbars=" + scrollbars +
		",resizable=" + resize +
		",toolbar=no,location=no" +
		",directories=no,mebar=no,status=yes");
	remote.focus();
	return remote;
}

// 길이 체크함수 : 2byte 문자
function lengthByte (str)
{
	// IE, 글자수 측정시 2byte 문자 감안
	var len = str.length;
	for (var i=0; i<str.length; i++)
	{
		if (str.charCodeAt(i) > 255) len++;
	}
	return len;
}

// 문자열 추출 함수
function substringByte (str, byte)
{
	// IE, 2byte 문자를 감안하여 문자열 부분 추출
	var len = 0;
	var new_str = "";
	for (var i=0; i<str.length; i++)
	{
		len++;
		if (str.charCodeAt(i) > 255) len++;
		if (byte < len) return new_str;
		else new_str += str.charAt(i);
	}
	return new_str;
}

// 특수문자 체크 함수
function Check_nonChar(id_text)
{
	var nonchar = '`@#$%&\|<>;"';
	var i ; 
	for ( i=0; i < id_text.length; i++ )
	{
		if( nonchar.indexOf(id_text.substring(i,i+1)) > 0)
		{
			break ; 
		}
	}
	if ( i != id_text.length )
	{
		return false ; 
	} else {
		return true ;
	} 
	return false;
}

//NULL 문자 체크 함수 
function spaceSout ( str )
{
	var len = str.length;
	var temp = "";
	for ( i = 0; i < len; i++) {
		ch = str.charAt(i);
		if ( ch != ' ' ) {
			temp += str.charAt(i);
		}
	}
	return temp;
}

// TEXT 필수입력 체크
function requireString (form, msg)
{
	if (spaceSout(form.value) == "")
	{
		alert(msg);
		form.focus();
		return false;
	}
	return true;
}

// 라디오 버튼 선택 체크 함수 
function requireSelect (form, str)
{
	var check = -1;

	for(var i=0; i<form.length; i++)
	{
		if(form[i].checked)
		{
			check += 1;
		}
	}

	if(check<0)
	{
		alert(str+"을 선택해주세요.");
		return false;
	}
	return true;
}

// TEXT 필수입력 체크
function stringLength (string, min, max)
{
	// 문자열 길이 체크
	if (string.length < min || string.length > max) return false;
	return true;
}

// TEXT 길이가 적합한지 체크
function lengthCheck (form, min, max, str, msg)
{
	var err = "";
	if (!requireString(form, msg)) return false;
	if (form.value.length)
	{
		if (min == max && !stringLength(form.value, min, max))
			err = str + "는 " + min +"자로 입력해주세요.";
		else if (min != false && max != false && min < max && !stringLength(form.value, min, max))
			err = str + "는 " + min +"자 이상 " + max + "자 이내로 입력해주세요.";
		else if (min == false && max > 0 && !stringLength(form.value, 1, max))
			err = str + "는 " + "최대 " + max + "자 이내로 입력해주세요.";
		else if (min > 0 && max == false && !stringLength(form.value, min, 100000000))
			err = str + "는 " + "최소 " + min + "자 이상 입력해주세요.";
	}
	if (err != "")
	{
		alert(err);
		form.focus();
		return false;
	}
	return true;
}

// 주어진 문자열(string)에서 허용된 문자들(permitChar)만 존재할 경우 참
function permitCharCheck (string, permitChar)
{
	var retValue = true;
	var count;
	for (var i = 0; i < string.length; i++)
	{
		count = 0;
		for (var j = 0; j < permitChar.length; j++)
		{
			if (string.charAt(i) == permitChar.charAt(j))
			{
				count++; break;
			}
		}
		if (count == 0)
		{
			retValue = false; break;
		}
	}
	return retValue;
}

// 주어진 문자열(string)에서 허용된 문자들(permitChar)만을 얻음
function permitChars (string, permitChar)
{
	var retValue = "";
	for (var i = 0; i < string.length; i++)
	{
		for (var j = 0; j < permitChar.length; j++)
		{
			if (string.charAt(i) == permitChar.charAt(j))
			{
				retValue += string.charAt(i);
			}
		}
	}
	return retValue;
}

// 주어진 문자열(string)에서 지정한 문자(includeChar)가 존재하면 참
function includeCharCheck (string, includeChar)
{
	for (var i = 0; i < string.length; i++)
	{
		for (var j = 0; j < includeChar.length; j++)
		{
			if (string.charAt(i) == includeChar.charAt(j)) return true;
		}
	}
	return false;
}

// 해당 입력양식의 첫번째 TEXT 항목 또는 PASSWORD 항목에
// 자동으로 포커스를 넣어주는 함수
function firstFieldFocus (form)
{
	if (typeof(form) == 'undefined') return;
	var count = form.elements.length;
	for (var i=0; i<count; i++)
	{
    	if (form.elements[i].type == "text" || form.elements[i].type == "password")
		{
			if (form.elements[i].value.length == 0) form.elements[i].focus();
			return;
		}
	}
}

// 현재 선택된 SELECT 항목의 선택값을 얻는 함수
function getSelected (select, mode)
{
	if (select == null) return null;
	if (mode == "index") return select.selectedIndex;
	else if (mode == "value") return select.options[select.selectedIndex].value;
	else if (mode == "text") return select.options[select.selectedIndex].text;
}

function getSelectedValue (select) { return getSelected(select, "value"); }
function getSelectedText (select) { return getSelected(select, "text"); }
function getSelectedIndex (select) { return getSelected(select, "index"); }

// SELECT 항목중 특정 OPTION 항목을 기본적으로 선택(SELECTED)되도록 하는 함수
function setSelected (select, mode, value)
{
	if (select == null) return false;
	if (mode == "index")
	{
		select.selectedIndex = value;
		return true;
	}
	else
	{
		for (var i=0; i<select.options.length; i++)
		{
			if ((mode == "value" && select.options[i].value == value) ||
				 (mode == "text" && select.options[i].text == value))
			{
				select.selectedIndex = i;
				return true;
			}
		}
	}
	return false
}

function setSelectedByValue (select, value) { return setSelected(select, "value", value); }
function setSelectedByText (select, value) { return setSelected(select, "text", value); }
function setSelectedByIndex (select, value) { return setSelected(select, "index", value); }

//체크박스 처리 함수 
function checkboxCheck(form, mode)
{
	for (var i=0; i<form.elements.length; i++)
	{
		var e = form.elements[i];
		if (e.type == "checkbox")
		{
			if (mode == 1) e.checked = true;
			if (mode == 2) e.checked = false;
			if (mode == 3) e.checked = !e.checked;
		}
	}
}

function checkboxAllCheck(form) { checkboxCheck(form, 1); }
function checkboxAllUnCheck(form) { checkboxCheck(form, 2); }
function checkboxReverseCheck(form) { checkboxCheck(form, 3); }

//  input필드 생성 함수 
function makeInputElement(type, name, value)
{
	if (type == null || name == null) alertWindow("", "makeInputElement call error");

	var type = type;
	var name = name;
	var value = value;
	var tmp_object = document.createElement("INPUT");
	tmp_object.setAttribute("type", type);
	tmp_object.setAttribute("name", name);
	tmp_object.setAttribute("id", name);
	tmp_object.setAttribute("value", value);
	return tmp_object;
}

//select선택 처리 함수
function goSite(select)
{
	var uri		 = select.options[select.selectedIndex].value;
	var goUrl	 = window.location.replace(uri);
}

//삭제여부 체크
function delCheck(url,term)
{
	if(confirm("삭제 후에는 복구가 불가능합니다.\n해당 "+term+" 삭제하시겠습니까?"))
		this.location.href=url;
}

//경고창 표시 후 해당 페이지로 연결
function isConfirm(msg, uri)
{
	if(confirm(msg))
		location.replace(uri);
}

//form문 실행
function isSearch() 
{
	return true;
}

//검색 체크
function searchFormCheck()
{
	if (document.forms.searchFrm.search_key.value == "")
	{
		alert("검색할 내용을 입력하세요.");
		document.forms.searchFrm.search_key.focus();
		document.forms.searchFrm.search_key.select();
		return false;
	}
	return true;
}

//파일객체에서 찾아보기 → 이미지로 처리할 때 사용되는 함수 
function file_change(file) 
{ 
    $id("file_name").value = file; 
} 

//이미지 변경 함수
function ImgChange(layid,imgsrc)
{
	document.images[layid].src = imgsrc;
}

//창 닫기 함수
function WinClose() 
{
	window.self.close();
}

//이전 페이지로 이동 함수
function goBackPage()
{
	history.back();
}

//이미지보기 처리 함수 
function imageViewWindow(obj, width, height)
{
	if(width == "" || height == "")
	{
		width		= 800;
		height		= 600;
	}
	else
	{
		width		= parseInt(width) + 6;
		height		= parseInt(height) + 6;
	}
	var	view_width	= width;
	var	view_height	= height;
	var top				= 0;
	var left				= 0;
	var scrollbars = "yes";
	var resizable	= "yes";

	if ( (height > (screen.availheight - 36)) && (width  > (screen.availwidth - 10)) )
	{
		view_width	= screen.availwidth - 10;
		view_height = screen.availheight - 36;
	}
	else if ( height > (screen.availheight - 36) )
	{
		view_width	+= 18;
		view_height = screen.availheight - 36;
	}
	else if ( width > (screen.availwidth - 10) )
	{
		view_width	= screen.availwidth - 10;
		view_height += 18;
	}
	else
	{
		scrollbars	= "no";
		resizable	= "no";
	}
	
	if(view_width > 1100) view_width = 1100; else view_width = view_width;
	if(view_height > 768) view_height = 768; else view_height = view_height;

	left		= ( screen.availwidth - view_width - 10 )/2;
	top		= ( screen.availheight - view_height - 36 )/2;
	var seting	= "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars="+scrollbars+", resizable="+resizable+", copyhistory=no, left="+left+", top="+top+", width="+view_width+",height="+view_height;
	
	window.open("../base/tool/imgview.php?img="+obj+"&wid="+view_width+"&hei="+view_height, "imgwin", seting);
}

//이미지 크기에 따라 마우스를 이동
function imagesMove( event )
{
	if( navigator.userAgent.indexOf("MSIE") == -1 )
	{
		window.scroll( ( event.pageX - document.body.scrollWidth ), ( event.pageY - document.body.scrollHeight ));
	}
	else
	{
		var move_x	= event.clientX - document.body.clientWidth/2;
		var scr_width	= document.body.clientWidth/6;
		if (move_x > scr_width)
		{
			document.body.scrollLeft	= document.body.scrollLeft + (move_x-scr_width)*(move_x-scr_width)*0.001;
		}
		else if (move_x < -scr_width)
		{
			document.body.scrollLeft	= document.body.scrollLeft - (move_x+scr_width)*(move_x+scr_width)*0.001;
		}

		var move_y	= event.clientY - document.body.clientHeight/2;
		var scr_height	= document.body.clientHeight/6;
		if (move_y > scr_height)
		{
			document.body.scrollTop	= document.body.scrollTop + (move_y-scr_height)*(move_y-scr_height)*0.001;
		}
		else if (move_y < -scr_height)
		{
			document.body.scrollTop	= document.body.scrollTop - (move_y+scr_height)*(move_y-scr_height)*0.001;
		}
	}
} 

//이미지 사이즈 조정
function imageResize()
{
	var num		= img_resize_num;
	var width	= 0;
	for(var i = 0; i < num; i++)
	{
		var obj	= eval("document.all.resizeimg"+i);
		width	= obj.width;
		if( width > 570 )
		{
			obj.width = 570;
		}
	}
}

//달력 월별 표시 레이어
function monthLayer(stat)
{
	if(stat == "Y")
	{
		$id('cal_layer').style.display = "block";
	} else {
		$id('cal_layer').style.display = "none";
	}
}

function imgChg(irc, cid)
{
	$id('calImg0'+cid).src			= "./images/main/calendar_"+irc+".gif";
}

var CurrentFontSize = 1;
function fontControl(sfg) {
	var obj;
	obj = $id("wrap");
	if(sfg == "b") {
		if (CurrentFontSize < 2.5) {
			CurrentFontSize = CurrentFontSize + 0.1;
		}
		obj.style.fontSize = CurrentFontSize + "em";
	} else if(sfg == "s") { 
		if (CurrentFontSize > 0.7) {
			CurrentFontSize = CurrentFontSize - 0.1;
		}
		obj.style.fontSize = CurrentFontSize + "em";
	} else {
		CurrentFontSize = 1;
		obj.style.fontSize = CurrentFontSize + "em";
	}
}

//글자크기 조절하는 기능 
function setFontSize(s)
{
	var defaultFontSize = "9pt";
	
	obj = $id("wrap");
	var objFontSize = obj.style.fontSize;
	var newFontSize = parseInt(s)
	if (!objFontSize) { objFontSize = parseInt(defaultFontSize); }
	if(s == 0)
	{
		obj.style.fontSize = defaultFontSize;
	} else {
		obj.style.fontSize = newFontSize+"px";
	}
}

// function sound_btnSet(bid,clickName) {
// 	for(var i=1; i<=3; i++) {
// 		if(bid == i) {
// 			document.images[clickName+bid].src	= "./site/images/sub/"+clickName+bid+"_a.gif";
// 		} else {
// 			document.images[clickName+i].src = "./site/images/sub/"+clickName+i+".gif";
// 		}
// 	}
// }

function sound_btnSet(bid,clickName) {
	var iname = clickName+bid;
	for(var i=1; i<=3; i++) {
		if(bid == i) {
			document.images[iname].src	= "./site/images/sub/"+iname+"_a.gif";
		} else {
			document.images[clickName+i].src = "./site/images/sub/"+clickName+i+".gif";
		}
	}
}

function soundPause(no) {
	if($id('MediaPlayer').PlayState==1)
		$id('MediaPlayer').Play();
	else if ($id('MediaPlayer').PlayState==2)
		$id('MediaPlayer').Pause();
}

//영어+숫자 혼합 체크 
function is_valCheck(string) {
	var e_count = 0;
	var n_count = 0;
	for(var i=0; i<string.length; i++)
	{
		for(var j=0; j<english_strings.length; j++)
		{
			if (string.charAt(i) == english_strings.charAt(j))
			{
				e_count++; break;
			}
		}

		for(var k=0; k<number.length; k++) 
		{
			if (string.charAt(i) == number.charAt(k))
			{
				n_count++; break;
			}
		}
	
	}
	
	if(e_count == 0 || n_count == 0) {
		return false;
	} else {
		return true;
	}
}

function passCheck (form, min, max, str, msg)
{
	var e_count = 0;
	var n_count = 0;
	var s_count = 0;
	var t_count = 0;
	var err = "";
	var string = form.value;

	if (!requireString(form, msg)) return false;
	if (form.value.length)
	{
		//숫자, 영문자, 특수문자 체크
		for(var i=0; i<string.length; i++)
		{
			for(var j=0; j<english_strings.length; j++)
			{
				if (string.charAt(i) == english_strings.charAt(j))
				{
					e_count++; break;
				}
			}

			for(var k=0; k<number.length; k++) 
			{
				if (string.charAt(i) == number.charAt(k))
				{
					n_count++; break;
				}
			}
			
			if (!/[0-9a-zA-Z]/.test(string.charAt(i))) 
			{
				s_count++;
			}
		}
		
		if(e_count > 0)	t_count++;
		if(n_count > 0)	t_count++;
		if(s_count > 0) 	t_count++;

		if(t_count == 3) min = 8;
		else if(t_count == 2) min = 10;

		if(t_count < 2)
			err = str + "는 영문,숫자,특수문자중 두가지조합 이상으로 입력해주세요.";
		else if (min == max && !stringLength(form.value, min, max))
			err = str + "는 " + min +"자로 입력해주세요.";
		else if (min != false && max != false && min < max && !stringLength(form.value, min, max))
			err = str + "는 " + min +"자 이상 " + max + "자 이내로 입력해주세요.";
		else if (min == false && max > 0 && !stringLength(form.value, 1, max))
			err = str + "는 " + "최대 " + max + "자 이내로 입력해주세요.";
		else if (min > 0 && max == false && !stringLength(form.value, min, 100000000))
			err = str + "는 " + "최소 " + min + "자 이상 입력해주세요.";
	}
	if (err != "")
	{
		alert(err);
		form.focus();
		return false;
	}
	return true;
}

//비밀번호 작성규칙
function checkPasswd(uid,upw){
	
	var chk_num = upw.search(/[0-9]/g);
	var chk_eng = upw.search(/[a-z]/ig);
 
	if(chk_num <0 || chk_eng <0){
		alert("비밀번호는 숫자와 영문자를 혼용하여 입력해주세요.");
		return false;
	}
 
	if(/(\w)\1\1\1/.test(upw)){
		alert('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.');
		return false;
	}
 
	if(upw.search(uid) > -1){
		alert("아이디가 포함된 비밀번호는 사용하실 수 없습니다.");
		return false;
	}
	return true;
}


/////////////////////////////////////////////////////////////////
// 체크박스에 선택된 값을 배열로 받는 함수  (15.10.20)
// chkId (원하는 체크박스의 ID값)											
/////////////////////////////////////////////////////////////////
function getCheckVal(chkId) {  
	var chkList = new Array();
	$(chkId+":checked").each(function (index) {  
		chkList[index] = $(this).val();  
	});  
	
	return chkList;  
}  

//select박스의 선택된 값 구하기
function getSelectVal(selId) {
	var selVar = $(selId+" option:selected").val();
	return selVar;
}

