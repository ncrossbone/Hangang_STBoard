<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>한강 수계 통합 유역관리 시스템</title>
<link href="../resources/css/han_river.css" rel="stylesheet"
	type="text/css">

<SCRIPT language="JavaScript" type="text/javascript"
	src="http://map.vworld.kr/js/vworldMapInit.js.do?apiKey=777E3A53-9DDA-3BF1-929F-CE5825912A05"></SCRIPT>

<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.0.js"></script>
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script type="text/javascript" src="../js/view/Map.js"></script>
<script type="text/javascript" src="../js/Main.js"></script>
<script type="text/javascript">
	var map = null;
	var main = null;
	var wmsCr = true;
	vworld.showMode = false;
	$(document).ready(function() {
		main = new Main();
		main.init();
		main.rollingText();
	});
	
	function playOrStop(flag){
		var $playButton = $("#play");
		var $stopButton = $("#stop");
		
		if(flag == 1){
			main.Timer();
			$playButton.css("display", "none");
			$stopButton.css("display", "inline");
		}else{
			clearTimeout(StopTimer);
			$playButton.css("display", "inline");
			$stopButton.css("display", "none");
		}
	}

	function mapButtonClick(button) {
		var $buttonImage = $("#buttonImage");

		if (button == 1) {
			$buttonImage.attr("src", "../resources/img/right_top_1.png");
			$("#mapPanel").css("width", "100%");
			vworld.setMode(0);
			wms3DCheck('1');
		} else if (button == 2) {
			$buttonImage.attr("src", "../resources/img/right_top_2.png");
			$("#mapPanel").css("width", "100%");
			vworld.setMode(1);
			wms3DCheck('1');
		} else if (button == 3) {
			$buttonImage.attr("src", "../resources/img/right_top_3.png");
			$("#mapPanel").css("width", "calc(100% - 408px)")
			vworld.setMode(2);
			wms3DCheck('2');
		}
	}

	function wmsChange2D(name, layerName, checkbox) {
		var checked = $("#2dd > input:checkbox").is(":checked", true);
		if (checkbox.checked == true) {
			wms2Dcreate(name, layerName);
		} else {
			wms2Dremove(name);
		}
	}

	function wmsChange3D(name, layerName, checkbox) {
		if (checkbox.checked == true) {
			wms3Dcreate(name, layerName);
			wms3DOnOff(name, true);
		} else {
			wms3DOnOff(name, false);
		}
	}
</script>
</head>
<body style="overflow-x: hidden; background-color: transparent;">
	<div id="warp">
		<div id="Top_Area">
			<div class="ci"></div>
			<div class="top_right">
				<img id="buttonImage" src="../resources/img/right_top_1.png"
					usemap="#ImageMap1"></img>
				<map name="ImageMap1">
					<area shape="rect" coords="0, 22, 94, 53"
						href="javascript:mapButtonClick('1')" alt="페이지 이동하기">
					<area shape="rect" coords="97, 21, 190, 54"
						href="javascript:mapButtonClick('2')" alt="페이지 이동하기">
					<area shape="rect" coords="191, 22, 284, 56"
						href="javascript:mapButtonClick('3')" alt="페이지 이동하기">
				</map>
			</div>
		</div>
		<div id="GIS_Area" class="GIS_Area">
			<div
				style="position: absolute; width: 100%; height: calc(100% - 203px);"
				id="mapPanel"></div>
			<div class="ITEM_FORM">
				<div class="Item_Menu"></div>
				<div class="ex"></div>
			</div>
			<div id="overviewMap"></div>
		</div>

		<div id="bottom">
			<div class="title">
				<div class="item">pH</div>
				<div class="area_name">강원도</div>
				<div class="wms_layer">
					<div id="2dd">
						<input type="checkbox" id="wms2D"
							onclick="javascript:wmsChange2D('대권역', 'LT_C_WKMBBSN', this);">대권역
						<input type="checkbox" id="wms2D"
							onclick="javascript:wmsChange2D('중권역', 'LT_C_WKMMBSN', this);">중권역
						<input type="checkbox" id="wms2D"
							onclick="javascript:wmsChange2D('표준권역', 'LT_C_WKMSBSN', this);">표준권역
					</div>
					<div id="3dd">
						<input type="checkbox" id="wms3D"
							onclick="javascript:wmsChange3D('대권역', 'LT_C_WKMBBSN', this);">대권역
						<input type="checkbox" id="wms3D"
							onclick="javascript:wmsChange3D('중권역', 'LT_C_WKMMBSN', this);">중권역
						<input type="checkbox" id="wms3D"
							onclick="javascript:wmsChange3D('표준권역', 'LT_C_WKMSBSN', this);">표준권역
					</div>
				</div>
				<table class="location_player" valign="top">
					<tr>
						<td><a href="javascript:playOrStop(1)"><img id="play"
								src="../resources/img/timeLayer_btn_play.png"
								style="position: relative; top: 0; width: 24px; height: 24px; display: inline;"></img></a>
							<a href="javascript:playOrStop(2)"><img id="stop"
								src="../resources/img/timeLayer_btn_pause.png"
								style="position: relative; top: 0; width: 24px; height: 24px; display: none;"></img></a>
						</td>
					</tr>
				</table>
			</div>
			<div id="Data_Rolling">
				<font id="rollingText" style="position: relative; left: -300px">강릉시(4.53)
					고성군(1.54) 삼척시(4.54) 양구군(2.65) 영월군(1.76) 원주시(4.54) 인제군(8.82)
					정선군(4.21) 철원군(3.11) 춘천시(6.43) 태백시(5.83) 평창군(1.54) 홍천군(12.12)
					화천군(2.43)</font>
			</div>
			<div id="copyright"></div>
		</div>
	</div>
</body>
</html>