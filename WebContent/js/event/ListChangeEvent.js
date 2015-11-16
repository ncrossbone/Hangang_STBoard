/**
 * @FileName  : ListChangeEvent.js
 * @Project     : hangang
 * @Date         : 2014. 3. 27. 
 * @작성자      : Administrator
 * @변경이력 :
 * @프로그램 설명 : 지점 변경 이벤트
 */
function ListChangeEvent(){
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