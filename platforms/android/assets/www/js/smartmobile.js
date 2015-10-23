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
	document.addEventListener("deviceready", onDeviceReady, false);
}

/**
 * 장비 초기화 
 * @date  2015.10.23
 * @author ysh
 */
function onDeviceReady()
{
	// back key 설정
	document.addEventListener("backbutton", onBackKeyDown, false);
}

/**
 * back key 설정
 * @date  2015.10.23
 * @author ysh
 */
function onBackKeyDown()
{
	// close message confirm
	navigator.notification.confirm("종료 하시겠습니까?", onBackKeyDownMsg, "어플종료","취소,종료");
}

/**
 * 어플 종료
 * @date  2015.10.23
 * @author ysh
 * @param buytton
 */
function onBackKeyDownMsg(button)
{
	// apple close
	if(button == 2) navigator.app.exitApp();
}