/**
 * 
 */

function Common(){
	this.websiteUrl = "http://water.nier.go.kr";
	//this.websiteUrl = "localhost:8089";
	//this.websiteUrl = "localhost:8081";
	//this.websiteUrl = "localhost:8080";
	//Dal test
	//this.mapServerUrl = "http://118.37.180.151:20008";
	this.mapServerUrl = "http://water.nier.go.kr";
	//this.mapServerUrl = "http://112.217.167.123:39516";
	//this.mapServerUrl = "http://112.218.1.243:38080";
	
	
	this.getMarkerImage = function(value){
		
		var position = eval($(".item_box").find("input:checked").val());
		var imageUrl = "";
		// 박순형 구분등급표 에 따라 아이콘 적용
		if(position == ControlPanel.BOD){
			if(value <= 1){
				imageUrl = "../resources/img/status/state_01.png";
			}else if(value <= 2){
				imageUrl = "../resources/img/status/state_02.png";
			}else if(value <= 3){
				imageUrl = "../resources/img/status/state_03.png";
			}else if(value <= 5){
				imageUrl = "../resources/img/status/state_04.png";
			}else if(value <= 8){
				imageUrl = "../resources/img/status/state_05.png";
			}else if(value <= 10){
				imageUrl = "../resources/img/status/state_06.png";
			}else if(value > 10){
				imageUrl = "../resources/img/status/state_07.png";
			}
		}
//		else if(position == ControlPanel.TEMP){
//			if(value <= 5){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 9){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 14){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 20){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 35){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 70){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 70){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		}
//		else if(position == ControlPanel.CHL_A){
//			if(value <= 5){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 9){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 14){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 20){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 35){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 70){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 70){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		}
		else if(position == ControlPanel.COD){
			if(value <= 2){
				imageUrl = "../resources/img/status/state_01.png";
			}else if(value <= 4){
				imageUrl = "../resources/img/status/state_02.png";
			}else if(value <= 5){
				imageUrl = "../resources/img/status/state_03.png";
			}else if(value <= 7){
				imageUrl = "../resources/img/status/state_04.png";
			}else if(value <= 9){
				imageUrl = "../resources/img/status/state_05.png";
			}else if(value <= 11){
				imageUrl = "../resources/img/status/state_06.png";
			}else if(value > 11){
				imageUrl = "../resources/img/status/state_07.png";
			}
		}
		else if(position == ControlPanel.DO){
			if(value >= 7.5){
				imageUrl = "../resources/img/status/state_01.png";
			}else if(value >= 5.0){
				imageUrl = "../resources/img/status/state_02.png";
			}else if(value >= 2.0){
				imageUrl = "../resources/img/status/state_05.png";
			}else if(value < 2.0){
				imageUrl = "../resources/img/status/state_07.png";
			}
		}
		else if(position == ControlPanel.PH){
			if(value >= 6.5 && value <= 8.5){
				imageUrl = "../resources/img/status/state_01.png";
			}else{
				imageUrl = "../resources/img/status/state_07.png";
			}
		}
//		else if(position == ControlPanel.TN){
//			if(value <= 0.2){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 0.3){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 0.4){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 0.6){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 1.0){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 1.5){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 1.5){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		}
		else if(position == ControlPanel.TP){
			if(value <= 0.02){
				imageUrl = "../resources/img/status/state_01.png";
			}else if(value <= 0.04){
				imageUrl = "../resources/img/status/state_02.png";
			}else if(value <= 0.1){
				imageUrl = "../resources/img/status/state_03.png";
			}else if(value <= 0.2){
				imageUrl = "../resources/img/status/state_04.png";
			}else if(value <= 0.3){
				imageUrl = "../resources/img/status/state_05.png";
			}else if(value <= 0.5){
				imageUrl = "../resources/img/status/state_06.png";
			}else if(value > 0.5){
				imageUrl = "../resources/img/status/state_07.png";
			}
		} 
//		else if(position == ControlPanel.RS){ // 임시 
//			if(value <= 0.02){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 0.04){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 0.1){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 0.2){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 1.3){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 1.5){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 1.5){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.RA){ // 임시 
//			if(value <= 0.02){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 0.04){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 0.1){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 0.2){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 1.3){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 1.5){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 1.5){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.GO){ // 임시 
//			if(value <= 0.02){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 0.04){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 0.1){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 0.2){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 1.3){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 1.5){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 1.5){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.VI){ // 임시 
//			if(value <= 0.02){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 0.04){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 0.1){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 0.2){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 1.3){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 1.5){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 1.5){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.TB){ // 임시 
//			if(value <= 0.02){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 0.04){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 0.1){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 0.2){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 1.3){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 1.5){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 1.5){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.TOTAL_TIDE){
//			if(value <= 1){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 2){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 3){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 5){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 8){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 10){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 10){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.YU){
//			if(value <= 1){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 2){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 3){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 5){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 8){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 10){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 10){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.EC){
//			if(value <= 1){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 2){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 3){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 5){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 8){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 10){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 10){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
		else if(position == ControlPanel.TAKDO){
			if(value <= 25){
				imageUrl = "../resources/img/status/state_01.png";
			}else if(value <= 100){
				imageUrl = "../resources/img/status/state_05.png";
			}else if(value > 100){
				imageUrl = "../resources/img/status/state_07.png";
			}
		} 
		else if(position == ControlPanel.TOC){
			if(value <= 2){
				imageUrl = "../resources/img/status/state_01.png";
			}else if(value <= 3){
				imageUrl = "../resources/img/status/state_02.png";
			}else if(value <= 4){
				imageUrl = "../resources/img/status/state_03.png";
			}else if(value <= 5){
				imageUrl = "../resources/img/status/state_04.png";
			}else if(value <= 6){
				imageUrl = "../resources/img/status/state_05.png";
			}else if(value <= 8){
				imageUrl = "../resources/img/status/state_06.png";
			}else if(value > 8){
				imageUrl = "../resources/img/status/state_07.png";
			}
		} 
//		else if(position == ControlPanel.VOCS){
//			if(value <= 1){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value <= 2){
//				imageUrl = "../resources/img/status/state_02.png";
//			}else if(value <= 3){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value <= 5){
//				imageUrl = "../resources/img/status/state_04.png";
//			}else if(value <= 8){
//				imageUrl = "../resources/img/status/state_05.png";
//			}else if(value <= 10){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 10){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.CYA){
//			if(value < 15){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value > 100){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value > 25){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 15){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//			
//		} 
//		else if(position == ControlPanel.DIA){
//			if(value < 15){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value > 100){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value > 25){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 15){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		} 
//		else if(position == ControlPanel.CHL){
//		
//			if(value < 15){
//				imageUrl = "../resources/img/status/state_01.png";
//			}else if(value > 100){
//				imageUrl = "../resources/img/status/state_03.png";
//			}else if(value > 25){
//				imageUrl = "../resources/img/status/state_06.png";
//			}else if(value > 15){
//				imageUrl = "../resources/img/status/state_07.png";
//			}
//		}
		else {
			imageUrl = "../resources/img/status/state_00.png"; 
		}
		
		
		
		
		return imageUrl;
	}
}

String.prototype.width = function(font, size) {
  var f = font || '16px arial',
  	
      o = $('<div>' + this + '</div>')
            .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
            .appendTo($('body')),
      w = o.width();
  o.remove();

  return w;
}

Array.prototype.remove = function(idx){
   var temp = new Array();
   var i = this.length;

   while(i > idx){
       var kk = this.pop();
       temp.push(kk);

       i--;
   }

   for(var i=temp.length - 2; i>=0; i--){
       this.push(temp[i]);
   }
}

function bind(scope, method, params){
}

if (!Object.create) {
    Object.create = (function(){
        function F(){}

        return function(o, descriptor){
            F.prototype = o;
            if(descriptor.constructor != undefined){
            	F.constructor = descriptor.constructor.value;
            }
            
            return new F();
        };
    })();
  }