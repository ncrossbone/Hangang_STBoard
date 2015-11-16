/**
 * @FileName  : Map2.js
 * @Project     : hangang
 * @Date         : 2014. 3. 25. 
 * @작성자      : Administrator
 * @변경이력 :
 * @프로그램 설명 : Map Class들의 상위 클래스 비어져 있는 메서드들은 필수 구현 메서드 이니 꼭 구현 부탁드립니다.
 */

Map.BASE_MAP = 1;
Map.SATELLITE_MAP = 2;
Map.HYBRID_MAP = 3;

Map.SHOW_MARKER = 1;
Map.SHOW_CHART = 2;
// 14.07.28 박순형 줌에 따른 노출 범위 수정
Map.CHART_ZOOM_LEVEL = {
	min : 15,
	max : 30
};

Map.MARKER_ZOOM_LEVEL = {
	min : 1,
	max : 14
};

Map.CHART_ALTITUDE = {
	min : 0,
	max : 30000
};

Map.MARKER_ALTITUDE = {
	min : 30001,
	max : 420000
};

function Map(){
	var map = null;
	var mapState = null;
	var markerVector = null;
	var chartVector = null;
}

Map.prototype.initMap = function initMap(){
	
};

Map.prototype.destroyMap = function destroyMap(){
	
};

Map.prototype.drawChart = function drawChart(param){
	
};

Map.prototype.drawMarker = function drawMarker(param){
	
};

Map.prototype.changeChartAndMarker = function changeChartAndMarker(){
	
};

Map.prototype.setOpacity = function setOpacity(){
	
};

Map.prototype.getMap = function getMap(){
	return map;
};

Map.prototype.saveSearchStatus = function(){
	var result = {
			point : ControlPanel.WQMN_GENERAL_SPOT,
			meansureMent : ControlPanel.BOD,
			layer : [],
			opacity : 100
	};
	
	$('ul.place_box').find('input').each(function(index, element){
		if(element.checked == true){
			if(eval(element.value) != ControlPanel.WATER_QAULITY_MONITORING_NETWORK){
				result.point = eval(element.value);
				
				return false;
			}
		}
	});
	
	$('ul.item_box').find('input').each(function(index, element){
		if(element.checked == true){
			result.meansureMent = eval(element.value);
			
			return false;
		}
	});
	
	$('ul.wms_box').find('input').each(function(index, element){
		if(element.checked == true){
			result.layer.push(element.value);
		}
	});
	
	return result;
};

Map.prototype.setSearchStatus = function(values){
	
	$('ul.place_box').find('input').each(function(index, element){
		if(eval(element.value) == values.point){
			$(element).trigger("click");
			
			return false;
		}
	});
	
	$('ul.item_box').find('input').each(function(index, element){
		if(eval(element.value) == values.meansureMent){
			$(element).trigger("click");
			
			return false;
		}
	});
	
	var layers = values.layer;
	
	$('ul.wms_box').find('input').attr("checked", false);
	
	$('ul.wms_box').find('input').each(function(index, element){
		for(var a = 0; a < layers.length; a++){
			if(element.value == layers[a]){
				element.checked = true;
				
				break;
			}
		}
	});
};

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 피쳐의 상태를 체크하여 판단하는 메서드
 */
Map.prototype.checkFeature = function checkFeature(isFeatureUpdate, param){
	if(isFeatureUpdate){
		// khLee
		console.info(isFeatureUpdate);
		console.info(param);
		
		this.drawChart(param);
		this.drawMarker(param);
		this.changeChartAndMarker(this.checkZoom());
	}else{
		this.changeChartAndMarker(this.checkZoom());
	}
};

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 줌레벨을 체크해주는 메서드
 */
Map.prototype.checkZoom = function checkZoom(){
	
	var statusFlag = 0;
	
	if(!vworld.is3D()){
		var zoomLevel = map.getZoom();
		
		if (zoomLevel >= Map.MARKER_ZOOM_LEVEL.min && zoomLevel <= Map.MARKER_ZOOM_LEVEL.max) {
			// 마커를 보여줘야 할 레벨
			statusFlag = Map.SHOW_MARKER;
		} else if (zoomLevel >= Map.CHART_ZOOM_LEVEL.min && zoomLevel <= Map.CHART_ZOOM_LEVEL.max) {
			// 차트를 보여줘야 할 레벨
			statusFlag = Map.SHOW_CHART;
		}
	}else{
		if(vworld.is3D()){
			var altitude = SOPPlugin.getViewCamera().getAltitude();
			if (altitude >= Map.MARKER_ALTITUDE.min && altitude <= Map.MARKER_ALTITUDE.max) {
				// 마커를 보여줘야 할 레벨
				statusFlag = Map.SHOW_MARKER;
			} else if (altitude >= Map.CHART_ALTITUDE.min && altitude <= Map.CHART_ALTITUDE.max) {
				// 차트를 보여줘야 할 레벨
				statusFlag = Map.SHOW_CHART;
			}
		}else{
			var zoomLevel = this.map.getLevel();
			
			if (zoomLevel >= Map.MARKER_ZOOM_LEVEL.min && zoomLevel <= Map.MARKER_ZOOM_LEVEL.max) {
				// 마커를 보여줘야 할 레벨
				statusFlag = Map.SHOW_MARKER;
			} else if (zoomLevel >= Map.CHART_ZOOM_LEVEL.min && zoomLevel <= Map.CHART_ZOOM_LEVEL.max) {
				// 차트를 보여줘야 할 레벨
				statusFlag = Map.SHOW_CHART;
			}
		}
	}
	
	return statusFlag;
};