/**
 * @FileName : MapManager.js
 * @Project : hangang
 * @Date : 2014. 4. 25.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : MapManager Class
 */
function MapManager(){
	var mapClasses = null;
	
	this.setMapClasses = function(mapClassesData){
		mapClasses = mapClassesData;
	}
	
	this.settingButtonClickEventListener = function(event){
		if(vworld.is3D()){
			mapClasses.threeD.settingButtonClickEventListener(event);
		}else{
			mapClasses.twoD.settingButtonClickEventListener(event);
		}
	}
	
	this.setOpacity = function(vectorName, opacity){
		if(vworld.is3D()){
			mapClasses.threeD.setOpacity.apply(mapClasses.threeD, [vectorName, opacity]);
		}else{
			mapClasses.twoD.setOpacity.apply(mapClasses.twoD, [vectorName, opacity]);
		}
	}
	
	this.moveToMw = function(code){
		if(vworld.is3D()){
			mapClasses.threeD.moveToMw.apply(mapClasses.threeD, [code]);
		}else{
			mapClasses.twoD.moveToMw.apply(mapClasses.twoD, [code]);
		}
	}
}