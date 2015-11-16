ThreeDMap.searchStatus = {
		point : ControlPanel.WQMN_GENERAL_SPOT,
		meansureMent : ControlPanel.BOD,
		layer : [],
		opacity : null
}

/** 
* @FileName : FooterPanel.js
 * @Project : hangang
 * @Date : 2014. 4. 25.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : 3d Map Class
 */

function ThreeDMap() {
	this.chartPoi = new Array();
	this.markerPoi = new Array();
	this.loading = 0;
	
	/**
	 * @Date : 2014. 4. 25.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Map Type을 설정해주는 메서드
	 */
	this.setMapType = function(type) {
		main.getThreeDMap().setSearchStatus(ThreeDMap.searchStatus);
		
		if (type == Map.HYBRID_MAP) {
			var width = $("#wrapAccordion").width();
			var width1 = $("#legendPanel").width();
			$("#gis").css("left", width + "px");
			$("#gis").width(($("#gis").width() - width - width1) + "px");
			
			vworld.setMode(2);
			$('.map_01').css("background", "url(../resources/img/bt_1_off.png) no-repeat");
			$('.map_02').css("background", "url(../resources/img/bt_2_off.png) no-repeat");
			$('.map_03').css("background", "url(../resources/img/bt_3_over.png) no-repeat");
		}
	};
	
	this.settingButtonClickEventListener = function(event){
		// 지점 구분 코드
		var value = event.getValue("spotValue");
		// 측정 항목 코드
		var listValue = event.getValue("listValue");
		
		var param = {
				measureName : listValue,
				spotGubun : value
		}
		
		SOPPlugin.getUserLayer().removeAll();
		
		var threeDMap = main.getThreeDMap();
		threeDMap.chartPoi = null;
		threeDMap.chartPoi = new Array();
		threeDMap.markerPoi = null;
		threeDMap.markerPoi = new Array();
		threeDMap.checkFeature(true, param);
		changeLegend(listValue);
		
		var threeDMap = main.getThreeDMap();
		threeDMap.saveSearchStatus();
	};
	
	function changeLegend(value){
		$("#remark_form").children().children("ul").each(function(index, element){
			$(element).css("display", "none");
		});
//		박순형 140731 등급표 노출 수정
		if(value == ControlPanel.BOD){
			$("#bodLegend").css("display", "block");
		}else if(value == ControlPanel.CHL_A){
			$("#chlALegend").css("display", "block");
		}else if(value == ControlPanel.COD){
			$("#codLegend").css("display", "block");
		}else if(value == ControlPanel.DO){
			$("#doLegend").css("display", "block");
		}else if(value == ControlPanel.PH){
			$("#phLegend").css("display", "block");
		}else if(value == ControlPanel.TN){
			$("#tnLegend").css("display", "block");
		}else if(value == ControlPanel.TP){
			$("#tpLegend").css("display", "block");
		}else if(value == ControlPanel.TOTAL_TIDE){
			$("#tideLegend").css("display", "block");
		}else if(value == ControlPanel.TEMP){
			$("#chlALegend").css("display", "block");
		}else if(value == ControlPanel.YU){
			$("#yuLegend").css("display", "block");
		}else if(value == ControlPanel.EC){
			$("#ecLegend").css("display", "block");
		}else if(value == ControlPanel.TOC){
			$("#tocLegend").css("display", "block");
		}else if(value == ControlPanel.VOCS){
			$("#vocsLegend").css("display", "block");
		}else if(value == ControlPanel.TAKDO){
			$("#takdoLegend").css("display", "block");
		}else if(value == ControlPanel.CHL){
			$("#chlLegend").css("display", "block");
		}else if(value == ControlPanel.DIA){
			$("#diaLegend").css("display", "block");
		}else if(value == ControlPanel.CYA){
			$("#cyaLegend").css("display", "block");
		}
		
		$(".right_close").css("background", "url(../resources/img/left_menu_close.png) no-repeat");
		$("#legendPanel").css("opacity", "1");
		$("#remark_form").css("top", $("#Top_Area").height());
	}
	
	this.loadEndCheck = function(){
		if(this.loading == 1){
			$( "#dialog-modal" ).dialog("destroy");
			this.loading = 0;
			if(main.getTopPanel().isAuto){
				main.getTopPanel().playAutoPlay();
			}
		}else {
			this.loading++;
		}
	};
	
	this.camMoveEntEventHandler = function(){
		var threeDMap = main.getThreeDMap();
		threeDMap.checkFeature.apply(threeDMap, [false]);
	};
	
	this.makeWMSLayers = function(name, layerName){
		var layers = SOPPlugin.getLayerList().createWMSLayer(name);
		layers.setConnectionWMS('2d.vworld.kr', '8895', '/2DCache/gis/map/WMS?');
		layers.setLayersWMS(layerName);
		layers.setStylesWMS(layerName + "_3d");
		layers.setTileSizeWMS(256);
		layers.setLevelWMS(5, 18);
		layers.setVisible(SOPPlugin.SOPVISIBLE_OFF);
	};
	
	this.settingWMSClickEventListener = function(event){
		if(vworld.is3D()){
			var value = event.getValue("spotValue");
			var elementValue;
			var isChecked = false;
			var layerName;
			var SOPLayerList = SOPPlugin.getLayerList();
			
			for(var a = 0; a < value.length; a++){
				elementValue = value[a].value;
				isChecked = value[a].isChecked;
				
				if(elementValue == 1){
					layerName = "대권역";
				}else if(elementValue == 2){
					layerName = "중권역";
				}else if(elementValue == 3){
					layerName = "표준권역";
				}
				
				if(isChecked){
					SOPLayerList.nameAtLayer(layerName).setVisible(SOPPlugin.SOPVISIBLE_ON);
				}else{
					SOPLayerList.nameAtLayer(layerName).setVisible(SOPPlugin.SOPVISIBLE_OFF);
				}
			}
			
			var threeDMap = main.getThreeDMap();
			threeDMap.saveSearchStatus();
		}
	};
	
	this.moveToMw = function(code){
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=31&condition=" + code + "&requestType=" + 2,
			dataType : "json"
		}).done(function(data){
			var result = data.d[0];
			
			var json = new OpenLayers.Format.GeoJSON();
			var jsonFeatures = json.read(result);
			var bound = jsonFeatures[0].geometry.getBounds();
			
			var lonlat = bound.getCenterLonLat().transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
			
			if(lonlat.lon != undefined && lonlat.lat != undefined){
//				var vec3 = SOPPlugin.createVec3();
//				vec3.set(lonlat.lon, lonlat.lat, 20000);
//				SOPPlugin.getViewCamera().moveOvalDist(vec3);
				SOPPlugin.getViewCamera().moveLonLatAltOval(lonlat.lon, lonlat.lat, 20000, 10);
			}
		});
	};
}

