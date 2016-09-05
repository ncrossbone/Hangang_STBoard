<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- <meta http-equiv="X-UA-Compatible" content="IE=7"> -->
<!-- <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"> -->
<title>한강 수계 통합 유역관리 시스템</title>
<link href="../resources/css/jquery-ui-1.10.4.custom.css"
	rel="stylesheet" type="text/css">
<link href="../resources/css/han_river2.css" rel="stylesheet"
	type="text/css">



<script type="text/javascript" src="../js/jquery-1.11.0.js"></script>
<script src="../js/jquery-ui.js" type="text/javascript"></script>
<script src="http://www.openlayers.org/api/2.13/OpenLayers.js"
	type="text/javascript"></script>
<!-- http://water.nier.go.kr/hangang/jsps/gis.jsp 인증키 (실서버) -->
<!-- <SCRIPT language="JavaScript" type="text/javascript"
	src="http://map.vworld.kr/js/vworldMapInit.js.do?apiKey=50C07490-F9B8-3C00-AB72-D85946AF22B8"></SCRIPT> -->
<!--  http://localhost:8088 인증키 -->
<SCRIPT language="JavaScript" type="text/javascript"
	src="http://map.vworld.kr/js/vworldMapInit.js.do?apiKey=327DE1AD-04CC-34BA-A460-9F63CBD158C0"></SCRIPT>

<script type="text/javascript" src="../js/common/Common.js"></script>
<script type="text/javascript" src="../js/Main1.js"></script>

<script type="text/javascript" src="../js/MapManager.js"></script>

<script type="text/javascript" src="../js/event/SpotChangeEvent.js"></script>
<script type="text/javascript" src="../js/event/ListChangeEvent.js"></script>
<script type="text/javascript"
	src="../js/event/settingButtonClickEvent.js"></script>
<script type="text/javascript" src="../js/event/WMSChangeEvent.js"></script>

<script type="text/javascript" src="../js/view/Map2.js"></script>
<script type="text/javascript" src="../js/view/TopPanel.js"></script>
<script type="text/javascript" src="../js/view/ControlPanel.js"></script>
<script type="text/javascript" src="../js/view/FooterPanel.js"></script>
<script type="text/javascript" src="../js/view/TwoDMap1.js"></script>
<script type="text/javascript" src="../js/view/ThreeDMap.js"></script>
<script type="text/javascript" src="../js/data/AlarmData.js"></script>
<link href="../resources/css/jquery.simplyscroll.css" rel="stylesheet"
	media="all" type="text/css">


<script type="text/javascript" src="../js/jquery.simplyscroll.js"></script>

<!-- khLee 추가 20150429 브라우저 width가 1040이하일때 화면깨짐 해결 방안 -->
<script language="javascript" type="text/javascript">
	$(function() {
		setTopRightPosition();
	});

	$(window).resize(function() {
		setTopRightPosition();
		//alert($(window).css("scrollbar"));
	});

	function setTopRightPosition() {
		if ($(window).width() <= 1040) {
			$(".top_right").css("position", "absolute");
			$(".top_right").css("left", "410px");
		} else {
			$(".top_right").css("position", "relative");
			$(".top_right").css("left", "auto");
		}
	}
</script>
<!-- khLee 추가 20150429 브라우저 width가 1040이하일때 화면깨짐 해결 방안 끝 -->

<script type="text/javascript">
	var main = null;
	$(document).ready(function() {

		main = new Main();
		main.init();
		$(".b_08 a").hide();
	});
	var _selectAutoPlay = null;
</script>

