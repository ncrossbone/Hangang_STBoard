var index = 0;
var StopTimer;
var boundaryMap2D;
var boundaryMap3D;

var lonlat22 = [ {
	"x" : "127.68429999999999",
	"y" : "37.272099999700004"
}, {
	"x" : "127.4889",
	"y" : "37.485400000600002"
}, {
	"x" : "127.99209999999999",
	"y" : "37.006100000799997"
}, {
	"x" : "128.49369999999999",
	"y" : "37.160399999500001"
}, {
	"x" : "127.7543",
	"y" : "37.252800000800001"
}, {
	"x" : "127.92910000000001",
	"y" : "36.934299999799997"
}, {
	"x" : "127.6758",
	"y" : "37.837500000399999"
}, {
	"x" : "127.7899",
	"y" : "37.929099999400002"
}, {
	"x" : "127.3766",
	"y" : "37.666500000299997"
}, {
	"x" : "127.2911",
	"y" : "37.432399999399998"
}, {
	"x" : "127.286",
	"y" : "37.528400000200001"
}, {
	"x" : "126.9573",
	"y" : "37.515300000099998"
}, {
	"x" : "127.07899999999999",
	"y" : "36.984099999100003"
}, {
	"x" : "126.8548",
	"y" : "37.570100000099998"
}, {
	"x" : "126.75449999999999",
	"y" : "37.863600000700004"
} ];

function myStopTimer() {
	clearTimeout(StopTimer);
}

// 2D 생성
function wms2Dcreate(name, layerName) {
	var outerLayer = new OpenLayers.Layer.WMS(name,
			'http://2d.vworld.kr:8895/2DCache/gis/map/WMS', {
				LAYERS : layerName,
				STYLES : layerName,
				format : 'image/png',
				transparent : true
			}, {
				singleTile : false,
				ratio : 1,
				isBaseLayer : false,
				yx : {
					'EPSG:900913' : false
				},
				transitionEffect : 'resize',
				opacity : 1.0
			});

	var vectorLayer = thisMap.getLayersByName('chartLayer')[0];
	var vectorLayerIndex = thisMap.getLayerIndex(vectorLayer);
	thisMap.addLayer(outerLayer);
	thisMap.raiseLayer(vectorLayer, vectorLayerIndex + 1);
}

// 2D 삭제
function wms2Dremove(name) {
	var layer = thisMap.getLayersByName(name)[0];
	thisMap.removeLayer(layer);
}

// 3D 생성
function wms3Dcreate(name, layerName) {
	var isNew = true;
	var layerList = vearth.getLayerList();

	for (var i = 0; i <= layerList.count() - 1; i++) {
		tempLayer = layerList.indexAtLayer(i);
		if (name == tempLayer.getName()) {
			layers = tempLayer;
			isNew = false;
		}
	}

	if (isNew) {
		layers = vearth.getLayerList().createWMSLayer(name);
		layers
				.setConnectionWMS('2d.vworld.kr', '8895',
						'/2DCache/gis/map/WMS?');
		layers.setLayersWMS(layerName);
		layers.setStylesWMS(layerName + "_3d");
		layers.setTileSizeWMS(256);
		layers.setLevelWMS(5, 18);
	}
}

// 3D 삭제
function wms3DOnOff(name, visibility) {
	// name : 행정경계 레이어 생성시 입력한 name
	if (SOPPlugin != null) {
		var SOPLayerList = SOPPlugin.getLayerList();
		var vis = SOPLayerList.nameAtLayer(name).getVisible();
		if (visibility == true) {
			vis = SOPPlugin.SOPVISIBLE_ON;
		} else {
			vis = SOPPlugin.SOPVISIBLE_OFF;
		}

		SOPLayerList.nameAtLayer(name).setVisible(vis);
	}
}

function wms3DCheck(status) {
	if (status == "2") {
		$("#2dd").css("display", "none");
		$("#3dd").css("display", "inline");
	} else {
		$("#2dd").css("display", "inline");
		$("#3dd").css("display", "none");
	}
}