ThreeDMap.prototype = Object.create(Map.prototype, {
	constructor : {
		value : TwoDMap
	}
});
ThreeDMap.prototype.map = null;

/**
 * @Date : 2014. 4. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 3d map을 initailize 해주는 메서드
 */
ThreeDMap.prototype.initMap = function() {
	window.sop.earth.addEventListener(SOPPlugin.getViewCamera(),
	"cammoveend", function() {
		main.getThreeDMap().camMoveEntEventHandler();
	});
	
	SOPPlugin.getViewCamera().setAnimationSpeed(10.9);
	this.makeWMSLayers('대권역', 'LT_C_WKMBBSN');
	this.makeWMSLayers('중권역', 'LT_C_WKMMBSN');
	this.makeWMSLayers('표준권역', 'LT_C_WKMSBSN');
}

/**
 * @Date : 2014. 4. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 3d map을 반환하는 메서드
 */
ThreeDMap.prototype.destroyMap = function destroyMap() {

}

/**
 * @Date : 2014. 4. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 차트를 그리는 메서드
 */
ThreeDMap.prototype.drawChart = function drawChart(param) {
	var queryNumber = param.queryNumber;
	var colNames = param.colNames;
	var measureName = param.measureName;
	var spotGubun = param.spotGubun;
	var date = new Date();
	
	$.ajax({
		url : "../jsps/queryData/getQueryData.jsp?queryNum=40&requestType=1&measure=" + measureName + "&spotGubun=" + spotGubun,
		dataType : "json"
	}).done(function(data) {
		var result = data.d;

		var json = new OpenLayers.Format.GeoJSON();
		var jsonFeatures = json.read(result[0]);
		var threeDMap = main.getThreeDMap();
		
		for(var a = 0; a < jsonFeatures.length; a++){
			var imagePath = jsonFeatures[a].attributes.imagePath;
			var x = jsonFeatures[a].geometry.x;
			var y = jsonFeatures[a].geometry.y;
			
			var vec3 = SOPPlugin.createVec3();
			var id = jsonFeatures[a].attributes.MMP_NM + "chart";
			poi = SOPPlugin.createPoint(id);
			var lonlat = new OpenLayers.LonLat(x, y);
			var lnlt = lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
			vec3.Longitude = lonlat.lon;
			vec3.Latitude = lonlat.lat;
			vec3.Altitude = 0;
			poi.Set(vec3);
			var sym = poi.getSymbol();
			var icon = sym.getIcon();
			icon.setNormalIcon(imagePath);
			sym.setIcon(icon);
			poi.setSymbol(sym);
			SOPPlugin.getView().addChild(poi, 8);
			poi.setVisible(sop.cons.enums.SOPVISIBLE_OFF);
			
			threeDMap.chartPoi.push(poi);
		}
		
		threeDMap.loadEndCheck.apply(threeDMap, []);
	});
};

