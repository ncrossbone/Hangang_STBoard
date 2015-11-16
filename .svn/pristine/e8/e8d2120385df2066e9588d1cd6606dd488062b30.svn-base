/**
 * @FileName  : settingButtonClickEvent.js
 * @Project     : hangang
 * @Date         : 2014. 3. 28. 
 * @작성자      : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : 적용 버튼 클릭 이벤트 클래스
 */
function SettingButtonClickEvent(){
	var value = new Array();
	
	this.setValue = function(paramValue){
		value.push(paramValue);
	}
	
	this.getValue = function(key){
		var returnValue = "";
		
		for(var a = 0; a < value.length; a++){
			if(value[a][key] != undefined){
				returnValue = value[a][key];
			}
		}
		
		return returnValue;
	}
}