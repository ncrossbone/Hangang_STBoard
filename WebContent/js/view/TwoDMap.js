TwoDMap.CHART_VECTOR_LAYER_NAME = "chartVectorLayer";
TwoDMap.MARKER_VECTOR_LAYER_NAME = "markerVectorLayer";

TwoDMap.SHOW_MARKER = 1;
TwoDMap.SHOW_CHART = 2;

/**
 * @FileName : TwoDMap.js
 * @Project : hangang
 * @Date : 2014. 3. 25.
 * @작성자 : Administrator
 * @변경이력 :
 * @프로그램 설명 :
 */
function TwoDMap() {
	Map.call(this);
	this.loading = 0;

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : vworld baseMap 객체를 생성 리턴해주는 메서드
	 */
	this.createVBASELayer = function() {
		var vBase = new vworld.Layers.Base("baseMap");
		if (vBase != null) {
			return vBase;
		}
	};

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : vworld 위성맵 객체를 생성 리턴해주는 메서드
	 */
	this.createSatelliteLayer = function() {
		var vSAT = new vworld.Layers.Satellite("satellite");
		if (vSAT != null) {
			return vSAT;
		}
	};

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : private.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : vworld 하이브리드 맵 객체를 생성 리턴해주는 메서드
	 */
	this.createHybridLayer = function(layerName) {
		var vHybrid = new vworld.Layers.Hybrid("hybrid");
		if (vHybrid != null) {
			return vHybrid;
		}
	};

	/**
	 * @Date : 2014. 3. 25.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @메서드 설명 : Map Type을 설정해주는 메서드
	 */
	this.setMapType = function(type) {
		var baseMap = map.getLayersByName("baseMap")[0];
		var satelliteMap = map.getLayersByName("satellite")[0];
		var hybridMap = map.getLayersByName("hybrid")[0];

		$("#GIS_Area").css("display", "block");

		if (type == Map.BASE_MAP) {
			baseMap.setVisibility(true);
			satelliteMap.setVisibility(false);
			hybridMap.setVisibility(false);
			$('.map_01').css("background",
					"url(../resources/img/bt_1_over.png) no-repeat");
			$('.map_02').css("background",
					"url(../resources/img/bt_2_off.png) no-repeat");
			$('.map_03').css("background",
					"url(../resources/img/bt_3_off.png) no-repeat");
		} else if (type == Map.SATELLITE_MAP) {
			baseMap.setVisibility(false);
			satelliteMap.setVisibility(true);
			hybridMap.setVisibility(false);
			$('.map_01').css("background",
					"url(../resources/img/bt_1_off.png) no-repeat");
			$('.map_02').css("background",
					"url(../resources/img/bt_2_over.png) no-repeat");
			$('.map_03').css("background",
					"url(../resources/img/bt_3_off.png) no-repeat");
		} else if (type == Map.HYBRID_MAP) {
			baseMap.setVisibility(false);
			satelliteMap.setVisibility(true);
			hybridMap.setVisibility(true);
			$('.map_01').css("background",
					"url(../resources/img/bt_1_off.png) no-repeat");
			$('.map_02').css("background",
					"url(../resources/img/bt_2_off.png) no-repeat");
			$('.map_03').css("background",
					"url(../resources/img/bt_3_over.png) no-repeat");
		}
	};

	this.makeChartVectorLayer = function() {
		var context = {
			graphicXOffset : -170,
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

		var chartVectorLayer = new OpenLayers.Layer.Vector(
				TwoDMap.CHART_VECTOR_LAYER_NAME, {
					styleMap : styleMap
				});

		return chartVectorLayer;
	};

	this.makeMarkerVectorLayer = function() {
		var context = {
			graphicXOffset : -13,
			graphicYOffset : 0,
			graphicWidth : function(feature) {
				return 30;
			},
			graphicHeight : function(feature) {
				return 32;
			},
			getChartURL : function(feature) {
				var value = feature.attributes["COL_DD_DT"];
				var common = new Common();
				return common.getMarkerImage(value);
			},
			label : function(feature) {
				var pointName = feature.attributes.MMP_NM;

				return pointName;
			}
		};

		var template = {
			fillOpacity : 1.0,
			externalGraphic : "${getChartURL}",
			graphicWidth : "${graphicWidth}",
			graphicHeight : "${graphicHeight}",
			graphicXOffset : "${graphicXOffset}",
			graphicYOffset : "${graphicYOffset}",
			strokeWidth : 0,
			label : "${label}",
			fontColor : "black",
			labelYOffset : -45,
			fontWeight : "bold",
			labelOutlineColor : "white",
			labelOutlineWidth : 3,
			labelAlign : "cm"

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

		var markerVectorLayer = new OpenLayers.Layer.Vector(
				TwoDMap.MARKER_VECTOR_LAYER_NAME, {
					styleMap : styleMap
				});

		return markerVectorLayer;
	};

	this.settingButtonClickEventListener = function(event) {
		// 지점 구분 코드
		var value = event.getValue("spotValue");
		// 측정 항목 코드
		var listValue = event.getValue("listValue");

		var param = {
			measureName : listValue,
			spotGubun : value
		};

		main.getTwoDMap().checkFeature(true, param);
		changeLegend(listValue);
	};

	function changeLegend(value) {
		$("#remark_form").children().children("ul").each(
				function(index, element) {
					$(element).css("display", "none");
				});
		// 박순형 140731 등급표 노출 수정
		if (value == ControlPanel.BOD) {
			$("#bodLegend").css("display", "block");
		}
		// else if(value == ControlPanel.CHL_A){
		// $("#chlALegend").css("display", "block");
		// }
		else if (value == ControlPanel.COD) {
			$("#codLegend").css("display", "block");
		} else if (value == ControlPanel.DO) {
			$("#doLegend").css("display", "block");
		} else if (value == ControlPanel.PH) {
			$("#phLegend").css("display", "block");
		}
		// else if(value == ControlPanel.TN){
		// $("#tnLegend").css("display", "block");
		// }
		else if (value == ControlPanel.TP) {
			$("#tpLegend").css("display", "block");
		}
		// else if(value == ControlPanel.TOTAL_TIDE){
		// $("#tideLegend").css("display", "block");
		// }
		// else if(value == ControlPanel.TEMP){
		// $("#chlALegend").css("display", "block");
		// }
		// else if(value == ControlPanel.YU){
		// $("#yuLegend").css("display", "block");
		// }
		// else if(value == ControlPanel.EC){
		// $("#ecLegend").css("display", "block");
		// }
		else if (value == ControlPanel.TOC) {
			$("#tocLegend").css("display", "block");
		}
		// else if(value == ControlPanel.VOCS){
		// $("#vocsLegend").css("display", "block");
		// }
		else if (value == ControlPanel.TAKDO) {
			$("#takdoLegend").css("display", "block");
		}
		// else if(value == ControlPanel.CHL){
		// $("#chlLegend").css("display", "block");
		// }
		// else if(value == ControlPanel.DIA){
		// $("#diaLegend").css("display", "block");
		// }
		// else if(value == ControlPanel.CYA){
		// $("#cyaLegend").css("display", "block");
		// }

		$(".right_close").css("background",
				"url(../resources/img/left_menu_close.png) no-repeat");
		$("#legendPanel").css("opacity", "1");
		$("#remark_form").css("top", $("#Top_Area").height());
	}

	/**
	 * @Project : hangang
	 * @Date : 2014. 4. 01.
	 * @작성자 : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 범례의 움직임을 처리하는 메서드
	 */
	this.legendShowAndHide = function() {
		var remark = $("#legendPanel");

		if ($("#legendPanel").css("opacity") == 1) {
			$(".right_close").css("background",
					"url(../resources/img/left_menu_open.png) no-repeat");

			var height = $("#legendPanel").height() - $("#Top_Area").height();

			$("#remark_form").animate({
				top : "-" + height + "px"
			}, 1000);

			$("#legendPanel").animate({
				opacity : 0
			}, 1000);

		} else {
			$("#legendPanel").css("display", "block");
			$("#legendPanel").css("opacity", "0");

			$(".right_close").css("background",
					"url(../resources/img/left_menu_close.png) no-repeat");

			var height = $("#Top_Area").height();

			$("#remark_form").animate({
				top : height + "px"
			}, 1000);

			$("#legendPanel").animate({
				opacity : 1
			}, 1000);
		}
	};

	this.loadEndCheck = function() {
		if (this.loading == 1) {
			$("#dialog-modal").dialog("destroy");
			this.loading = 0;
			if (main.getTopPanel().isAuto) {
				main.getTopPanel().playAutoPlay();
			}
		} else {
			this.loading++;
		}
	};

	this.initOverviewMap = function() {
		var options = {
			controls : []
		};

		twoDOverviewMap = new OpenLayers.Map('overviewMap', options);
		var overviewLayer = new OpenLayers.Layer.WMS("OpenLayers WMS",
				"http://vmap0.tiles.osgeo.org/wms/vmap0", {
					layers : 'basic'
				});

		var common = new Common();
		
		var middelWMS = new OpenLayers.Layer.WMS("junghangang",
				common.mapServerUrl + "/geoserver/woo/wms", {
					LAYERS : 'woo:jonghangang',
					STYLES : '',
					format : 'image/png',
					transparent : true
				}, {
					singleTile : true,
					ratio : 1,
					isBaseLayer : false,
					yx : {
						'EPSG:4326' : false
					},
					transitionEffect : 'resize',
					opacity : 1.0
				});

		twoDOverviewMap.addLayer(overviewLayer);
		twoDOverviewMap.addLayer(middelWMS);
		twoDOverviewMap.setCenter(new OpenLayers.LonLat(0, 0), 1);

		var vector = new OpenLayers.Layer.Vector("overview", {
			strokeColor : "#FF0000",
			strokeWidth : 2,
			strokeDashstyle : "solid"
		});
		twoDOverviewMap.addLayer(vector);
		twoDOverviewMap.events.register("zoomend", twoDOverviewMap, function() {
		});

		var dragFeatureControl = new OpenLayers.Control.DragFeature(vector);
		twoDOverviewMap.addControl(dragFeatureControl);
		dragFeatureControl.onComplete = function(feature, fixel) {
			var geometry = feature.geometry;
			geometry.calculateBounds();
			var center = geometry.getCentroid();
			var lonlat = new OpenLayers.LonLat(center.x, center.y).transform(
					new OpenLayers.Projection("EPSG:4326"),
					new OpenLayers.Projection("EPSG:900913"));
			map.setCenter(lonlat, map.getZoom());
		};

		dragFeatureControl.activate();
	};

	this.drawOverviewMapExtent = function(map) {
		var zoom = map.getZoom();
		var lonlat = map.getCenter();

		if (zoom - 6 < 5) {
			zoom = 5;
		} else {
			zoom = zoom - 6;
		}

		twoDOverviewMap.setCenter(lonlat.transform(new OpenLayers.Projection(
				"EPSG:900913"), new OpenLayers.Projection("EPSG:4326")), zoom);

		var vectorLayer = twoDOverviewMap.getLayersByName("overview")[0];
		vectorLayer.removeAllFeatures();
		var extentBound = map.getExtent();

		var polygon = new OpenLayers.Geometry.Polygon([]);

		var geometry = extentBound.toGeometry();

		var linearRing = new OpenLayers.Geometry.LinearRing(
				[
						new OpenLayers.Geometry.Point(extentBound.left,
								extentBound.bottom),
						new OpenLayers.Geometry.Point(extentBound.right,
								extentBound.bottom),
						new OpenLayers.Geometry.Point(extentBound.right,
								extentBound.top),
						new OpenLayers.Geometry.Point(extentBound.left,
								extentBound.top) ]);

		linearRing.transform(new OpenLayers.Projection("EPSG:900913"),
				new OpenLayers.Projection("EPSG:4326"));

		var style_Green_Box = OpenLayers.Util.extend({},
				OpenLayers.Feature.Vector.style['default']);
		var polygon = new OpenLayers.Geometry.Polygon(linearRing);
		var feature = new OpenLayers.Feature.Vector(polygon, {
			name : "test"
		}, style_Green_Box);

		vectorLayer.addFeatures([ feature ]);
	};

	this.settingWMSClickEventListener = function(event) {
		var value = event.getValue("spotValue");

		var name = "";
		var layerName = "";
		var styleName = "";
		var checked = false;
		var id = "";
		var elementValue = "";

		for (var a = 0; a < value.length; a++) {
			id = value[a]["id"];
			elementValue = value[a]["value"];
			checked = value[a]["isChecked"];

			if (elementValue == 1) {
				name = "big";
				layerName = "LT_C_WKMBBSN";
				styleName = "LT_C_WKMBBSN";
			} else if (elementValue == 2) {
				name = "middle";
				layerName = "LT_C_WKMMBSN";
				styleName = "LT_C_WKMMBSN";
			} else if (elementValue == 3) {
				name = "small";
				layerName = "LT_C_WKMSBSN";
				styleName = "LT_C_WKMSBSN";
			}

			if (checked) {
				var layers = map.getLayersByName(name);
				var bound = map.getExtent();

				if (layers.length == 0) {
					var outerLayer1 = new OpenLayers.Layer.WMS(
							"big",
							'http://map.vworld.kr/js/wms.do?',
							{
								SERVICE : 'WMS',
								REQUEST : 'GetMap',
								LAYERS : layerName,
								STYLES : styleName,
								BBOX : '14133818.022824,4520485.8511757,14134123.770937,4520791.5992888',
								format : 'image/png',
								WIDTH : '256',
								HEIGHT : '256',
								VERSION : '1.3.0',
								CRS : 'EPSG:900913',
								EXCEPTIONS : 'text/xml',
								APIKEY : '777E3A53-9DDA-3BF1-929F-CE5825912A05',
								DOMAIN : 'localhost:8089',
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
					map.addLayer(outerLayer1);
				}
			} else {
				var layerName = map.getLayersByName(name)[0];

				if (layerName != undefined) {
					map.removeLayer(layerName);
				}
			}
		}
	};

	this.moveToMw = function(code) {
		$
				.ajax(
						{
							url : "../jsps/queryData/getQueryData.jsp?queryNum=31&condition="
									+ code + "&requestType=" + 2,
							dataType : "json"
						}).done(function(data) {
					var result = data.d[0];

					var json = new OpenLayers.Format.GeoJSON();
					var jsonFeatures = json.read(result);
					var bound = jsonFeatures[0].geometry.getBounds();

					if (bound != undefined) {
						map.zoomToExtent(bound);
					}
				});
	};

	this.setCenterFixed = function() {
		$
				.ajax(
						{
							url : "../jsps/queryData/getQueryData.jsp?queryNum=41&spotGubun="
									+ ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION,
							dataType : "json"
						}).done(function(data) {
					var result = data.d[0];

					var json = new OpenLayers.Format.GeoJSON();
					var jsonFeatures = json.read(result);

					var vector = new OpenLayers.Layer.Vector();
					vector.addFeatures(jsonFeatures);
					var bound = vector.getDataExtent();

					if (bound != undefined) {
						map.zoomToExtent(bound);
					}

					vector.destroy();
				});
	};
};

TwoDMap.prototype = Object.create(Map.prototype, {
	constructor : {
		value : TwoDMap
	}
});
TwoDMap.prototype.map = null;

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 상위 클래스 Map의 initMap을 오버라이드 한 메서드
 */
TwoDMap.prototype.initMap = function() {
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

	map = new OpenLayers.Map("GIS_Area", options);

	var baseLayer = this.createVBASELayer();
	var satellite = this.createSatelliteLayer();
	var hybrid = this.createHybridLayer();
	alert("");
	map.addLayer(baseLayer);
	baseLayer.isBaseLayer = true;
	map.addLayer(satellite);
	satellite.isBaseLayer = false;
	map.addLayer(hybrid);
	hybrid.isBaseLayer = false;

	map.addControl(new OpenLayers.Control.Navigation());

	map.setCenter(new OpenLayers.LonLat(14182717.041824, 4502632.857001), 10);

	var common = new Common();
	
	var hacheonLayer = new OpenLayers.Layer.WMS("hacheon",
			common.mapServerUrl + "/geoserver/woo/wms", {
				LAYERS : 'woo:hacheon',
				STYLES : '',
				format : 'image/png',
				transparent : true
			}, {
				singleTile : true,
				ratio : 1,
				isBaseLayer : false,
				yx : {
					'EPSG:900913' : false
				},
				transitionEffect : 'resize',
				opacity : 1.0
			});

	map.addLayer(hacheonLayer);

	$('.b_01').bind("click", function() {
		map.getExtent();
	});

	$('.b_02').bind("click", function() {
		map.zoomIn();
	});

	$('.b_03').bind("click", function() {
		map.zoomOut();
	});

	map.events.register('zoomend', map, function() {
		var twoMap = main.getTwoDMap();
		twoMap.checkFeature.apply(twoMap, [ false ]);
	});

	map.events.register('moveend', map, function() {
		var twoMap = main.getTwoDMap();
		twoMap.drawOverviewMapExtent.apply(twoMap, [ map ]);
		var lonlat = map.getCenter();
	});

	this.initOverviewMap();
	this.drawOverviewMapExtent(map);
	this.setCenterFixed();

	map.addLayer(this.makeChartVectorLayer());
	map.addLayer(this.makeMarkerVectorLayer());
};

/**
 * @Date : 2014. 4. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 2d map을 반환하는 메서드
 */
TwoDMap.prototype.destroyMap = function destroyMap() {
	$("#GIS_Area").css("display", "none");
};

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 차트를 그리는 메서드
 */
TwoDMap.prototype.drawChart = function drawChart(param) {
	var queryNumber = param.queryNumber;
	var colNames = param.colNames;
	var measureName = param.measureName;
	var spotGubun = param.spotGubun;
	var date = new Date();

	$
			.ajax(
					{
						url : "../jsps/queryData/getQueryData.jsp?queryNum=40&requestType=1&measure="
								+ measureName + "&spotGubun=" + spotGubun,
						dataType : "json"
					})
			.done(
					function(data) {
						var result = data.d;

						var json = new OpenLayers.Format.GeoJSON();
						var jsonFeatures = json.read(result[0]);
						var jsonLayer = map
								.getLayersByName(TwoDMap.CHART_VECTOR_LAYER_NAME);
						jsonLayer[0].removeAllFeatures();
						jsonLayer[0].addFeatures(jsonFeatures);

						var twoDMapClass = main.getTwoDMap();
						twoDMapClass.setOpacity.apply(twoDMapClass, [
								TwoDMap.CHART_VECTOR_LAYER_NAME, 1 ]);
						twoDMapClass.loadEndCheck.apply(twoDMapClass, []);
					});
};

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 마커를 그리는 메서드
 */
TwoDMap.prototype.drawMarker = function drawMarker(param) {
	var measureName = param.measureName;
	var spotGubun = param.spotGubun;

	$
			.ajax(
					{
						url : "../jsps/queryData/getQueryData.jsp?queryNum=40&requestType=1&measure="
								+ measureName + "&spotGubun=" + spotGubun,
						dataType : "json"
					})
			.done(
					function(data) {
						var result = data.d;

						var json = new OpenLayers.Format.GeoJSON();
						var jsonFeatures = json.read(result[0]);
						var jsonLayer = map
								.getLayersByName(TwoDMap.MARKER_VECTOR_LAYER_NAME);
						jsonLayer[0].removeAllFeatures();
						jsonLayer[0].addFeatures(jsonFeatures);

						var twoDMapClass = main.getTwoDMap();
						twoDMapClass.setOpacity.apply(twoDMapClass, [
								TwoDMap.MARKER_VECTOR_LAYER_NAME, 1 ]);
						twoDMapClass.loadEndCheck.apply(twoDMapClass, []);
					});
};

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 차트와 마커의 visibility를 변경해주는 메서드
 */
TwoDMap.prototype.changeChartAndMarker = function changeChartAndMarker(flag) {
	var charLeyer = map.getLayersByName(TwoDMap.CHART_VECTOR_LAYER_NAME)[0];
	var markerLeyer = map.getLayersByName(TwoDMap.MARKER_VECTOR_LAYER_NAME)[0];

	if (TwoDMap.SHOW_CHART == flag) {
		charLeyer.setVisibility(true);
		markerLeyer.setVisibility(false);
	} else if (TwoDMap.SHOW_MARKER == flag) {
		charLeyer.setVisibility(false);
		markerLeyer.setVisibility(true);
	}
};

/**
 * @Date : 2014. 3. 25.
 * @MethodType : public.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @메서드 설명 : 레이어의 투명도를 조절해주는 메서드
 */
TwoDMap.prototype.setOpacity = function(vectorName, opacity) {
	var chartLayer = map.getLayersByName(vectorName)[0];
	chartLayer.setOpacity(opacity);
};
