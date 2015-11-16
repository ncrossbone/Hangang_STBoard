/**
 * @FileName  : WMSChangeEvent.js
 * @Project     : hangang
 * @Date         : 2014. 3. 31. 
 * @작성자      : woosunchul
 * @변경이력 :
 * @프로그램 설명 : 2Dwms on/off 실행시키는 클래스
 */
function WMSChangeEvent(){
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