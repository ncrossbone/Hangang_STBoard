ControlPanel.WATER_QAULITY_MONITORING_NETWORK = "000";
ControlPanel.WQMN_GENERAL_SPOT = "001";//일반지점
ControlPanel.WQMN_TOTAL_SPOT = "003";//총량지점
ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION = "002";//중권역대표지점
ControlPanel.WQMN_MAIN_SPOT = "004";//주요지점
ControlPanel.WQMN_FORECAST_SPOT = "005";//예보지점
ControlPanel.WQMN_BO_SPOT = "006";//보지점


ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK = "007";//자동측정망
ControlPanel.TIDE_MEASUREMENT_NETWORK = "008";//조류측정망
ControlPanel.IP_USN = "009";
ControlPanel.DAM_BO = "010";

ControlPanel.BOD = "HM0001";
ControlPanel.CHL_A = "HM0002";
ControlPanel.TP = "HM0003";
ControlPanel.TEMP = "HM0004";
ControlPanel.COD = "HM0005";
ControlPanel.PH = "HM0006";
ControlPanel.DO = "HM0007";
ControlPanel.TN = "HM0008";
//ControlPanel.TOTAL_TIDE = "HM0009";
ControlPanel.TOTAL_TIDE = "HM0023"; // 총조류 khLee 20151115 코드 변경
ControlPanel.YU = "HM0010"; // 유량

/* 실시간 데이터 경보 추가 */
ControlPanel.TAKDO = "HM0016";
ControlPanel.TOC = "HM0017";
ControlPanel.EC = "HM0022";
ControlPanel.MS = "HM0019"; // 미생물감시 (자료 없음)
ControlPanel.AHI = "HM0020"; // 조류독성지수 (자료 없음)
ControlPanel.WAI = "HM0021"; // // 물벼룩독성지수 (자료 없음)

//박순형 140730 임시 코드추가 
/* 자동측정망*/
ControlPanel.VOCS = "HM0013"; // VOCs
/* 조류측정망*/
ControlPanel.CYA = "HM0024"; // // 남조류 (자료 없음)
ControlPanel.DIA = "HM0025"; // // 규조류 (자료 없음)
ControlPanel.CHL = "HM0026"; // // 녹조류 (자료 없음)
/* IP-USN*/
ControlPanel.ELE = "HM0027"; // // 전기전도도 (자료 없음)

/* 댐.보 추가 */
ControlPanel.RS = "HM0028"; // 수위
ControlPanel.RA = "HM0031"; // 저수량
ControlPanel.GO = "HM0032"; // 공용량
ControlPanel.YI = "HM0034"; // 유입량
ControlPanel.TB = "HM0035"; // 방유량

/**
 * @FileName  : ControlPanel.js
 * @Project     : hangang
 * @Date         : 2014. 3. 27. 
 * @작성자      : Leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : 컨트롤 페널 객체
 */
