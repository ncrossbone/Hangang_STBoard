/**
 * @FileName  : TopPanel.js
 * @Project     : hangang
 * @Date         : 2014. 3. 31. 
 * @작성자      : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : TopPanel 객체
 */
function TopPanel(){
	this.autoData = null;
	this.autoDataIndex = 0;
	this.timeout = null;
	this.isAuto = false;
	this.autoListIndex = 0;
	this.isPause = false;
	this.isSeached = false;
	this.jungCode = null;
	this.measure = null;
	this.autoList = {
			//14.07.22 박순형 모든지점 자동기능 추가
			// khLee 20151115 항목 추가
			//"일반지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP],
			"일반지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU],
			//"총량지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP],
			"총량지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU],
			//"중권역대표지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP],
			"중권역대표지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU],
			//"주요지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP],
			"주요지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU],
			//"보지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP],
			"보지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU],
			//"예보지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP],
			"예보지점" : [ControlPanel.BOD, ControlPanel.CHL_A, ControlPanel.TP, ControlPanel.TEMP, ControlPanel.COD, ControlPanel.PH, ControlPanel.DO, ControlPanel.TN, ControlPanel.TOTAL_TIDE, ControlPanel.YU],
			//"자동측정망" : [ControlPanel.TEMP, ControlPanel.PH, ControlPanel.DO, ControlPanel.EC, ControlPanel.CHL_A],
			"자동측정망" : [ControlPanel.TEMP, ControlPanel.PH, ControlPanel.DO, ControlPanel.EC, ControlPanel.CHL_A, ControlPanel.TOC, ControlPanel.TAKDO, ControlPanel.TN, ControlPanel.TP, ControlPanel.VOCS],
			//"조류측정망" : [ControlPanel.CHL_A, ControlPanel.TOTAL_TIDE, ControlPanel.TEMP, ControlPanel.BOD, ControlPanel.TP],
			"조류측정망" : [ControlPanel.CHL_A, ControlPanel.TOTAL_TIDE, ControlPanel.TEMP, ControlPanel.BOD, ControlPanel.TP, ControlPanel.PH, ControlPanel.DO, ControlPanel.COD, ControlPanel.TN, ControlPanel.CYA, ControlPanel.CHL, ControlPanel.DIA],
			"ipUsn"	 : [ControlPanel.CHL_A, ControlPanel.TEMP, ControlPanel.PH, ControlPanel.DO, ControlPanel.ELE, ControlPanel.TAKDO],
			"댐보" : [ControlPanel.RS, ControlPanel.RA, ControlPanel.GO, ControlPanel.YI, ControlPanel.TB]
	};
	
	/**
	 * @Date         : 2014. 3. 31. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : TopPanel class를 initailize 해주는 메서드
	 */
	this.init = function(){
		initMiddleSectionName();
		initEvent();
	}
	
	/**
	 * @Date         : 2014. 4. 23. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : topPanel Class의 ui Event를 설정해주는 메서드
	 */
	function initEvent(){
		//14.09.16 박순형 상단 버튼 이벤트 수정
		$(".b_07 a").unbind("click");
		$(".b_07 a").click(function(){
			var topPanel = main.getTopPanel();
			
			// khLee 추가 (좌측 항목구분 선택 체크박스로 Index 셋팅) 20150506
			topPanel.SetAutoListIndex();
			
			//재생
			if(topPanel.autoData == null){
				alert("해당 지점은 재생 기능을 제공하지 않습니다.");
			}else{
				topPanel.playAutoPlay.apply(topPanel, []);
				topPanel.isAuto = true;
				isPause = false;
				$(".b_07 a").hide();  
				$(".b_08 a").show();
			}
		});
		
		
		
		$(".b_08 a").click(function(){
			//멈춤
			var topPanel = main.getTopPanel();
			topPanel.pauseMove.apply(topPanel, []);
			
			$(".b_07 a").show();
			$(".b_08 a").hide();
			_selectAutoPlay = null;
		});
		
		$(".b_09 a").click(function(){
			//정지
			var topPanel = main.getTopPanel();
			topPanel.stopMove.apply(topPanel, []);
		});
		main.getTopPanel().changeTime();
		setInterval("main.getTopPanel().changeTime()", 1000)
	}
	
	this.changeTime = function(){
		var now = new Date();
		var year = now.getFullYear();
		var month = now.getMonth() + 1;
		var day = now.getDate();
		
		var hour = now.getHours();
		var minutes = now.getMinutes();
		var sec = now.getSeconds();
		
		$(".date_txt").html(year + "년 " + addZeros(month,2) +"월 " + addZeros(day,2) + "일 " + addZeros(hour,2) + ":" + addZeros(minutes,2)+":"+addZeros(sec,2));
	}
	
	function addZeros(num, digit) { // 자릿수 맞춰주기
		  var zero = '';
		  num = num.toString();
		  if (num.length < digit) {
		    for (i = 0; i < digit - num.length; i++) {
		      zero += '0';
		    }
		  }
		  return zero + num;
	}
	
	/**
	 * @Date         : 2014. 4. 23. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : auto move 기능을 일시 정지시키는 기능을 하는 메서드
	 */
	this.pauseMove = function(){
		if(this.timeout != null){
			clearTimeout(this.timeout);
			this.timeout = null;
		}
		//alert("pauseMove");
		isPause = true;
		this.isAuto = false;
	}
	
	/**
	 * @Date         : 2014. 4. 23. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : auto move 멈추는 기능을 하는 메서드
	 */
	this.stopMove = function(){
		if(this.timeout != null){
			clearTimeout(this.timeout);
			this.timeout = null;
		}
		//alert($('ul.item_box').find('input:checked').val());
		this.autoDataIndex = 0;
		
		/* khLee 수정 20151115 */
		//this.autoListIndex = 0; // 대신 아래..
		var topPanel = main.getTopPanel();
		topPanel.SetAutoListIndex();
		/* khLee 수정 20151115 끝 */
		
		this.isPause = false;
		this.isSeached = false;
		this.isAuto = false;
	}
	
	/* khLee 추가 (재생 버튼 클릭 시 this.autoListIndex 셋팅 */
	this.SetAutoListIndex = function ()
	{
		var checkList = getAutoCheckList();
		var itemIndex = 0;
		
		$(checkList).each(function(index, element){
			//alert(checkList[ControlPanel.BOD]);
			var selectedItemVal =  eval($('ul.item_box').find('input:checked').val());
			
			if(String(checkList[index]) == String(selectedItemVal))
			{
				itemIndex = index;
			}
		});
		
		//var itemValue = checkList[itemIndex];
		this.autoListIndex = itemIndex;
		//alert(this.autoListIndex);
	}
	/* khLee 추가 (재생 버튼 클릭 시 this.autoListIndex 셋팅 끝 */
	
	/**
	 * @Date         : 2014. 4. 23. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : auto move을 수행하는 메서드
	 */
	this.playAutoPlay = function(){
		


		if(this.isPause == true || this.isSeached){

			var data = this.autoData[this.autoDataIndex];
			var x = data.x;
			var y = data.y;
			var map = main.getTwoDMap().getMap();
			var lonlat = new OpenLayers.LonLat(x, y); 

			this.selectJung(null,null,data.MMP_CD,data.PT_DIV_CD);
			
			if(vworld.is3D()){
				lonlat.transform(new OpenLayers.Projection("EPSG:900913"), new OpenLayers.Projection("EPSG:4326"));
//				SOPPlugin.getViewCamera().moveLonLatAlt(lonlat.lon, lonlat.lat, 500);
				SOPPlugin.getViewCamera().moveLonLatAltOval(lonlat.lon, lonlat.lat, (Map.CHART_ALTITUDE.max - 1000), 10);
			}else{
				
				if(_selectAutoPlay!=null){
					var selectAutoDataIndex = "";
					for(var i = 0; i<this.autoData.length; i++){
						if(_selectAutoPlay==this.autoData[i].MMP_CD){
							selectAutoDataIndex=this.autoData[i].AT_ORD;
						}
					}
					this.autoDataIndex = selectAutoDataIndex;
					_selectAutoPlay = null;
				}else{
					this.autoDataIndex++;
					map.setCenter(lonlat, Map.CHART_ZOOM_LEVEL.min);
				}
				
				
				
			}
			
			

			//수질측정망을 제외한 지점에 팔당댐 포인트를 추가하지 않기 위해서 
			//쿼리상에서 팔담댕을 union하는 구문이 있기 때문에 팔당댐을 한번 거른다
			if(this.autoData.length != this.autoDataIndex && this.autoData[this.autoDataIndex].mmpNm == "팔당댐"){
				this.autoDataIndex++;
			}

			if(this.autoData.length == this.autoDataIndex){
				this.autoDataIndex = 0;
				this.autoListIndex++;

				if(this.autoListIndex == getAutoCheckList().length){
					this.autoListIndex = 0;
				}
				this.isSeached = false;
				//console.info("1");
				this.timeout = setTimeout("main.getTopPanel().playAutoPlay()",8000);
				//this.timeout = setTimeout("main.getTopPanel().playAutoPlay()",100); // khLee test
			}else{
				var intervalTime;
				if(vworld.is3D()){
					intervalTime = 6000;
					main.getThreeDMap().camMoveEntEventHandler();
				}else{
					//14.07.15 박순형 시간 조정 2000->8000
					intervalTime = 8000;
					//intervalTime = 100; // khLee test
				}
				//console.info(intervalTime);
				//console.info(lonlat);

				this.timeout = setTimeout("main.getTopPanel().playAutoPlay.apply(main.getTopPanel(), [])", intervalTime);
				//this.timeout = setTimeout("console.info('zz')", intervalTime);
			}
		}else{
			if(_selectAutoPlay==null){
				var checkList = getAutoCheckList();
				var itemValue = checkList[this.autoListIndex];

				$('input[value="' + itemValue + '"]').trigger( "click" );
				$('#treeview1 input').each(function(index, element){
					if(eval($(element).val()) == itemValue){
						$(element).trigger('click');

						return false;
					}

				});

				$("#settingButton").trigger("click");
				this.isSeached = true;
				main.getTopPanel().playAutoPlay.apply(main.getTopPanel(), []);
				$(".b_07 a").hide();  
				$(".b_08 a").show();
			}else{
				this.isSeached = true;
				main.getTopPanel().playAutoPlay.apply(main.getTopPanel(), []);
				$(".b_07 a").hide();  
				$(".b_08 a").show();
			}
		}
		
	}
	
	this.selectJung = function(coordX,coordY,code,measure){
		
		
		if(coordX!=null){
			
			map.setCenter(new OpenLayers.LonLat(coordX,coordY),15);
			_selectAutoPlay = code;
			
			if($(".b_08 a").css("display")!="none"){
				$(".b_08 a").trigger("click");
			}

		}
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=43&mmpcd="+code+"&measure="+measure,
			dataType : "json"
		}).done(function(data){
			var html = "";
			var result = data.d[0];
			
			if(result!=null){
				var arrayList = new Array(result.length);
				for (var i = 0; i < result.length; i++) {

					if(result[i].COL_DD_DT !=""){
						arrayList[i] = result[i].COL_DD_DT;
					}else{
						arrayList[i] = "-";	
					}
				}
				if(measure=="008" ){

					html += "<table style='width: 400px; height: 50px; margin-top: 12px;'>" +
					"<tr>" +
					"<td>BOD</td>" +
					"<td>Chl-a</td>" +
					"<td>TP</td>" +
					"<td>수온</td>" +
					"<td>COD</td>" +
					"<td>pH</td>" +
					"<td>DO</td>" +
					"<td>총조류</td>" +
					"<td>남조류</td>" +
					"<td>규조류</td>" +
					"<td>녹조류</td>" +
					"</tr>" +
					"<tr>";
					
					for(var a = 0; a < 11; a++){
						html += "<td>"+arrayList[a]+"</td>";
					}

				}else if(measure=="010"){
					html += "<table style='width: 400px; height: 50px; margin-top: 12px;'>" +
					"<tr>" +
					"<td>수위</td>" +
					"<td>공용량</td>" +
					"<td>유입량</td>" +
					"<td>방유량</td>" +
					"</tr>" +
					"<tr>";
					
					for(var a = 0; a < 4; a++){
						html += "<td>"+arrayList[a]+"</td>";
					}
				}else if(measure=="007"){
					html += "<table style='width: 400px; height: 50px; margin-top: 12px;'>" +
					"<tr>" +
					"<td>CHL_A</td>" +
					"<td>TP</td>" +
					"<td>수온</td>" +
					"<td>pH</td>" +
					"<td>DO</td>" +
					"<td>TN</td>" +
					"<td>탁도</td>" +
					"<td>TOC</td>" +
					"<td>EC</td>" +
					"</tr>" +
					"<tr>";
					
					for(var a = 0; a < 9; a++){
						html += "<td>"+arrayList[a]+"</td>";
					}
				}
				else{
					html += "<table style='width: 400px; height: 50px; margin-top: 12px;'>" +
							"<tr>" +
							"<td>BOD</td>" +
							"<td>Chl-a</td>" +
							"<td>TP</td>" +
							"<td>수온</td>" +
							"<td>COD</td>" +
							"<td>pH</td>" +
							"<td>DO</td>" +
							"<td>TN</td>" +
							"<td>유량</td>" +
							"</tr>" +
							"<tr>";
					
					for(var a = 0; a < 9; a++){
						html += "<td>"+arrayList[a]+"</td>";
					}
				}
				
				html+="</tr></table>";

				$("#detailTable").html("");
				$(html).appendTo("#detailTable");
			}else{
				html +="<div>지점정보 없음</div>";
				$("#detailTable").html("");
				$(html).appendTo("#detailTable");

			}
		});
		
		
	}
	
	/**
	 * @Date         : 2014. 4. 23. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 지점별 자동 수집 항목의 Array를 리턴해주는 메서드
	 */
	function getAutoCheckList(){
		var key = "";
		
		$('#treeview input:checked').each(function(index, element){
			if(eval($(element).val()) != ControlPanel.WATER_QAULITY_MONITORING_NETWORK){
				key = eval($(element).val());
			}
		});

		var realKey = getRealKeyName(key);
		var itemValue = main.getTopPanel().autoList[realKey];

		return itemValue;
	}
	
	/**
	 * @Date         : 2014. 3. 28. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 중권역 이름으로 이동을 하기 위한 기능을 수행하기 위해 feature 데이터를 받아오는 메서드
	 */
	function initMiddleSectionName(){
		
		var queryNumber = 30;
		var condition = "all";
		
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=" + queryNumber + "&condition=" + condition + "&requestType=" + 2,
			dataType : "json"
		}).done(function(data){
			var result = data.d[0];
			var html = "<li><a href=\"#\">중권역</a></li>";
			for(var a = 0; a < result.length; a++){
				html += "<li><a href=\"javascript:main.getMapManager().moveToMw(" + result[a]["mw_code"] + ")\">" + result[a]["mw_name"] + "</a></li>";
			}

			$("#selectOptions").html("");
			$(html).appendTo("#selectOptions");
		});
	}
	
	/**
	 * @Date         : 2014. 3. 28. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 검색 버튼 click Event Handler
	 */
	this.settingButtonClickEventListener = function(event){
		//14.09.16 박순형 적용 버튼 클릭이벤트 수정
		
		//var value = event.getValue("spotValue");
		//var listValue = event.getValue("listValue");
		
		var str="";
		$("#treeview ul li input:checkbox:checked").each(function (index) {  
			 str = $(this).val();
		});  
		var value = eval(str);
		
		$("#treeview1 ul li input:checkbox:checked").each(function (index) {  
			 str = $(this).val();
		});  
		var listValue = eval(str);
		
		var measureName = "";
		var measureName2 = "";
		
		if(listValue == ControlPanel.BOD){
			measureName = "BOD";
			measureName2 = "(㎎/L)";
		}else if(listValue == ControlPanel.CHL_A){
			measureName = "CHL-A";
			measureName2 = "(㎎/㎥)";
		}else if(listValue == ControlPanel.TP){
			measureName = "TP";
			measureName2 = "(㎎/L)";
		}else if(listValue == ControlPanel.TEMP){
			measureName = "수온";
			measureName2 = "((℃)";
		}else if(listValue == ControlPanel.COD){
			measureName = "COD";
			measureName2 = "(㎎/L)";
		}else if(listValue == ControlPanel.PH){
			measureName = "pH";
			measureName2 = "";
		}else if(listValue == ControlPanel.DO){
			measureName = "DO";
			measureName2 = "(㎎/L)";
		}else if(listValue == ControlPanel.TN){
			measureName = "TN";
			measureName2 = "(㎎/L)";
		}else if(listValue == ControlPanel.TOTAL_TIDE){
			measureName = "총조류";
			measureName2 = "(개체수/㎖)";
		}else if(listValue == ControlPanel.YU){
			measureName = "유량";
			measureName2 = "(㎥/s)";
		}else if(listValue == ControlPanel.TAKDO){
			measureName = "탁도";
			measureName2 = "";
		}else if(listValue == ControlPanel.TOC){
			measureName = "TOC";
			measureName2 = "";
		}
		
		
		var topPanel = main.getTopPanel();
		
		if(topPanel.isAuto){
			$("#measureName").html(measureName);
			$("#measureName2").html(measureName2);
		}else{
			$("#measureName").html(measureName);
			$("#measureName2").html(measureName2);
			//14.07.22 박순형 모든지점 자동기능 추가
			if(value == ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION ||
					value == ControlPanel.WQMN_GENERAL_SPOT ||
					value == ControlPanel.WQMN_TOTAL_SPOT ||
					value == ControlPanel.WQMN_MAIN_SPOT ||
					value == ControlPanel.WQMN_BO_SPOT ||
					value == ControlPanel.WQMN_FORECAST_SPOT ||
					value == ControlPanel.DAM_BO ||
					value == ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK ||
					value == ControlPanel.TIDE_MEASUREMENT_NETWORK ||
					value == ControlPanel.IP_USN){
				
				
				topPanel.stopMove.apply(topPanel, []);
				//console.info("1:"+main.getTopPanel().autoData);
				$.ajax({
					url : "../jsps/queryData/getQueryData.jsp?queryNum=52&spotValue=" + value + "&requestType=2",
					dataType : "json"
				}).done(function(data){
					//alert(data.d[0]);					
					main.getTopPanel().autoData = data.d[0];
					//console.info("2:"+main.getTopPanel().autoData);
				});
			}else{
				main.getTopPanel().autoData = null;
			}
		}
	}
	/**
	 * @Date         : 2014. 3. 28. 
	 * @작성자      : leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : ControlPanel에 심볼릭 변수로 잡혀있는 값을 이용하여 실제 키를 리턴헤주는 메서드
	 */
	function getRealKeyName(key){
		var realKey = "";
		//14.07.22 박순형 모든지점 자동기능 추가
		if(ControlPanel.WQMN_GENERAL_SPOT == key){
			realKey = "일반지점";
		}else if(ControlPanel.WQMN_TOTAL_SPOT == key){
			realKey = "총량지점";
		}else if(ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION == key){
			realKey = "중권역대표지점";
		}else if(ControlPanel.WQMN_MAIN_SPOT == key){
			realKey = "주요지점";
		}else if(ControlPanel.WQMN_BO_SPOT == key){
			realKey = "보지점";
		}else if(ControlPanel.WQMN_FORECAST_SPOT == key){
			realKey = "예보지점";
		}else if(ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK == key){
			realKey = "자동측정망";
		}else if(ControlPanel.TIDE_MEASUREMENT_NETWORK == key){
			realKey = "조류측정망";
		}else if(ControlPanel.IP_USN == key){
			realKey = "ipUsn";
		}else if(ControlPanel.DAM_BO == key){
			realKey = "댐보";
		}
		
		return realKey;
	}	
	
}