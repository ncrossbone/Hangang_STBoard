/**
 * map type의 상태를 표현하는 심볼릭 변수
 */
Map.BASE_MAP = 1;
Map.SATELLITE_MAP = 2;
Map.HYBRID_MAP = 3;

Map.JUNG_POINT = 1;

Map.CHART_ZOOM_LEVEL = {
	min : 1,
	max : 6
}

Map.MARKER_ZOOM_LEVEL = {
	min : 7,
	max : 24
}

Map.CHART_ALTITUDE = {
	min : 0,
	max : 1000
}

Map.MARKER_ALTITUDE = {
	min : 1001,
	max : 30000
}

/**
 * @FileName : Map1.js
 * @Project : hangang
 * @Date : 2014. 3. 24.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : Map 객체를 다루는 기능을 하는 클래스
 */
function Map() {
	this.map = null;
	this.mapState = null;
	this.markerVector = null;
	this.chartVector = null;

	/**
	 * @Date : 2014. 3. 24.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Map Class를 Initailize하는 메서드
	 */
	this.initMap = function() {

	}

	/**
	 * @Date : 2014. 3. 24.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Map Type을 설정해주는 메서드
	 */
	this.setMapType = function(type) {
		var baseMap = this.map.getLayersByName("baseMap")[0];
		var satelliteMap = this.map.getLayersByName("satellite")[0];
		var hybridMap = this.map.getLayersByName("hybrid")[0];

		if (type == Map.BASE_MAP) {

			baseMap.setVisibility(false);
			satelliteMap.setVisibility(true);
			hybridMap.setVisibility(false);
		} else if (type == Map.SATELLITE_MAP) {
			baseMap.setVisibility(false);
			satelliteMap.setVisibility(true);
			hybridMap.setVisibility(false);
		} else if (type == Map.HYBRID_MAP) {
			baseMap.setVisibility(false);
			satelliteMap.setVisibility(true);
			hybridMap.setVisibility(true);
		}
	}

	/**
	 * @Date : 2014. 3. 24.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : ZoomLevelChange, 구분 변경, 측정 항목 변경, 자동데이터 업데이트시에 호출되는 메서드
	 */
	this.checkFeature = function(isFeatureUpdate) {
		if (isFeatureUpdate) {
			var markerVetor = loadMarker();
			var chartVector = loadChart();
		} else {
			if (vworld.is3D()) {
				var altitude = SOPPlugin.getViewCamera().getAltitude();
				if (altitude >= Map.MARKER_ALTITUDE.min
						&& altitude <= Map.MARKER_ALTITUDE.max) {
					// 마커를 보여줘야 할 레벨
					loadMarker();
				} else if (altitude >= Map.CHART_ALTITUDE.min
						&& altitude <= Map.CHART_ALTITUDE.max) {
					// 차트를 보여줘야 할 레벨
					loadChart();
				}
			} else {
				var zoomLevel = this.map.getLevel();
				if (zoomLevel >= Map.MARKER_ZOOM_LEVEL.min
						&& zoomLevel <= Map.MARKER_ZOOM_LEVEL.max) {
					// 마커를 보여줘야 할 레벨
					loadMarker();
				} else if (zoomLevel >= Map.CHART_ZOOM_LEVEL.min
						&& zoomLevel <= Map.CHART_ZOOM_LEVEL.max) {
					// 차트를 보여줘야 할 레벨
					loadChart();
				}
			}
		}
	}

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Marker vector를 생성하는 메서드
	 */
	function loadMarker() {

	}

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Chart vector를 생성하는 메서드
	 */
	function loadChart() {
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=2",
			dataType : "json"
		}).done(function(data) {
			var result = data.d;

			var json = new OpenLayers.Format.GeoJSON();
			var jsonFeatures = json.read(result[0]);
			var jsonLayer = thisMap.getLayersByName("chartVectorLayer");
			jsonLayer[0].addFeatures(jsonFeatures);
		});
	}

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Chart vector를 생성하는 메서드
	 */
	function changeVector(changeType) {
		if (changeType == "01") {

		} else if (changeType == "02") {

		}
	}

	/**
	 * @Date : 2014. 3. 24.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : vworld baseMap 객체를 생성 리턴해주는 메서드
	 */
	function createVBASELayer() {
		var vBase = new vworld.Layers.Base("baseMap");
		if (vBase != null) {
			return vBase;
		}
	}

	/**
	 * @Date : 2014. 3. 24.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : vworld 위성맵 객체를 생성 리턴해주는 메서드
	 */
	function createSatelliteLayer() {
		var vSAT = new vworld.Layers.Satellite("satellite");
		if (vSAT != null) {
			return vSAT;
		}
	}

	/**
	 * @Date : 2014. 3. 24.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : vworld 하이브리드 맵 객체를 생성 리턴해주는 메서드
	 */
	function createHybridLayer(layerName) {
		var vHybrid = new vworld.Layers.Hybrid("hybrid");
		if (vHybrid != null) {
			return vHybrid;
		}
	}
}

var twoDMap = new Map();
twoDMap.prototype.initMap = function() {
	var options = {
		controls : [],
		projection : new OpenLayers.Projection("EPSG:900913"),
		displayProjection : new OpenLayers.Projection("EPSG:4326"),
		units : "m",
		numZoomLevels : 21,
		maxResolution : 156543.0339,
		maxExtent : new OpenLayers.Bounds(-20037508.34, -20037508.34,
				20037508.34, 20037508.34),
		restrictedExtent : new OpenLayers.Bounds(13405877.96727,
				3706639.0832099, 14959078.381746, 4929631.5355537)
	};

	this.map = new OpenLayers.Map("GIS_Area", options);

	var baseLayer = createVBASELayer();
	var satellite = createSatelliteLayer();
	var hybrid = createHybridLayer();

	this.map.addLayer(baseLayer);
	this.map.addLayer(satellite);
	this.map.addLayer(hybrid);

	this.map.addControl(new OpenLayers.Control.Navigation());

	this.map.setCenter(new OpenLayers.LonLat(127.7, 35.9).transform(
			new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection(
					"EPSG:900913")), 14);
}