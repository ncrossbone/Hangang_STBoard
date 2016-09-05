/**
 * @FileName : Main1.js
 * @Project : hangang
 * @Date : 2014. 3. 24.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 :
 */
function Main() {
	var twoDMapClass = null;
	var threeDMapClass = null;
	
	var mapManager = null;

	var controlPanel = null;
	var footerPanel = null;
	var topPanel = null;
	
	this.alarmDataCollection = {};
	this.alarmDataKeys = null;
	this.alarmDataKeys1 = null;

	this.alarmNowMmpNum = 0;
	this.alarmNowMsmLtNum = 0;
	
	/**
	 * 
	 * @Date : 2014. 3. 24.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : Main class를 initailize 해주는 메서드
	 */
	this.init = function() {

		initUI.apply(this, []);

		controlPanel = new ControlPanel();
		controlPanel.init();

		mapManager = new MapManager();

		twoDMapClass = new TwoDMap();
		threeDMapClass = new ThreeDMap();

		twoDMapClass.initMap();

		// Dal test

		twoDMapClass.setMapType(Map.SATELLITE_MAP);
		// twoDMapClass.setMapType(Map.SATELLITE_MAP);

		var mapClasses = {
			threeD : threeDMapClass,
			twoD : twoDMapClass
		}

		mapManager.setMapClasses(mapClasses);

		footerPanel = new FooterPanel();
		footerPanel.init();

		topPanel = new TopPanel();
		topPanel.init();

		// 컨트롤 페널 이벤트 등록
		controlPanel
				.addSettingButtonClickEventListener(mapManager.settingButtonClickEventListener);
		controlPanel
				.addSettingButtonClickEventListener(topPanel.settingButtonClickEventListener);
		controlPanel
				.addSettingButtonClickEventListener(footerPanel.settingButtonClickEventListener);

		controlPanel
				.addSettingWMSClickEventListener(twoDMapClass.settingWMSClickEventListener);
		controlPanel
				.addSettingWMSClickEventListener(threeDMapClass.settingWMSClickEventListener);

		$(".right_close").click(function(event) {
			main.getTwoDMap().legendShowAndHide();
		});

		$(window).resize(function(event) {
			main.windowSizeChange();
		});

		this.initRealtimeData();
	}

	/**
	 * 
	 * @Date : 2014. 4. 22.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 실시간 데이터를 initailize 하는 메서드
	 */
	this.initRealtimeData = function() {

		var spotGubun;
		$('ul.place_box')
				.find('input')
				.each(
						function(index, element) {
							if (element.checked == true) {
								if (eval("ControlPanel." + element.name) != ControlPanel.WATER_QAULITY_MONITORING_NETWORK) {
									// alert(eval("ControlPanel."+element.name));
									spotGubun = eval("ControlPanel."
											+ element.name);
								}

							}
						});
		// ControlPanel.
		main.getRealtimeData(spotGubun);
	}

	/**
	 * 
	 * @Date : 2014. 4. 22.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 실시간 데이터를 주기적으로 변경해주는 메서드
	 */
	this.startAlarView = function() {
		var msmLtCd = main.alarmDataKeys1[main.alarmNowMsmLtNum];
		var mmpInfoArray = main.alarmDataCollection[main.alarmDataKeys[main.alarmNowMmpNum]];
		for (var a = 0; a < main.alarmDataKeys1.length; a++) {

			if (msmLtCd == mmpInfoArray[a].getMsmLtCd()) {
				$("#mmpNameText").html(mmpInfoArray[a].getMmpNm());
				if (mmpInfoArray[a].getColDdDt() == '' || null) {
					$("#colDdDtText").html('No Data');
				} else {
					$("#colDdDtText").html(mmpInfoArray[a].getColDdDt());
				}
				$("#msmLtNmText").html(mmpInfoArray[a].getmsmLtNm());

				mmpInfoArray[a].getCheck();

			}
		}

		main.alarmNowMsmLtNum++;

		if (mmpInfoArray.length == main.alarmNowMsmLtNum) {
			main.alarmNowMsmLtNum = 0;
			main.alarmNowMmpNum++;
		}

		if (main.alarmNowMmpNum == main.alarmDataKeys.length) {
			// 전체 한바퀴 다 돌았을 경우

			main.alarmNowMsmLtNum = 0;
			main.alarmNowMmpNum = 0;
			main.getRealtimeData();
		} else {
			setTimeout(main.startAlarView, 3000);
		}
	}

	/**
	 * 
	 * @Date : 2014. 4. 22.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 실시간 데이터를 받아오는 메서드
	 */
	this.getRealtimeData = function(spotGubun) {
		$
				.ajax(
						{
							url : "../jsps/queryData/getQueryData.jsp?queryNum=53&requestType=2&spotGubun="
									+ spotGubun,
							dataType : "json"
						})
				.done(
						function(data) {
							var result = data.d[0];
							var alarmData = null;
							main.alarmDataCollection = {};
							main.alarmDataKeys = null;
							main.alarmDataKeys = new Array();
							main.alarmDataKeys1 = null;
							main.alarmDataKeys1 = new Array();
							main.alarmDataKeys1.push("HM0002");
							main.alarmDataKeys1.push("HM0003");
							main.alarmDataKeys1.push("HM0006");
							main.alarmDataKeys1.push("HM0007");
							main.alarmDataKeys1.push("HM0008");
							main.alarmDataKeys1.push("HM0016");
							main.alarmDataKeys1.push("HM0017");
							main.alarmDataKeys1.push("HM0022");

							for (var a = 0; a < result.length; a++) {
								alarmData = null;
								alarmData = new AlarmData();
								alarmData.setMmpCd(result[a]["mmpCd"]);
								alarmData.setMwCd(result[a]["mwCd"]);
								alarmData.setMsmLtNm(result[a]["msmLtNm"]);
								alarmData.setMmpNm(result[a]["mmpNm"]);
								alarmData.setColDdDt(result[a]["colDdDt"]);
								alarmData.setMsmLtCd(result[a]["msmLtCd"]);

								if (main.alarmDataCollection[result[a]["mmpCd"]] == undefined) {
									var array = new Array();
									array.push(alarmData);
									main.alarmDataCollection[result[a]["mmpCd"]] = array;
									main.alarmDataKeys.push(result[a]["mmpCd"]);
								} else {
									main.alarmDataCollection[result[a]["mmpCd"]]
											.push(alarmData);
								}
							}

							main.startAlarView();
						});
	}

	/**
	 * 
	 * @Date : 2014. 4. 22.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 화면 사이트 변경 이벤트 Handler
	 */
	this.windowSizeChange = function() {
		var topAreaHeight = $("#Top_Area").height();
		var bottomAreaHeight = $("#bottom").height();
		var documentHeight = $(window).height();

		var height = documentHeight - topAreaHeight - bottomAreaHeight;
		$("#GIS_Area").height(height + "px");
		$("#gis").height(height + "px");
	}

	/**
	 * 
	 * @Date : 2014. 4. 22.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 메인 ui를 initialize하는 메서드
	 */
	function initUI() {
		this.windowSizeChange();
	}

	/**
	 * 
	 * @Date : 2014. 3. 24.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 : Map 갹체로 이동 더이상 사용되지 않음
	 * @프로그램 설명 : Map 객체의 setMapType 메서드를 호출해주는 중간 메서드
	 */
	this.setMapType = function(type) {
		mapClass.setMapType(type);
		var $buttonImage = $("#buttonImage");

		if (type == Map.BASE_MAP) {
			$buttonImage.attr("src", "../resources/img/right_top_1.png");
		} else if (type == Map.SATELLITE_MAP) {
			$buttonImage.attr("src", "../resources/img/right_top_2.png");
		}
	}

	/**
	 * 
	 * @Date : 2014. 3. 24.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : Map 객체 getter
	 */
	this.getTwoDMap = function() {
		return twoDMapClass;
	}

	/**
	 * 
	 * @Date : 2014. 3. 27.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : controlPanel 객체 getter
	 */
	this.getControlPanel = function() {
		return controlPanel;
	}

	/**
	 * 
	 * @Date : 2014. 3. 27.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : footerPanel 객체 getter
	 */
	this.getFooterPanel = function() {
		return footerPanel;
	}

	/**
	 * 
	 * @Date : 2014. 4. 22.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : topPanel 객체 getter
	 */
	this.getTopPanel = function() {
		return topPanel;
	}

	/**
	 * 
	 * @Date : 2014. 4. 25.
	 * @MethodType : public.
	 * @작성자 : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : ThreeDMap 객체 getter
	 */
	this.getThreeDMap = function() {
		return threeDMapClass;
	}

	this.getMapManager = function() {
		return mapManager;
	}
}