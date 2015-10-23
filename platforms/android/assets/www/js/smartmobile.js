//==================================================================================
// 프로그램명 : RH-SCM SMART MOBILE 
// 작성 : 2015.10.23 ysh
// 비고 : MAIN SCRIPT
//----------------------------------------------------------------------------------
// 수정 :
//==================================================================================

/**
 * 페이지 로딩 함수
 * @date  2015.10.23
 * @author ysh
 */
$(document).ready(function(){
	alert("1");
	// device resest call
	fn_deviceResetCall();
});

/**
 * 장비 초기화 Listener
 * @date  2015.10.23
 * @author ysh
 */
function fn_deviceResetCall()
{
	document.addEventListener("deviceready", fn_onDeviceReady, false);
}

/**
 * 장비 초기화 
 * @date  2015.10.23
 * @author ysh
 */
function fn_onDeviceReady()
{
	// back key 설정
	document.addEventListener("backbutton", fn_onBackKeyDown, false);
}

/**
 * back key 설정
 * @date  2015.10.23
 * @author ysh
 */
function fn_onBackKeyDown()
{
	navigator.notification.confirm("종료 하시겠습니까?", onBackKeyDownMsg, "어플종료","취소,종료");
}