/**
 * @Date : 2014. 4. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 마커를 그리는 메서드
 */
ThreeDMap.prototype.drawMarker = function drawMarker(param) {
	var measureName = param.measureName;
	var spotGubun = param.spotGubun;
	var threeDMap = main.getThreeDMap();
	
	$.ajax({
		url : "../jsps/queryData/getQueryData.jsp?queryNum=40&requestType=1&measure=" + measureName + "&spotGubun=" + spotGubun,
		dataType : "json"
	}).done(function(data) {
		var result = data.d;

		var json = new OpenLayers.Format.GeoJSON();
		var jsonFeatures = json.read(result[0]);
		var threeDMap = main.getThreeDMap();
		var common = new Common();
		
		for(var a = 0; a < jsonFeatures.length; a++){
			var imagePath = jsonFeatures[a].attributes.imagePath;
			var x = jsonFeatures[a].geometry.x;
			var y = jsonFeatures[a].geometry.y;
			
			var vec3 = SOPPlugin.createVec3();
			var id = jsonFeatures[a].attributes.MMP_NM + "marker";
			poi = SOPPlugin.createPoint(id);
			var lonlat = new OpenLayers.LonLat(x, y);
			var lnlt = lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
			vec3.Longitude = lonlat.lon;
			vec3.Latitude = lonlat.lat;
			vec3.Altitude = 0;
			poi.Set(vec3);
			poi.setName(jsonFeatures[a].attributes.MMP_NM);
			var sym = poi.getSymbol();
			var icon = sym.getIcon();
			
			var imagePath = common.getMarkerImage(jsonFeatures[a].attributes["COL_DD_DT"]);
			imagePath = imagePath.replace("..", new Common().websiteUrl + "/hangang");
			
			icon.setNormalIcon(imagePath);
			sym.setIcon(icon);
			poi.setSymbol(sym);
			SOPPlugin.getView().addChild(poi, 8);
			
			threeDMap.markerPoi.push(poi);
		}
		
		threeDMap.loadEndCheck.apply(threeDMap, []);
	});
}

ThreeDMap.prototype.changeChartAndMarker = function changeChartAndMarker(flag) {
	var threeDMap = main.getThreeDMap();
	var chartPoi = threeDMap.chartPoi;
	var markerPoi = threeDMap.markerPoi;
	var isChart = false;
	var isMarker = false;
	
	if(Map.SHOW_CHART == flag){
		isChart = true;
	}else{
		isMarker = true;
	}
	
	for(var a = 0; a < chartPoi.length; a++){
		if(isChart){
			chartPoi[a].setVisible(sop.cons.enums.SOPVISIBLE_ON);
		}else{
			chartPoi[a].setVisible(sop.cons.enums.SOPVISIBLE_OFF);
		}
	}
	
	for(var a = 0; a < markerPoi.length; a++){
		if(isMarker){
			markerPoi[a].setVisible(sop.cons.enums.SOPVISIBLE_ON);
		}else{
			markerPoi[a].setVisible(sop.cons.enums.SOPVISIBLE_OFF);
		}
	}
}

ThreeDMap.prototype.setOpacity = function(vectorName, opacity) {

}

ThreeDMap.prototype.saveSearchStatus = function(){
	ThreeDMap.searchStatus = Map.prototype.saveSearchStatus.call(this, []);
}

ThreeDMap.prototype.setSearchStatus = function(values){
	Map.prototype.setSearchStatus.apply(this, [values]);
};