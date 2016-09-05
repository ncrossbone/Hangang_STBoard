/**
 * @FileName  : FooterPanel.js
 * @Project     : hangang
 * @Date         : 2014. 3. 27. 
 * @작성자      : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 : 푸터 페널 객체
 */
function FooterPanel(){
	
	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : FooterPanel class의 initailize 메서드
	 */
	this.init = function(){
		setRollingText();
	}
	
	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 하단에 스크롤 되는 text를 설정해주는 메서드
	 */
	function setRollingText(){
		var width2 = $(document).width();
		var copyrightWidth = $("div.copyright").width();
		$("#rollingText").css("left", (width2 - copyrightWidth) + "px");
		//$("#rollingText").css("left", "120px");
	}
	
	this.spotChangeEventListener = function(event){
		playTextAnimation();
	}
	
	this.listChangeEventListener = function(event){
		
	}
	
	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : 중권역 이름으로 이동을 하기 위한 기능을 수행하기 위해 feature 데이터를 받아오는 메서드
	 */
	this.settingButtonClickEventListener = function(event){
//		rollingText
		var value = event.getValue("spotValue");
		var listValue = event.getValue("listValue");
		
		var measureName = "";
		var measureName2 = "";
		var queryNum = "0";
		
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
		}
		
		if(ControlPanel.WATER_QAULITY_MONITORING_NETWORK == value){
			queryNum = "18";
		}else if(ControlPanel.WQMN_GENERAL_SPOT == value){
			queryNum = "18";
		}else if(ControlPanel.WQMN_TOTAL_SPOT == value){
			queryNum = "18";
		}else if(ControlPanel.WQMN_REPRESECTATION_MIDDLE_SECTION == value){
			queryNum = "18";
		}else if(ControlPanel.WQMN_MAIN_SPOT == value){
			queryNum = "18";
		}else if(ControlPanel.WQMN_BO_SPOT == value){
			queryNum = "18";
		}else if(ControlPanel.WQMN_FORECAST_SPOT == value){
			queryNum = "18";
		}else if(ControlPanel.AUTOMATIC_MEASUREMENT_NETWORK == value){
			queryNum = "19";
		}else if(ControlPanel.TIDE_MEASUREMENT_NETWORK == value){
			queryNum = "20";
		}else if(ControlPanel.IP_USN == value){
			queryNum = "21";
		}else if(ControlPanel.DAM_BO == value){
			queryNum = "22";
		}
		
		$("#item").html(measureName);
		$("#item2").html(measureName2);
	
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?queryNum=44&measure=" + value,
			dataType : "json"
		}).done(function(data){
			var result = data.d[0];
			if(result[0].min!=result[0].max){
			$("#item3").html(result[0].min+"~"+result[0].max);
			}else{
			$("#item3").html(result[0].min);	
			}
		});
		
		$.ajax({
			url : "../jsps/queryData/getQueryData.jsp?requestType=2&queryNum=42&measure=" + listValue + "&spotGubun=" + value,
			dataType : "json"
		}).done(function(data){
			var result = data.d[0];
			
			var data = "";
			for(var a = 0; a < result.length; a++){
				//14.07.15 박순형 텍스트 롤러
				data +="<li>"+ result[a]["MMP_NM"] + "(" + result[a]["COL_DD_DT"] + ") </li>"
				//data +=result[a]["MMP_NM"] + "(" + result[a]["COL_DD_DT"] + ") "
			}
			//alert(data);
			$("#scroller").html(data);
			
			main.getFooterPanel().playTextAnimation();
		});
		
		
		
		
	}
	
	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : animation을 구동시키는 메서드
	 */
	this.playTextAnimation = function(){
//		var width = $("#rollingText").html().width();
//		$("#rollingText").css("width", width);
		
//		$("#rollingText").animate({
//			left : "-" + width + "px"
//		}, (width / 30) * 1000, function() {
//			$("#rollingText").css("left", $(document).width() + "px");
//			main.getFooterPanel().playTextAnimation();
//		});
		//14.07.15 박순형 텍스트 롤러
		(function($) {
			$(function() {
				$("#scroller").simplyScroll({autoMode: 'loop'});
			});
		})(jQuery);
	}
	
	/**
	 * @Project     : hangang
	 * @Date         : 2014. 4. 01. 
	 * @작성자      : Leeyunsoo
	 * @변경이력 :
	 * @프로그램 설명 : animation을 멈주는 메서드
	 */
	function stopTextAnimation(){
		$("#rollingText").stop();
	}
}