<script type="text/javascript">
	var select = {
		action : function(el, state) {
			// state = 0 or 1
			
			
			var SelectElement = document.getElementById(el.id);
			var ListElement = SelectElement.getElementsByTagName("ul")[0];
			var ActionElement = ListElement.getElementsByTagName("a");

			if(ActionElement[0].firstChild==null){
				alert("중권역을 선택하세요");
				return;
			}			
			
			if (ListElement.style.display == "block") {
				select.close(ListElement);
				return false;
			} else {
				ListElement.style.display = "block";
			}

			var strSelected = SelectElement.getElementsByTagName("a")[0];
			strSelected.focus();
			
			for (var i = 0; i < ActionElement.length; i++) {
				if (strSelected.firstChild.nodeValue == ActionElement[i].firstChild.nodeValue) {
					select.elementClass = ActionElement[i];
					select.elementClass.className = "selected";
					ActionElement[i].onclick = function() {
						return false;
					}
				} else {
					ActionElement[i].onclick = function() {
						if (this.href.indexOf("javascript") > -1) {
							eval(this.href);
						} else if (this.href == ""
								|| this.href.indexOf("#") > -1) {
						} else if (this.target == "_blank") {
							window.open(this.href);
						} else {
							location.href(this.href);
						}
						if (state == 1) {
							strSelected.firstChild.nodeValue = this.firstChild.nodeValue;
						}
						return false;
					}
				}
				ActionElement[i].onmouseover = function() {
					select.elementClass.className = "";
					this.className = "selected";
					select.elementClass = this;
				}
			}

			SelectElement.onmouseover = function() {
				strSelected.onblur = function() {
				}
			}
			SelectElement.onmouseout = function() {
				strSelected.onblur = function() {
					select.close(ListElement);
				}
			}

		},
		close : function(el) {
			//select.elementClass.className = "";
			el.style.display = "none";
			return false;
		}
	}
	
	
	
	
	function getTwoDMap() {
		$(".b_08 a").trigger('click');
		main.getTwoDMap().setMapType(Map.BASE_MAP);

	}
	function getTwoDRealMap() {
		$(".b_08 a").trigger('click');
		main.getTwoDMap().setMapType(Map.SATELLITE_MAP);
	}
	function getThreeDMap() {
		$(".b_08 a").trigger('click');
		$(".b_07 a").hide();
		$(".b_08 a").hide();
		main.getThreeDMap().setMapType(Map.HYBRID_MAP);
	}
</script>

