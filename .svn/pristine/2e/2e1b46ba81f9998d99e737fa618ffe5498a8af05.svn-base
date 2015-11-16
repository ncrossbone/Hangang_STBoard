/**
 * @FileName : AlarmData.js
 * @Project : hangang
 * @Date : 2014. 4. 22.
 * @작성자 : leeyunsoo
 * @변경이력 :
 * @프로그램 설명 :
 */

function AlarmData(){
	var mmpCd = '0';
	var mwCd = '0';
	var mmpNm = '0';
	var colDdDt = '0';
	var msmLtCd = '0';
	var ovrStrdVal='0';
	var check = '0';
	var msmLtNm = '0';
	
	this.getMmpCd = function(){
		return mmpCd;
	};
	
	this.setMmpCd = function(mmpCdData){
		mmpCd = mmpCdData;
	};
	
	this.getMwCd = function(){
		return mwCd;
	};
	
	this.setMwCd = function(mwCdData){
		mwCd = mwCdData;
	};
	
	this.getMmpNm = function(){
		return mmpNm;
	};
	
	this.setMmpNm = function(mmpNmData){
		mmpNm = mmpNmData;
	};
	
	this.getColDdDt = function(){
		return colDdDt;
	};
	
	this.setColDdDt = function(colDdDtData){
		colDdDt = colDdDtData;
	};
	
	this.getMsmLtCd = function(){
		return msmLtCd;
	};
	
	this.setMsmLtCd = function(msmLtCdData){
		msmLtCd = msmLtCdData;
	};
	
	this.getOvrStrdVal = function(){
		return ovrStrdVal;
	};
	
	this.setOvrStrdVal = function(ovrStrdValData){
		ovrStrdVal = ovrStrdValData;
	};
	
	this.getmsmLtNm = function(){
		return msmLtNm;
	};
	
	this.setMsmLtNm = function(msmLtNmData){
		msmLtNm = msmLtNmData;
	};
	
	this.getCheck = function(){
		
			/******************************* 가평 **********************************/
		if(mmpNm == '가평'){ 
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 150) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
		
			/******************************* 경안천 **********************************/
		} else if(mmpNm == '경안천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 4) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 800) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 6.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TP'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 20) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 110) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 700) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 30) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
		
			/******************************* 구리 **********************************/
		} else if(mmpNm == '구리'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TP'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
		
			/******************************* 여주 **********************************/
		} else if(mmpNm == '여주'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 원주 **********************************/
		} else if(mmpNm == '원주'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 4) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TP'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}/* else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 평창강 **********************************/
		} else if(mmpNm == '평창강'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 250) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 한탄강 **********************************/
		} else if(mmpNm == '한탄강'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 700) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TP'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 서상 **********************************/
		} else if(mmpNm == '서상'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 150) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 2.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 감천 **********************************/
		} else if(mmpNm == '강천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TP'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 20) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 100) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 700) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 30) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 신천 **********************************/
		} else if(mmpNm == '신천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 3000) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TP'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 20) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 100) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 700) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 30) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 의암호 **********************************/
		} else if(mmpNm == '의암호'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 150) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 충주 **********************************/
		} else if(mmpNm == '충주'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 4) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 인제 **********************************/
		} else if(mmpNm == '인제'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 150) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 2.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 3.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************** 미산 **********************************/
		} else if(mmpNm == '미산'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 750) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 8) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TRIC'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'BENZ'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'CARB'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TOLU'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'TCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'ETHY'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			} else if(msmLtNm == 'PCE'){
				$("#alarmImg").attr("src", "../resources/img/siren_05.png");
			}*/
			
			/******************************* 포천 **********************************/
		} else if(mmpNm == '포천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 1200) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 12) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 화천 **********************************/
		} else if(mmpNm == '화천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 150) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 2.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}/* else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 단양 **********************************/
		} else if(mmpNm == '단양'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 350) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 3) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.1) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 능서 **********************************/
		} else if(mmpNm == '농서'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 300) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 4) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 달천 **********************************/
		} else if(mmpNm == '달천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 4.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 250) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 3.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.15) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 청미천 **********************************/
		} else if(mmpNm == '청미천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 4) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 450) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 8) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 8) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.25) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}/* else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 복하천 **********************************/
		} else if(mmpNm == '복하천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 4) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 1400) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 10) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 12) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			}*/
			
			/******************************* 홍천 **********************************/
		} else if(mmpNm == '홍천'){
			if(msmLtNm == 'PH'){
				if(colDdDt < 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'DO'){
				if(colDdDt < 5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'EC'){
				if(colDdDt > 350) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOC'){
				if(colDdDt > 6.5) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TN'){
				if(colDdDt > 6) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TP'){
				if(colDdDt > 0.2) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CHL_A'){
				if(colDdDt > 70) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TAKDO'){
				if(colDdDt > 900) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} /*else if(msmLtNm == 'DICH'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TRIC'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'BENZ'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'CARB'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TOLU'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'TCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'ETHY'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} else if(msmLtNm == 'PCE'){
				if(colDdDt > 0) {
					$("#alarmImg").attr("src", "../resources/img/siren_01.png");
				} else {
					$("#alarmImg").attr("src", "../resources/img/siren_05.png");
				}
			} */
		}
		
		return check;
	};
	
	this.setCheck = function(checkData){
		check = checkData;
	};
	
}