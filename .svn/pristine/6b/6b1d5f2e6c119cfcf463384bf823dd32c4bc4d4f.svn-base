/**
 * 
 */
var twoDOverviewMap = null;

function Map(){
	//workSpaceName, layerName
	this.addOuterWMSLayer = function(workSpaceName, layerName, name, url){
		var outerLayer = new OpenLayers.Layer.WMS(
				name, url,
	        {
	            LAYERS : workSpaceName + ':' + layerName,
				STYLES : '',
				format : 'image/png',
				transparent : true
	        },
	        {
		        singleTile : true,
				ratio : 1,
				isBaseLayer : false,
				yx : {
					'EPSG:900913' : false
				},
				transitionEffect : 'resize',
				opacity : 1.0
	        }
	    );
		
		return outerLayer;
	}
	
	this.get3DMarkerData = function(callback){
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=3",
			dataType : "json"
		}).done(function(data){
			callback.apply(this, [data]);
		});
	}
	
	this.addVectorLayer = function(styleMap, id, callback){
		var jsonLayer = new OpenLayers.Layer.Vector(id, {
			styleMap: styleMap
		});
		
		thisMap.addLayer(jsonLayer);
		
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=2",
			dataType : "json"
		}).done(function(data){
			callback.apply(this, [data]);
		});

//		var storeStyle = new OpenLayers.StyleMap({
//			'default': new OpenLayers.Style({
//				strokeColor: 'red', strokeWidth: 2, 
//				fillColor: 'yellow', pointRadius: 5
//			})
//		});
		
//		var renderer = OpenLayers.Util.getParameters(window.location.href).renderer;
//	    renderer = (renderer) ? [renderer] : OpenLayers.Layer.Vector.prototype.renderers;
//	    
//		var vector = new OpenLayers.Layer.Vector("States", {
//            minScale: 15000000,
//            strategies: [new OpenLayers.Strategy.BBOX()],
//            protocol: new OpenLayers.Protocol.WFS({
//                url: "http://localhost:1234/geoserver/wfs",
//                featurePrefix: "test",
//                featureType: "bo",
//                featureNS: "http://www.weekendfarm.co.kr/test",
//                srsName : "EPSG:900913",
//                geometryName: "geog",
//                version : "1.0.0"
//            })
//        })
//		
//		thisMap.addLayer(vector);
	}
	
	this.initOverviewMap = function(){
		var options = {
			controls : []
		};
		
		overviewMap = new OpenLayers.Map('overviewMap', options);
        var overviewLayer = new OpenLayers.Layer.WMS( "OpenLayers WMS", "http://vmap0.tiles.osgeo.org/wms/vmap0", {layers: 'basic'} );
            
        overviewMap.addLayer(overviewLayer);
        overviewMap.setCenter(new OpenLayers.LonLat(0, 0), 1);
        
        var vector = new OpenLayers.Layer.Vector("overview", {
        	strokeColor : "#FF0000",
        	strokeWidth : 2,
        	strokeDashstyle : "solid"
        });
        overviewMap.addLayer(vector);
	}
	
	this.drawOverviewMapExtent = function(map){
		var zoom = map.getZoom();
		var lonlat = map.getCenter();
		overviewMap.setCenter(lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection(
		"EPSG:4326")), (zoom - 6));
		
		var vectorLayer = overviewMap.getLayersByName("overview")[0];
		vectorLayer.removeAllFeatures();
		var extentBound = map.getExtent();
		
		var polygon = new OpenLayers.Geometry.Polygon([]);
		
		var geometry = extentBound.toGeometry();
		
		var linearRing = new OpenLayers.Geometry.LinearRing([
            new OpenLayers.Geometry.Point(extentBound.left, extentBound.bottom),
            new OpenLayers.Geometry.Point(extentBound.right, extentBound.bottom),
            new OpenLayers.Geometry.Point(extentBound.right, extentBound.top),
            new OpenLayers.Geometry.Point(extentBound.left, extentBound.top)
        ]);
		
		linearRing.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection(
		"EPSG:4326"));
		
		var style_Green_Box = OpenLayers.Util.extend({}, OpenLayers.Feature.Vector.style['default']);
		var polygon = new OpenLayers.Geometry.Polygon(linearRing);
		var feature = new OpenLayers.Feature.Vector(polygon, {
			name : "test"
		}, style_Green_Box);
		
		vectorLayer.addFeatures([feature]);
	}
}