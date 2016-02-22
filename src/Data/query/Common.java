/**
 * 
 */
package Data.query;

import java.util.ArrayList;

/**
 * @FileName  : Common.java
 * @Project     : Suhyup_New
 * @Date         : 2012. 7. 23. 
 * @�ۼ���      : leeyunsoo
 * @�����̷� :
 * @���α׷� ���� :
 */
public class Common {
	//String websiteUrl = "http://water.nier.go.kr";
	String websiteUrl = "http://localhost:8088";
	
	public String getWebsiteUrl() {
		return websiteUrl;
	}

	public void setWebsiteUrl(String websiteUrl) {
		this.websiteUrl = websiteUrl;
	}

	private String makeWhereString1(ArrayList<String> options){
		return "";
	}
	
	public String getMarkerImageAndChartColor(float value, String position, boolean isChart){
		String result = "";
		String imageUrl = "";
		String chartColor = "";
		// 박순형 항목구분에 따른 아이콘 변경
		if("HM0001".equals(position)){ //BOD
			if(value <= 1){
				imageUrl = "state_01.png";
				chartColor = "08AAE3";
			}else if(value <= 2){
				imageUrl = "state_02.png";
				chartColor = "2ACBD8";
			}else if(value <= 3){
				imageUrl = "state_03.png";
				chartColor = "72BA41";
			}else if(value <= 5){
				imageUrl = "state_04.png";
				chartColor = "ACB9C5";
			}else if(value <= 8){
				imageUrl = "state_05.png";
				chartColor = "EED300";
			}else if(value <= 10){
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}else if(value > 10){
				imageUrl = "state_07.png";
				chartColor = "FF1F3C";
			}
		}
//		else if("HM0002".equals(position)){ // CHL_A
//			if(value <= 5){
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//			}else if(value <= 9){
//				imageUrl = "state_02.png";
//				chartColor = "2ACBD8";
//			}else if(value <= 14){
//				imageUrl = "state_03.png";
//				chartColor = "72BA41";
//			}else if(value <= 20){
//				imageUrl = "state_04.png";
//				chartColor = "ACB9C5";
//			}else if(value <= 35){
//				imageUrl = "state_05.png";
//				chartColor = "EED300";
//			}else if(value <= 70){
//				imageUrl = "state_06.png";
//				chartColor = "FFC600";
//			}else if(value > 70){
//				imageUrl = "state_07.png";
//				chartColor = "FF1F3C";
//			}
//		}
//		else if("HM0004".equals(position)){//TEMP
//			if(value <= 5){
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//			}else if(value <= 9){
//				imageUrl = "state_02.png";
//				chartColor = "2ACBD8";
//			}else if(value <= 14){
//				imageUrl = "state_03.png";
//				chartColor = "72BA41";
//			}else if(value <= 20){
//				imageUrl = "state_04.png";
//				chartColor = "ACB9C5";
//			}else if(value <= 35){
//				imageUrl = "state_05.png";
//				chartColor = "EED300";
//			}else if(value <= 70){
//				imageUrl = "state_06.png";
//				chartColor = "FFC600";
//			}else if(value > 70){
//				imageUrl = "state_07.png";
//				chartColor = "FF1F3C";
//			}
//		}
		else if("HM0005".equals(position)){ //COD
			if(value <= 2){
				imageUrl = "state_01.png";
				chartColor = "08AAE3";
			}else if(value <= 4){
				imageUrl = "state_02.png";
				chartColor = "2ACBD8";
			}else if(value <= 5){
				imageUrl = "state_03.png";
				chartColor = "72BA41";
			}else if(value <= 7){
				imageUrl = "state_04.png";
				chartColor = "ACB9C5";
			}else if(value <= 9){
				imageUrl = "state_05.png";
				chartColor = "EED300";
			}else if(value <= 11){
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}else if(value > 11){
				imageUrl = "state_07.png";
				chartColor = "FF1F3C";
			}
		}
		else if("HM0007".equals(position)){ //DO
			if(value >= 7.5){
				imageUrl = "state_02.png";
				chartColor = "2ACBD8";
			}else if(value >= 5.0){
				imageUrl = "state_04.png";
				chartColor = "ACB9C5";
			}else if(value >= 2.0){
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}else if(value < 2.0){
				imageUrl = "state_07.png";
				chartColor = "FF1F3C";
			}
		}
		else if("HM0006".equals(position)){ //PH
			if(value >= 6.5 && value <= 8.5){
				imageUrl = "state_05.png";
				chartColor = "EED300";
			}else{
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}
		}
		
//		else if("HM0009".equals(position)){ //TOTAL_TIDE
//			if(value <= 1){
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//			}else if(value <= 2){
//				imageUrl = "state_02.png";
//				chartColor = "2ACBD8";
//			}else if(value <= 3){
//				imageUrl = "state_03.png";
//				chartColor = "72BA41";
//			}else if(value <= 5){
//				imageUrl = "state_04.png";
//				chartColor = "ACB9C5";
//			}else if(value <= 8){
//				imageUrl = "state_05.png";
//				chartColor = "EED300";
//			}else if(value <= 10){
//				imageUrl = "state_06.png";
//				chartColor = "FFC600";
//			}else if(value > 10){
//				imageUrl = "state_07.png";
//				chartColor = "FF1F3C";
//			}
//		}
//		else if("HM0010".equals(position)){ //YU
//			if(value <= 1){
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//			}else if(value <= 2){
//				imageUrl = "state_02.png";
//				chartColor = "2ACBD8";
//			}else if(value <= 3){
//				imageUrl = "state_03.png";
//				chartColor = "72BA41";
//			}else if(value <= 5){
//				imageUrl = "state_04.png";
//				chartColor = "ACB9C5";
//			}else if(value <= 8){
//				imageUrl = "state_05.png";
//				chartColor = "EED300";
//			}else if(value <= 10){
//				imageUrl = "state_06.png";
//				chartColor = "FFC600";
//			}else if(value > 10){
//				imageUrl = "state_07.png";
//				chartColor = "FF1F3C";
//			}
//			
//		}
		else if("HM0017".equals(position)){ //TOC
			if(value <= 1){
				imageUrl = "state_01.png";
				chartColor = "08AAE3";
			}else if(value <= 2){
				imageUrl = "state_02.png";
				chartColor = "2ACBD8";
			}else if(value <= 3){
				imageUrl = "state_03.png";
				chartColor = "72BA41";
			}else if(value <= 5){
				imageUrl = "state_04.png";
				chartColor = "ACB9C5";
			}else if(value <= 8){
				imageUrl = "state_05.png";
				chartColor = "EED300";
			}else if(value <= 10){
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}else if(value > 10){
				imageUrl = "state_07.png";
				chartColor = "FF1F3C";
			}
			
		}
		else if("HM0016".equals(position)){ //TAKDO
			if(value <= 1){
				imageUrl = "state_01.png";
				chartColor = "08AAE3";
			}else if(value <= 2){
				imageUrl = "state_02.png";
				chartColor = "2ACBD8";
			}else if(value <= 3){
				imageUrl = "state_03.png";
				chartColor = "72BA41";
			}else if(value <= 5){
				imageUrl = "state_04.png";
				chartColor = "ACB9C5";
			}else if(value <= 8){
				imageUrl = "state_05.png";
				chartColor = "EED300";
			}else if(value <= 10){
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}else if(value > 10){
				imageUrl = "state_07.png";
				chartColor = "FF1F3C";
			}
			
		}
//		else if("HM0022".equals(position)){
//			if(value <= 1){
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//			}else if(value <= 2){
//				imageUrl = "state_02.png";
//				chartColor = "2ACBD8";
//			}else if(value <= 3){
//				imageUrl = "state_03.png";
//				chartColor = "72BA41";
//			}else if(value <= 5){
//				imageUrl = "state_04.png";
//				chartColor = "ACB9C5";
//			}else if(value <= 8){
//				imageUrl = "state_05.png";
//				chartColor = "EED300";
//			}else if(value <= 10){
//				imageUrl = "state_06.png";
//				chartColor = "FFC600";
//			}else if(value > 10){
//				imageUrl = "state_07.png";
//				chartColor = "FF1F3C";
//			}
//			
//		}
//		else if("HM9901".equals(position)){
//			if(value <= 1){
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//			}else if(value <= 2){
//				imageUrl = "state_02.png";
//				chartColor = "2ACBD8";
//			}else if(value <= 3){
//				imageUrl = "state_03.png";
//				chartColor = "72BA41";
//			}else if(value <= 5){
//				imageUrl = "state_04.png";
//				chartColor = "ACB9C5";
//			}else if(value <= 8){
//				imageUrl = "state_05.png";
//				chartColor = "EED300";
//			}else if(value <= 10){
//				imageUrl = "state_06.png";
//				chartColor = "FFC600";
//			}else if(value > 10){
//				imageUrl = "state_07.png";
//				chartColor = "FF1F3C";
//			}
//			
//		}
		else if("HM0003".equals(position)){ //TP
			if(value <= 0.02){
				imageUrl = "state_01.png";
				chartColor = "08AAE3";
			}else if(value <= 0.04){
				imageUrl = "state_02.png";
				chartColor = "2ACBD8";
			}else if(value <= 0.1){
				imageUrl = "state_03.png";
				chartColor = "72BA41";
			}else if(value <= 0.2){
				imageUrl = "state_04.png";
				chartColor = "ACB9C5";
			}else if(value <= 1.3){
				imageUrl = "state_05.png";
				chartColor = "EED300";
			}else if(value <= 1.5){
				imageUrl = "state_06.png";
				chartColor = "FFC600";
			}else if(value > 1.5){
				imageUrl = "state_07.png";
				chartColor = "FF1F3C";
			}
		} 
//		else if("HM0028".equals(position)){ //임시
//				imageUrl = "state_01.png";
//				chartColor = "08AAE3";
//		} else if("HM0034".equals(position)){ //임시
//			imageUrl = "state_01.png";
//			chartColor = "08AAE3";
//		} else if("HM0035".equals(position)){ //임시
//			imageUrl = "state_01.png";
//			chartColor = "08AAE3";
//		} else if("HM0031".equals(position)){ //임시
//			imageUrl = "state_01.png";
//			chartColor = "08AAE3";
//		} else if("HM0032".equals(position)){ //임시
//			imageUrl = "state_01.png";
//			chartColor = "08AAE3";
//		}
		else{
			imageUrl = "state_00.png";
			chartColor = "ACB9C5";
		}
		
		if(isChart){
			result = chartColor;
		}else{
			result = imageUrl;
		}
		
		return result;
	}
}