function Main() {

	this.Timer = function() {
		var delayTime = 10000;

		if (lonlat22.length == index + 1) {
			index = 0;
		}

		if (vworld.is3D()) {

			var location = SOPPlugin.getViewCamera().getLocation();
			var level = SOPPlugin.getViewCamera().getMapZoomLevel();

			map.setCenter(new OpenLayers.LonLat(lonlat22[index].x,
					lonlat22[index].y).transform(new OpenLayers.Projection(
					"EPSG:4326"), new OpenLayers.Projection("EPSG:900913")),
					level);
			var mapClass = new Map();
			mapClass.drawOverviewMapExtent(map);

			SOPPlugin.getViewCamera().moveLonLatAlt(lonlat22[index].x,
					lonlat22[index].y, 10000);
			delayTime = 12000;
		} else {
			var lonlat = new OpenLayers.LonLat(lonlat22[index].x,
					lonlat22[index].y).transform(new OpenLayers.Projection(
					"EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
			var zoom2 = 13;
			thisMap.setCenterAndZoom(lonlat.lon, lonlat.lat, zoom2);
			delayTime = 10000;
		}

		StopTimer = setTimeout("main.Timer()", delayTime);
		index++;
	};

	this.init = function() {

		vworld.showMode = false;
		setEvent();

		vworld.init("mapPanel" // rootDiv
		, "map-first" // mapType
		, function() {
			init2DMap();
			// main.Timer();
			wms3DCheck('1');

			var mapClass = new Map();
			mapClass.initOverviewMap();
			mapClass.drawOverviewMapExtent(thisMap);

			map.events.register("moveend", null, function() {
				mapClass.drawOverviewMapExtent(this);
			});
		}, function(obj) {
			SOPPlugin = obj;
			SOPPlugin.getViewCamera().moveLonLat(127.7, 37.9);
			SOPPlugin.getViewCamera().setAltitude(5000);

			init3DMap();
			setTimeout("SOPPlugin.getViewCamera().setTilt(43.44)", 10);

			window.sop.earth.addEventListener(SOPPlugin.getViewCamera(),
					"cammoveend", function() {

					});

		}// initCallback
		, function(msg) {

		}// failCallback
		);
	}

	function init3DMap() {
		var mapClass = new Map();
		mapClass.get3DMarkerData(requestChartImage);
	}

	function requestChartImage(data) {
		var result = data.d;

		for (var a = 0; a < result.length; a++) {
			var todayData = result[a]["todaydata"];
			var prevMonth = result[a]["prevmonth"];
			var prevYear = result[a]["prevyear"];

			var pointName = result[a]["측정소명"];
			var x = result[a]["x"];
			var y = result[a]["y"];
			// http://www.vworld.kr/images/op02/map_point.png

			var charturl = getChartUrl(todayData, prevMonth, prevYear);
			var url = "../jsps/proxy/imageProxy.jsp?today="
					+ todayData
					+ "&prevMonth="
					+ prevMonth
					+ "&prevYear="
					+ prevYear
					+ "&pointName="
					+ encodeURIComponent(encodeURIComponent(pointName, "UTF-8"))
					+ "&x=" + x + "&y=" + y;

			$.ajax({
				url : url,
				dataType : "json"
			}).done(function(data) {
				draw3DMarker(data);
			});
		}
	}

	function draw3DMarker(data) {
		var result = data.d;

		var vec3 = SOPPlugin.createVec3();
		poi = SOPPlugin.createPoint('999');
		vec3.Longitude = result[0]["x"];
		vec3.Latitude = result[0]["y"];
		vec3.Altitude = 0;
		poi.Set(vec3);
		var sym = poi.getSymbol();
		var icon = sym.getIcon();
		icon.setNormalIcon("http://localhost:8089/hangang/resources/download/"
				+ result[0]["fileName"]);
		sym.setIcon(icon);
		// poi.setName(result[0]["pointName"]);
		poi.setSymbol(sym);
		SOPPlugin.getView().addChild(poi, 8);
	}

	function init2DMap() {
		OpenLayers.ProxyHost = "../jsps/proxy/proxy.jsp?url=";
		map = this.vmap;

		map.setBaseLayer(map.vworldBaseMap);

		map.setControlsType({
			"simpleMap" : true
		});
		var lonlat = new OpenLayers.LonLat(127.7, 37.9).transform(
				new OpenLayers.Projection("EPSG:4326"),
				new OpenLayers.Projection("EPSG:900913"));
		// map.setCenterAndZoom(lonlat.lon, lonlat.lat, 8);

		// thisMap.setCenter(lonlat, 8, true, true);
		thisMap.setCenterAndZoom(lonlat.lon, lonlat.lat, 8);

		var mapClass = new Map();
		var backMap = mapClass.addOuterWMSLayer("test", "대권역",
				"test:dae - Tiled", "http://localhost:1234/geoserver/test/wms");

		// thisMap.addLayer(backMap);

		var context = {
			graphicXOffset : -190,
			graphicYOffset : -135,
			graphicWidth : function(feature) {
				return 212;
			},
			graphicHeight : function(feature) {
				return 170;
			},
			getChartURL : function(feature) {
				var path = feature.attributes["imagePath"];
				var charturl = path;
				return charturl;
			}
		};

		// var context1 = {
		// graphicXOffset : 0,
		// graphicYOffset : 0,
		// graphicWidth: function(feature) {
		// return 20;
		// },
		// graphicHeight: function(feature) {
		// return 30;
		// },
		// getChartURL: function(feature) {
		// return "../resources/img/landmark.png";
		// }
		// };

		var template = {
			fillOpacity : 1.0,
			externalGraphic : "${getChartURL}",
			graphicWidth : "${graphicWidth}",
			graphicHeight : "${graphicHeight}",
			graphicXOffset : "${graphicXOffset}",
			graphicYOffset : "${graphicYOffset}",
			strokeWidth : 0
		};

		var style = new OpenLayers.Style(template, {
			context : context
		});
		var styleMap = new OpenLayers.StyleMap({
			'default' : style,
			'select' : {
				fillOpacity : 0.7
			}
		});

		// var style1 = new OpenLayers.Style(template, {context: context1});
		// var styleMap1 = new OpenLayers.StyleMap({'default': style1, 'select':
		// {fillOpacity: 0.7}});

		mapClass.addVectorLayer(styleMap, "chartLayer", chartLayerCallback);
		// mapClass.addVectorLayer(styleMap1, "markerLayer",
		// markerLayerCallback);
		// mapClass.addVectorLayer(styleMap1, "markerLayer",
		// markerLayerCallback);
		// mapClass.addVectorLayer(styleMap1, "markerLayer",
		// markerLayerCallback);
	}

	function drawFeature(data, layerId) {
		var result = data.d;

		var json = new OpenLayers.Format.GeoJSON();
		var jsonFeatures = json.read(result[0]);
		var jsonLayer = thisMap.getLayersByName(layerId);
		jsonLayer[0].addFeatures(jsonFeatures);
	}

	function chartLayerCallback(data) {
		drawFeature(data, "chartLayer");
	}

	function markerLayerCallback(data) {
		drawFeature(data, "markerLayer");
	}

	function getChartUrl(todayData, prevMonth, prevYear) {
		// feature.attributes["prev_year"]
		var chartType = 'cht=bhs';
		var todayData = (Math.round(todayData * 100) / 100);
		var prevMonth = (Math.round(prevMonth * 100) / 100);
		var prevYear = (Math.round(prevYear * 100) / 100);
		var values = todayData + ',' + prevMonth + ',' + prevYear;
		var range = '&chds=a';
		var chartColor = '&chco=FFC6A5|FFFF42|DEF3BD';
		var chartAxis = '&chxt=x,y&chxl=1:|현재|전월|전년';
		var background = '&chf=bg,s,65432100';

		var charturl = 'http://chart.apis.google.com/chart?' + chartType
				+ '&chd=t:' + values + '&chs=' + 100 + 'x' + 100 + chartColor
				+ chartAxis + range;
		return charturl;
	}

	function setEvent() {
		$("#twoDButton").click(function(e) {
			vworld.setMode(0);
		});

		$("#threeDButton").click(function(e) {
			vworld.setMode(2);
		});
	}

	this.rollingText = function() {
		// $( "#rollingText" ).animate({
		// left: "-900px",
		// options : {
		// duration : 10000,
		// complete : function(){
		//					
		// }
		// }
		// });

		$("#rollingText").animate({
			left : "-1900px"
		}, 300, function() {
			$("#rollingText").css("left", "1900px");
			main.rollingText();
		});
	};
}