</head>
<body>
	<div id="warp">
		<div id="Top_Area">
			<!--왼쪽상단(CI+버튼제어)-->
			<div class="top_left">
				<h1></h1>
				<div class="top_ctrl">
					<ul class="bt_ctrl">
						<!-- <li class="b_01"><a href="#"></a></li> -->
						<li class="b_02"><a href="#"></a></li>
						<li class="b_03"><a href="#"></a></li>
						<!-- <li class="b_04"><a href="#"></a></li>
						<li class="b_05"><a href="#"></a></li>
						<li class="b_06"><a href="#"></a></li> -->
						<li class="b_07"><a href="#"></a></li>
						<li class="b_08"><a href="#"></a></li>
						<!-- <li class="b_09"><a href="#"></a></li> -->
					</ul>
				</div>
			</div>

			<!--왼쪽상단(CI+버튼제어)-->
			<!--우측상단-->
			
			<div class="top_right">
				<div id="detailTable"></div>
				<div class="select_date">
					<div id="select_01">
						<div id="Link" class="selectlayer"
							onClick="select.action(this,1);">
							<p>
								<a href="#" class="default" onClick="return false;">중권역</a>
							</p>
							<ul id="selectOptions">
								<li><a href="#">대권역 대표지점</a></li>
								<li><a href="#">중권역 대표지점</a></li>
								<li><a href="#">표준권역 대표지점</a></li>
								<li><a href="#">표준권역 대표지점</a></li>
								<li><a href="#">표준권역 대표지점</a></li>
								<li><a href="#">표준권역 대표지점</a></li>
							</ul>
						</div>
					</div>
					<div id="select_02">
						<div id="Link_2" class="selectlayer_2" onClick="select.action(this,1);">
					 		<p>
								<a href="#" class="default" onClick="return false;">지점을 선택하세요.</a>
							</p>
							<ul id="selectOptions_2">
								<li><a href="#"></a></li>
							</ul>
						</div>
					</div>
					<!-- <select id="selectJung"><option>중권역을 선택하세요</option></select> -->
				</div>
				<!-- <div class="roll_area_info"> -->
					
					<ul class="map_kind">
					<li class="map_02"><a href="javascript:getTwoDRealMap();"></a></li>
					<li class="map_01"><a href="javascript:getTwoDMap();"></a></li>
					<li class="map_03"><a href="javascript:getThreeDMap();"></a></li>
				</ul>
					<!-- <img id="alarmImg" src="../resources/img/siren_01.png">
					<ul class="data_form">
						<li><font id="mmpNameText">홍천군</font></li>
						<li><font id="colDdDtText">24.5</font></li>
						<li><font id="msmLtNmText">24.5</font></li>
					</ul> -->
				<!-- </div> -->
				
			</div>

			<div
				style="top: 85px; right: 30px; color: #ffffff; position: absolute; font-weight: bold; text-shadow: 0.1em 0.1em 0.05em #333">
				<font id="measureName" size=5>BOD</font><font id="measureName2" size=2>(㎎/L)</font>
			</div>
		</div>
		<!--우측상단-->
		<!-- <div> -->
		<div id="wrapAccordion">
			<div id="accordion">
				<H3>지점 구분</H3>
				<div id="treeview">
					<ul class="place_box">
						<li><input name="WATER_QAULITY_MONITORING_NETWORK"
							type="checkbox"
							value="javascript: ControlPanel.WATER_QAULITY_MONITORING_NETWORK"
							checked="checked">수질측정망</li>
						<ul class="low_box">
							<li><input name="WQMN_GENERAL_SPOT" type="checkbox"
								value="javascript: ControlPanel.WQMN_GENERAL_SPOT"
								checked="checked">일반지점</li>
							<li><input name="WQMN_TOTAL_SPOT" type="checkbox"
								value="javascript: ControlPanel.WQMN_TOTAL_SPOT">총량지점</li>
							<li><input name="WQMN_REPRESECTATION_MIDDLE_SECTION"
								type="checkbox"
								value="javascript: ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION">중권역대표지점</li>
							<li><input name="WQMN_MAIN_SPOT" type="checkbox"
								value="javascript: ControlPanel.WQMN_MAIN_SPOT">주요지점</li>
							<li><input name="WQMN_BO_SPOT" type="checkbox"
								value="javascript: ControlPanel.WQMN_BO_SPOT">보지점</li>
							<li><input name="WQMN_FORECAST_SPOT" type="checkbox"
								value="javascript: ControlPanel.WQMN_FORECAST_SPOT">예보지점</li>
						</ul>
						<li><input name="AUTOMATIC_MEASUREMENT_NETWORK"
							type="checkbox"
							value="javascript: ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK">자동측정망</li>
						<li><input name="TIDE_MEASUREMENT_NETWORK" type="checkbox"
							value="javascript: ControlPanel.TIDE_MEASUREMENT_NETWORK">조류측정망</li>
						<!-- 2016.04.05 HyeokPark	
						<li><input name="IP_USN" type="checkbox"
							value="javascript: ControlPanel.IP_USN">IP-USN</li>
						 -->
						<li><input name="DAM_BO" type="checkbox"
							value="javascript: ControlPanel.DAM_BO">댐·보</li>
					</ul>
				</div>

				<H3>항목 구분</H3>
				<div id="treeview1">
					<ul class="item_box" id="item_box">
						<!-- 
							<li><input name="BOD" type="checkbox" value="javascript : ControlPanel.BOD" checked="checked">BOD</li>
							<li><input name="CHL_A" type="checkbox" value="javascript : ControlPanel.CHL_A">Chl-a</li>
							<li><input name="TP" type="checkbox" value="javascript : ControlPanel.TP">TP</li>
							<li><input name="TEMP" type="checkbox" value="javascript : ControlPanel.TEMP">수온</li>
							<li><input name="COD" type="checkbox" value="javascript : ControlPanel.COD">COD</li>
							<li><input name="PH" type="checkbox" value="javascript : ControlPanel.PH">pH</li>
							<li><input name="DO" type="checkbox" value="javascript : ControlPanel.DO">DO</li>
							<li><input name="TN" type="checkbox" value="javascript : ControlPanel.TN">TN</li>
							<li><input name="TOTAL_TIDE" type="checkbox" value="javascript : ControlPanel.TOTAL_TIDE">총조류</li>
							<li><input name="YU" type="checkbox" value="javascript : ControlPanel.YU">유량</li>
							<li><input name="YU" type="checkbox" value="javascript : ControlPanel.RS">저수위</li>
							<li><input name="YU" type="checkbox" value="javascript : ControlPanel.RA">유입량</li>
							<li><input name="YU" type="checkbox" value="javascript : ControlPanel.GO">총뱡류량</li>
							<li><input name="YU" type="checkbox" value="javascript : ControlPanel.YI">저수량</li>
							<li><input name="YU" type="checkbox" value="javascript : ControlPanel.TB">공용량</li>
							
							 -->
					</ul>
				</div>

				<H3>주제도on/off</H3>
				<div>
					<ul class="wms_box">
						<li><input id="wmsChange1" type="checkbox" value="1">대권역</li>
						<li><input id="wmsChange2" type="checkbox" value="2">중권역</li>
						<li><input id="wmsChange3" type="checkbox" value="3">소권역</li>
						<li><input id="wmsChange4" type="checkbox" value="4">하천</li>
					</ul>
				</div>

				<!-- 				<H3>Chart 투명도 조절</H3>
				<div>
					<div width="100%" id="opacityTextfield" align="center"
						style="color: #ffffff">투명도 : 100%</div>
					<div id="opacitySlider" style="overflow-x: visible"></div>
				</div> -->
			</div>
			<div class="left_close">
				<a href="#"></a>
			</div>
			<div class="app" id="settingButton">
				<a href="#"></a>
			</div>
		</div>
		<!-- </div> -->
		<!-- </div> -->
		<div id="GIS_Area">

			<div id="gis" style="width: 100%;; position: absolute"></div>

			<div id="remark_form">
				<!-- 범례 -->
				<div class="remark" id="legendPanel">
					<ul class="remark" style="display: block" id="bodLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_1.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우좋음(la)</li>
								<li>1 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_02">
								<li
									style="background-image: url(../resources/img/remark_2.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>좋음(lb)</li>
								<li>2 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_03">
								<li
									style="background-image: url(../resources/img/remark_3.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간좋음(ll)</li>
								<li>3 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_04">
								<li
									style="background-image: url(../resources/img/remark_4.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>보통(lll)</li>
								<li>5 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_05">
								<li
									style="background-image: url(../resources/img/remark_5.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간나쁨(lV)</li>
								<li>8 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_06">
								<li
									style="background-image: url(../resources/img/remark_6.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>나쁨(V)</li>
								<li>10 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_07">
								<li
									style="background-image: url(../resources/img/remark_7.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우나쁨(Vl)</li>
								<li>10 초과</li>
							</ul>
						</li>
					</ul>
					<!--BOD-->


					<ul class="remark" style="display: none;" id="codLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_1.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우좋음(la)</li>
								<li>2 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_02">
								<li
									style="background-image: url(../resources/img/remark_2.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>좋음(lb)</li>
								<li>4 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_03">
								<li
									style="background-image: url(../resources/img/remark_3.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간좋음(ll)</li>
								<li>5 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_04">
								<li
									style="background-image: url(../resources/img/remark_4.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>보통(lll)</li>
								<li>7 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_05">
								<li
									style="background-image: url(../resources/img/remark_5.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간나쁨(lV)</li>
								<li>9 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_06">
								<li
									style="background-image: url(../resources/img/remark_6.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>나쁨(V)</li>
								<li>11 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_07">
								<li
									style="background-image: url(../resources/img/remark_7.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우나쁨(Vl)</li>
								<li>11 초과</li>
							</ul>
						</li>
					</ul>
					<!--COD  -->

					<!-- DO -->
					<ul class="remark" style="display: none;" id="doLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_2.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>좋음</li>
								<li>7 . 5 이상</li>
							</ul>
						</li>
						<li>
							<ul class="remark_02">
								<li
									style="background-image: url(../resources/img/remark_4.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>보통</li>
								<li>5 .0 이상</li>
							</ul>
						</li>
						<li>
							<ul class="remark_03">
								<li
									style="background-image: url(../resources/img/remark_5.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간나쁨</li>
								<li>2 . 0 이상</li>
							</ul>
						</li>
						<li>
							<ul class="remark_04">
								<li
									style="background-image: url(../resources/img/remark_7.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우나쁨</li>
								<li>2 . 0 미만</li>
							</ul>
						</li>
					</ul>
					<!--DO	-->


					<ul class="remark" style="display: none;" id="phLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_1.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>보통</li>
								<li>6 . 5 ~ 8 . 5</li>
							</ul>
						</li>
						<li>
							<ul class="remark_04">
								<li
									style="background-image: url(../resources/img/remark_7.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>나쁨</li>
								<li>그 외</li>
							</ul>
						</li>
					</ul>

					<!--pH  -->

					<ul class="remark" style="display: none" id="tpLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_1.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우좋음(la)</li>
								<li>0 . 0 2 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_02">
								<li
									style="background-image: url(../resources/img/remark_2.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>좋음(lb)</li>
								<li>0 . 0 4 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_03">
								<li
									style="background-image: url(../resources/img/remark_3.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간좋음(ll)</li>
								<li>0 . 1 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_04">
								<li
									style="background-image: url(../resources/img/remark_4.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>보통(lll)</li>
								<li>0 . 2 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_05">
								<li
									style="background-image: url(../resources/img/remark_5.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간나쁨(lV)</li>
								<li>0 . 3 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_06">
								<li
									style="background-image: url(../resources/img/remark_6.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>나쁨(V)</li>
								<li>0 . 5 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_07">
								<li
									style="background-image: url(../resources/img/remark_7.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우나쁨(Vl)</li>
								<li>0 . 5 초과</li>
							</ul>
						</li>
					</ul>
					<!--TP -->


					<ul class="remark" style="display: none" id="tocLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_1.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우좋음(la)</li>
								<li>2 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_02">
								<li
									style="background-image: url(../resources/img/remark_2.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>좋음(lb)</li>
								<li>3 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_03">
								<li
									style="background-image: url(../resources/img/remark_3.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간좋음(ll)</li>
								<li>4 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_04">
								<li
									style="background-image: url(../resources/img/remark_4.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>보통(lll)</li>
								<li>5 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_05">
								<li
									style="background-image: url(../resources/img/remark_5.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간나쁨(lV)</li>
								<li>6 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_06">
								<li
									style="background-image: url(../resources/img/remark_6.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>나쁨(V)</li>
								<li>8 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_07">
								<li
									style="background-image: url(../resources/img/remark_7.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우나쁨(Vl)</li>
								<li>8 초과</li>
							</ul>
						</li>
					</ul>
					<!-- TOC -->


					<ul class="remark" style="display: none" id="takdoLegend">
						<li>
							<ul class="remark_01">
								<li
									style="background-image: url(../resources/img/remark_1.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>매우좋음(la)</li>
								<li>25 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_05">
								<li
									style="background-image: url(../resources/img/remark_5.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>약간나쁨(lV)</li>
								<li>100 이하</li>
							</ul>
						</li>
						<li>
							<ul class="remark_06">
								<li
									style="background-image: url(../resources/img/remark_6.png); background-repeat: no-repeat; background-position: center center;"></li>
								<li>나쁨(V)</li>
								<li>쓰레기등이 <br>떠있지<br>아니할 것
								</li>
							</ul>
						</li>
					</ul>
					<!-- 탁도 -->



				</div>
				<div class="right_close"></div>
			</div>

			<div id="overviewMap" style="border: 2px solid #000000;"></div>
		</div>
		<div id="bottom">
			<!-- <div class="item">BOD</div><div class="item2">("㎎/L")</div> -->
			<div class="item" style="text-align: center;">
				<font id="item" size=4>BOD</font><font id="item2" size=2>(㎎/L)</font>
				<div id="item3" style="width: 200px;">시간</div>
			</div>
			<div class="area_name"></div>
			<div id="Data_Rolling" style="overflow: hidden;">
				<ul id="scroller">
					<li></li>
					<li></li>

				</ul>
				<div class="copyright">
					<img src="../resources/img/copyright.png">
				</div>
				
			</div>
			<p class="date_txt" style="padding-left: 1760px; padding-top: 18px;">2014년 03월 25일 15:35</p>
		</div>

		<div id="dialog-modal" title="알림">
			<p align="center">로딩 중입니다.</p>
			<img src="../resources/img/loading6.gif"
				style="position: relative; left: 90px; display: inline;">
		</div>
</body>
</html>