function ControlPanel(){
	var spotChangeEventListener = new Array();
	var listChangeEventListener = new Array();
	var settingButtonClickEventListener = new Array();
	var settingWMSClickEventListener = new Array();

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 28. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 적용버튼 클릭 이벤트 등록 메서드
	 */
	this.addSettingButtonClickEventListener = function(eventListener){
		settingButtonClickEventListener.push(eventListener);
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 31. 
	 * @작성자      : woosunchul
	 * @변경이력 :
	 * @프로그램 설명 : wms 적용버튼 클릭 이벤트 등록 메서드
	 */
	this.addSettingWMSClickEventListener = function(eventListener){
		settingWMSClickEventListener.push(eventListener);
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 지점 구분 클릭 변경 이벤트 등록 메서드
	 */
	this.addSpotChangeEventListener = function(eventListener){
		spotChangeEventListener.push(eventListener);
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 항목 구분 클릭 변경 이벤트 등록 메서드
	 */
	this.addListChangeEventListener = function(eventListener){
		listChangeEventListener.push(eventListener);
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 지점 구분 클릭 변경 이벤트 제거 메서드
	 */
	this.removeSpotChangeEventListener = function(eventListener){
		for(var a = 0; a < spotChangeEventListener.length; a++){
			if(spotChangeEventListener[a] === eventListener){
				spotChangeEventListener.remove(a);
				break;
			}
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 항목 구분 클릭 변경 이벤트 제거 메서드
	 */
	this.removeListChangeEventListener = function(eventListener){
		for(var a = 0; a < listChangeEventListener.length; a++){
			if(listChangeEventListener[a] === eventListener){
				listChangeEventListener.remove(a);
				break;
			}
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 28. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 적용버튼 클릭 이벤트 제거 메서드
	 */
	this.removeSettingButtonClickEventListener = function(eventListener){
		for(var a = 0; a < settingButtonClickEventListener.length; a++){
			if(settingButtonClickEventListener[a] === eventListener){
				settingButtonClickEventListener.remove(a);
				break;
			}
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 31. 
	 * @작성자      : woosunchul
	 * @변경이력 :
	 * @프로그램 설명 : wms 적용버튼 클릭 이벤트 제거 메서드
	 */
	this.removeSettingwmsClickEventListener = function(eventListener){
		for(var a = 0; a < settingwmsClickEventListener.length; a++){
			if(settingwmsClickEventListener[a] === eventListener){
				settingwmsClickEventListener.remove(a);
				break;
			}
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 지점 구분 변경 이벤트를 발생시키는 메서드
	 */
	this.fireSpotChangeEvent = function(target){
		var spotChangeEvent = new SpotChangeEvent();
		var spotValue = $(target.currentTarget).val();
		var listValue = $('ul.item_box').find('input:checked').val()
		//alert(listValue);
		spotChangeEvent.setValue({spotValue : eval(spotValue)});
		spotChangeEvent.setValue({listValue : eval(listValue)});

		for(var a = 0; a < spotChangeEventListener.length; a++){
			spotChangeEventListener[a].apply(this, [spotChangeEvent]);
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 항목 구분 변경 이벤트를 발생시키는 메서드
	 */
	this.fireListChangeEvent = function(target){
		var listChangeEvent = new ListChangeEvent();
		var listValue = $(target.currentTarget).val();
		var spotValue;

		$('ul.place_box').find('input:checked').each(function(index, element){
			if(element.value != ControlPanel.WATER_QAULITY_MONITORING_NETWORK){
				spotValue = element.value;
			}
		});

		listChangeEvent.setValue({spotValue : eval(spotValue)});
		listChangeEvent.setValue({listValue : eval(listValue)});

		for(var a = 0; a < listChangeEventListener.length; a++){
			listChangeEventListener[a].apply(this, [listChangeEvent]);
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 28. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 항목 구분 변경 이벤트를 발생시키는 메서드
	 */
	this.fireSettingButtonClickEvent = function(target){
		
		var topPanel = main.getTopPanel();
		topPanel.stopMove();
		$(".b_07 a").show();
		$(".b_08 a").hide();
		
		var settingButtonClickEvent = new SettingButtonClickEvent();
		var listValue = $('ul.item_box').find('input:checked').val();
		var spotValue;
		var lon;
		var lat;
		var baseString ="javascript: ControlPanel."

			$('ul.place_box').find('input:checked').each(function(index, element){
				if(element.value != ControlPanel.WATER_QAULITY_MONITORING_NETWORK){
					//적용버튼 클릭 시 중심점 이동 2016.04.06 hyeok 
					switch(element.value){
					case baseString+"WQMN_GENERAL_SPOT": 
						lon=14164696.84856;
						lat=4515350.941514;
						break;
					case baseString+"WQMN_TOTAL_SPOT":
						lon=14182365.756059;
						lat=4538645.1468495;
						break;
					case baseString+"WQMN_REPRESECTATION_MIDDLE_SECTION":
						lon=14169651.237678;
						lat=4512628.669361;
						break;
					case baseString+"WQMN_MAIN_SPOT":
						lon=14169651.237678;
						lat=4512628.669361;
						break;
					case baseString+"WQMN_BO_SPOT":
						lon=14213993.276218;
						lat=4476709.6953706;
						break;
					case baseString+"WQMN_FORECAST_SPOT":
						lon=14176442.713284;
						lat=4526914.959065;
						break;
					case baseString+"AUTOMATIC_MEASUREMENT_NETWORK":
						lon=14180123.866517;
						lat=4533454.2233111;
						break;
					case baseString+"TIDE_MEASUREMENT_NETWORK":
						lon=14169116.817906;
						lat=4540262.5936187;
						break;
					case baseString+"DAM_BO":
						lon=14167876.49611;
						lat=4513297.8423883;
						break;

					}
					map.setCenter(new OpenLayers.LonLat(lon, lat),
							15);

					spotValue = element.value;
				}
			});

		settingButtonClickEvent.setValue({spotValue : eval(spotValue)});
		settingButtonClickEvent.setValue({listValue : eval(listValue)});

		for(var a = 0; a < settingButtonClickEventListener .length; a++){
			settingButtonClickEventListener [a].apply(this, [settingButtonClickEvent]);
		}


		$( "#dialog-modal" ).dialog({
			height: 140,
			modal: true
		});

		var progressbar = $( "#progressbar" ),
		progressLabel = $( ".progress-label" );

		progressbar.progressbar({
			value: false
		});

		$("#opacitySlider").slider("value", 100);

	}

	/**
	 * @Project   : hangang
	 * @Date      : 2014. 3. 31. 
	 * @작성자      : woosunchul
	 * @변경이력 :
	 * @프로그램 설명 : wms 항목 구분 변경 이벤트를 발생시키는 메서드
	 */
	this.fireSettingwmsClickEvent = function(){
		var settingWMSClickEvent = new WMSChangeEvent();
		var checkedList = new Array();

		$('ul.wms_box').find('input').each(function(index, element){
			if(element.checked == true){
				checkedList.push({
					id : $(element).attr("id"),
					value : $(element).val(),
					isChecked : true
				});
			}else{
				checkedList.push({
					id : $(element).attr("id"),
					value : $(element).val(),
					isChecked : false
				});
			}
		});

		settingWMSClickEvent.setValue({spotValue : checkedList});

		for(var a = 0; a < settingWMSClickEventListener .length; a++){
			settingWMSClickEventListener [a].apply(this, [settingWMSClickEvent]);
		}	
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : ControlPanel 객체를 init 해주는 메서드
	 */
	this.init = function(){
		defaultUI();
		setEvent();

		this.changeListInputVisiable(2);
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 이벤트를 등록하는 메서드
	 */
	function setEvent(){
		$('ul.place_box').find('input').change(function(target){
			var value = eval($(target.currentTarget).val());
			//이벤트 주체
			var currentTarget = target.currentTarget;
			if(currentTarget.checked == true){
				//체크가 된것
				$('ul.place_box').find('input').each(function(index, element){
					if(currentTarget !== element && element.checked == true){
						element.checked = false;
					}
				});

				var $sujilInput = $('input[name="WATER_QAULITY_MONITORING_NETWORK"]');

				if(value > ControlPanel.WATER_QAULITY_MONITORING_NETWORK && value < ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK){
					//수질측정망 이하의 항목

					$sujilInput[0].checked = true;
				}else if(value != ControlPanel.WATER_QAULITY_MONITORING_NETWORK){
					$('input[name="WATER_QAULITY_MONITORING_NETWORK"]').removeAttr("checked");
				}else if(value == ControlPanel.WATER_QAULITY_MONITORING_NETWORK){
					$('ul.place_box').find('input').each(function(index, element){
						element.checked = false;
					});

					$('input[name="WATER_QAULITY_MONITORING_NETWORK"]')[0].checked = true;
					$('input[name="WQMN_GENERAL_SPOT"]')[0].checked = true;
				}

				main.getControlPanel().changeListInputVisiable(value);
			}else{
				//체크가 풀린것 다시 체크한다.
				currentTarget.checked = true;
				return false;
			}
		});

		$("#settingButton").click(function(target){
			main.getControlPanel().fireSettingButtonClickEvent(target);
		});

		//wms on/off 
		$('ul.wms_box').find('input').change(function(target){
			main.getControlPanel().fireSettingwmsClickEvent();
		});

		$(".left_close").click(function(event){
			main.getControlPanel().controlPanelShowAndHide();
		});
	}
 
	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 컨트롤 페널의 움직임을 처리하는 메서드
	 */
	this.controlPanelShowAndHide = function(){
		var $accordion = $("#accordion");
		var $wrapAccordion = $("#wrapAccordion");
		var $topArea = $("#Top_Area");
		var $leftClick = $(".left_close");
		var height = 0;

		if($accordion.css("opacity") == 1){

			//접기
			height = $wrapAccordion.height() - $topArea.height();

			$wrapAccordion.animate({
				top : "-" + height  + "px"
			}, 1000);

			$accordion.animate({
				opacity : 0
			}, 1000);

			$(".left_close").css("background", "url(../resources/img/left_menu_open.png) no-repeat");
		}else{
			height = $topArea.height();

			$wrapAccordion.animate({
				top : height + "px"
			}, 1000);

			$accordion.animate({
				opacity : 1
			}, 1000);

			$(".left_close").css("background", "url(../resources/img/left_menu_close.png) no-repeat");
		}
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 지점에 따라 조사 항목의 목록을 변경시켜주는 메서드
	 */
	this.changeListInputVisiable = function(value){
		// 14.07.23 박순형 하위선택 항목별 순서변경
		var viewValue = [];
		if(ControlPanel.WATER_QAULITY_MONITORING_NETWORK == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];
		}else if(ControlPanel.WQMN_GENERAL_SPOT == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];
		}else if(ControlPanel.WQMN_TOTAL_SPOT == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];
		}else if(ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];
		}else if(ControlPanel.WQMN_MAIN_SPOT == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];
		}else if(ControlPanel.WQMN_BO_SPOT == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];
		}else if(ControlPanel.WQMN_FORECAST_SPOT == value){
			viewValue = [ ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU];

		}else if(ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK == value){
			viewValue = [ ControlPanel.TEMP, ControlPanel.PH, ControlPanel.DO, ControlPanel.EC, ControlPanel.MS, ControlPanel.CHL_A, ControlPanel.TOC, ControlPanel.TAKDO, ControlPanel.TN, ControlPanel.TP, ControlPanel.VOCS  ];

		}else if(ControlPanel.TIDE_MEASUREMENT_NETWORK == value){//조류 측정망
			viewValue = [ ControlPanel.CHL_A, ControlPanel.TOTAL_TIDE, ControlPanel.TEMP, ControlPanel.BOD, ControlPanel.TP, ControlPanel.PH, ControlPanel.DO, ControlPanel.COD, ControlPanel.TN, ControlPanel.CYA, ControlPanel.CHL, ControlPanel.DIA ];
		}else if(ControlPanel.IP_USN == value){
			viewValue = [ ControlPanel.CHL_A, ControlPanel.TEMP,  ControlPanel.PH, ControlPanel.DO, ControlPanel.ELE, ControlPanel.TAKDO ];
		}else if(ControlPanel.DAM_BO == value){
			viewValue = [ ControlPanel.RS, ControlPanel.RA, ControlPanel.GO, ControlPanel.VI, ControlPanel.TB ];
		}
		$("#item_box").empty();
		for(var a = 0; a < viewValue.length; a++){

			if(viewValue[a]==ControlPanel.BOD){
				$("#item_box").append("<li><input name='BOD' type='checkbox' value='javascript : ControlPanel.BOD' checked='checked' >BOD</li>");
			}else if(viewValue[a]==ControlPanel.CHL_A){
				$("#item_box").append("<li><input name='CHL_A' type='checkbox' value='javascript : ControlPanel.CHL_A'>Chl-a</li>");
			}else if(viewValue[a]==ControlPanel.TP){
				$("#item_box").append("<li><input name='TP' type='checkbox' value='javascript : ControlPanel.TP'>TP</li>");
			}else if(viewValue[a]==ControlPanel.TEMP){
				$("#item_box").append("<li><input name='TEMP' type='checkbox' value='javascript : ControlPanel.TEMP'>수온</li>");
			}else if(viewValue[a]==ControlPanel.COD){
				$("#item_box").append("<li><input name='COD' type='checkbox' value='javascript : ControlPanel.COD'>COD</li>");
			}else if(viewValue[a]==ControlPanel.PH){
				$("#item_box").append("<li><input name='PH' type='checkbox' value='javascript : ControlPanel.PH'>pH</li>");
			}else if(viewValue[a]==ControlPanel.DO){
				$("#item_box").append("<li><input name='DO' type='checkbox' value='javascript : ControlPanel.DO'>DO</li>");
			}else if(viewValue[a]==ControlPanel.TN){
				$("#item_box").append("<li><input name='TN' type='checkbox' value='javascript : ControlPanel.TN'>TN</li>");
			}else if(viewValue[a]==ControlPanel.TOTAL_TIDE){
				$("#item_box").append("<li><input name='TOTAL_TIDE' type='checkbox' value='javascript : ControlPanel.TOTAL_TIDE'>총조류</li>");
			}else if(viewValue[a]==ControlPanel.YU){
				$("#item_box").append("<li><input name='YU' type='checkbox' value='javascript : ControlPanel.YU'>유량</li>");
			}else if(viewValue[a]==ControlPanel.TAKDO){
				$("#item_box").append("<li><input name='TAKDO' type='checkbox' value='javascript : ControlPanel.TAKDO'>탁도</li>");
			}else if(viewValue[a]==ControlPanel.TOC){
				$("#item_box").append("<li><input name='TOC' type='checkbox' value='javascript : ControlPanel.TOC'>TOC</li>");
			}else if(viewValue[a]==ControlPanel.EC){
				$("#item_box").append("<li><input name='EC' type='checkbox' value='javascript : ControlPanel.EC'>EC</li>");
			}else if(viewValue[a]==ControlPanel.MS){

			}else if(viewValue[a]==ControlPanel.AHI){

			}else if(viewValue[a]==ControlPanel.VOCS){
				$("#item_box").append("<li><input name='VOCS' type='checkbox' value='javascript : ControlPanel.VOCS'>VOCs</li>");

			}else if(viewValue[a]==ControlPanel.CYA){
				$("#item_box").append("<li><input name='CYA' type='checkbox' value='javascript : ControlPanel.CYA'>남조류</li>");
			}else if(viewValue[a]==ControlPanel.CHL){
				$("#item_box").append("<li><input name='CHL' type='checkbox' value='javascript : ControlPanel.CHL'>녹조류</li>");
			}else if(viewValue[a]==ControlPanel.DIA){
				$("#item_box").append("<li><input name='DIA' type='checkbox' value='javascript : ControlPanel.DIA'>규조류</li>");
			}else if(viewValue[a]==ControlPanel.ELE){
				$("#item_box").append("<li><input name='ELE' type='checkbox' value='javascript : ControlPanel.ELE'>전기전도도</li>");
			}else if(viewValue[a]==ControlPanel.WAI){

			}else if(viewValue[a]==ControlPanel.RS){
				$("#item_box").append("<li><input name='RS' type='checkbox' value='javascript : ControlPanel.RS'>수위</li>");
			}else if(viewValue[a]==ControlPanel.RA){
				$("#item_box").append("<li><input name='RA' type='checkbox' value='javascript : ControlPanel.RA'>유입량</li>");
			}else if(viewValue[a]==ControlPanel.GO){
				$("#item_box").append("<li><input name='GO' type='checkbox' value='javascript : ControlPanel.GO'>총뱡류량</li>");
			}else if(viewValue[a]==ControlPanel.YI){
				$("#item_box").append("<li><input name='YI' type='checkbox' value='javascript : ControlPanel.YI'>저수량</li>");
			}else if(viewValue[a]==ControlPanel.TB){
				$("#item_box").append("<li><input name='TB' type='checkbox' value='javascript : ControlPanel.TB'>공용량</li>");
			}


//			if(viewValue[a]==ControlPanel.BOD){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.BOD' checked='checked' >BOD</li>");
//			}else if(viewValue[a]==ControlPanel.CHL_A){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.CHL_A'>Chl-a</li>");
//			}else if(viewValue[a]==ControlPanel.TP){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TP'>TP</li>");
//			}else if(viewValue[a]==ControlPanel.TEMP){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TEMP'>수온</li>");
//			}else if(viewValue[a]==ControlPanel.COD){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.COD'>COD</li>");
//			}else if(viewValue[a]==ControlPanel.PH){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.PH'>pH</li>");
//			}else if(viewValue[a]==ControlPanel.DO){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.DO'>DO</li>");
//			}else if(viewValue[a]==ControlPanel.TN){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TN'>TN</li>");
//			}else if(viewValue[a]==ControlPanel.TOTAL_TIDE){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TOTAL_TIDE'>총조류</li>");
//			}else if(viewValue[a]==ControlPanel.YU){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.YU'>유량</li>");
//			}else if(viewValue[a]==ControlPanel.TAKDO){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TAKDO'>탁도</li>");
//			}else if(viewValue[a]==ControlPanel.TOC){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TOC'>TOC</li>");
//			}else if(viewValue[a]==ControlPanel.EC){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.EC'>EC</li>");
//			}else if(viewValue[a]==ControlPanel.MS){

//			}else if(viewValue[a]==ControlPanel.AHI){

//			}else if(viewValue[a]==ControlPanel.VOCS){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.VOCS'>VOCs</li>");

//			}else if(viewValue[a]==ControlPanel.CYA){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.CYA'>남조류</li>");
//			}else if(viewValue[a]==ControlPanel.CHL){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.CHL'>녹조류</li>");
//			}else if(viewValue[a]==ControlPanel.DIA){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.DIA'>규조류</li>");
//			}else if(viewValue[a]==ControlPanel.ELE){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.ELE'>전기전도도</li>");
//			}else if(viewValue[a]==ControlPanel.WAI){

//			}else if(viewValue[a]==ControlPanel.RS){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.RS'>수위</li>");
//			}else if(viewValue[a]==ControlPanel.RA){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.RA'>유입량</li>");
//			}else if(viewValue[a]==ControlPanel.GO){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.GO'>총뱡류량</li>");
//			}else if(viewValue[a]==ControlPanel.YI){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.YI'>저수량</li>");
//			}else if(viewValue[a]==ControlPanel.TB){
//			$("#item_box").append("<li><input name='ITEMGUBUN' type='checkbox' value='javascript : ControlPanel.TB'>공용량</li>");
//			}
		}

//		$('ul.item_box').find('input').each(function(index, element){
//		for(var a = 0; a < viewValue.length; a++){
//		var parent = $(element).parent('li');
//		if(eval(element.value) == viewValue[a]){
//		$(parent).css("display", "block");
//		break;
//		}else{
//		$(parent).css("display", "none");
//		}
//		}
//		});

		$('ul.item_box').find('input').each(function(index, element){
			if(index==0){
				$("input:checkbox[name='"+element.name+"']").attr("checked", true);
			}else{
				$("input:checkbox[name='"+element.name+"']").attr("checked", false);
			}

			//element.checked = false;
		});
		$('#item_box').find('input').change(function(target){
			var value = eval($(target.currentTarget).val());
			//이벤트 주체
			var currentTarget = target.currentTarget;

			if(currentTarget.checked == true){
				$('ul.item_box').find('input').each(function(index, element){
					if(currentTarget !== element && element.checked == true){
						element.checked = false;
					}
				});

				main.getControlPanel().fireListChangeEvent(target);
			}else{
				currentTarget.checked = true;
				return false;
			}
		});
//		$('ul.item_box').find('input').each(function(index, element){
//		var $parent = $(element).parent('li');
//		var display = $parent.css("display");

//		if(display == 'block'){
//		element.checked = true;

//		return false;
//		}
//		});
	}

	/**
	 * @Project     : hangang
	 * @Date         : 2014. 3. 27. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : ControlPanel의 기본 ui를 세팅해주는 메서드
	 */
	function defaultUI() {
		$("#accordion").accordion({
			heightSytle : "content"
		});

		$("#opacitySlider").slider({
			orientation: "horizontal",
			min: 0,
			max: 100,
			value: 100,
			slide: function(){
				var val = $("#opacitySlider").slider( "value" );
				var mapClass = main.getMapManager();

				mapClass.setOpacity.apply(mapClass, [ TwoDMap.CHART_VECTOR_LAYER_NAME, val / 100 ]);

				$("#opacityTextfield").html("투명도 : " + val + "%");
			}
		});
	}
}