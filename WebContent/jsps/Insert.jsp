<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Data Insert Page</title>
<link href="../resources/css/jquery-ui-1.10.4.custom.css"
	rel="stylesheet" type="text/css">
<link href="../resources/css/han_river2.css" rel="stylesheet"
	type="text/css">
<script type="text/javascript"
	src="http://code.jquery.com/jquery-1.11.0.js"></script>
<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script type="text/javascript">
var errorCode;
function goInsert(){
		var ssVal = $("#ss").val();
		var queryNum = "";
		if (ssVal == 1) {
			queryNum = 71; // 년
		} else if (ssVal == 2) {
			queryNum = 72; // 월
		} else if (ssVal == 3) {
			queryNum = 73; // 일
		} 
		
		var goo = new Array();
		
		var z1 = $("#tt1").val();
		var z2 = $("#tt2").val();
		var z3 = $("#tt3").val();
		var z4 = $("#tt4").val();
		var z5 = $("#tt5").val();
		
		var w1 = z1.split("\n");
		var w2 = z2.split("\n");
		var w3 = z3.split("\n");
		var w4 = z4.split("\n");
		var w5 = z5.split("\n");
		
		goo.push(w1,w2,w3,w4,w5);
		
		for(a in goo){
			var t = goo[a].length;
			for(b = 0; b < t; b++){
				var s1 = goo[0][b];
				var s2 = goo[1][b];
				var s3 = goo[2][b];
				var s4 = goo[3][b];
				var s5 = goo[4][b];
			
 		$.ajax({
			url : "../jsps/queryData/getQueryData2.jsp?queryNum="+ queryNum +"&requestType=2&tt1=" + s1 + "&tt2=" + s2 + "&tt3=" + s3 + "&tt4=" + s4 + "&tt5=" + s5,
			type : "json",
			error : function(request, status, error) { 
				    errorCode = "code : " + request.status + "\r\nmessage : " + request.reponseText;
				    $("#errorText").html(errorCode);
			  } 
		}).done(function(data){
			
		}); 	
	   }
		goo = [];
		alert(t+'행이 입력됨');
		break;
	  }
	}
</script>
<body>
	<div>
		<select id="ss">
			<option value="1">년 Data</option>
			<option value="2">월 Data</option>
			<option value="3">일 Data</option>
		</select> <input type="button" id="b1" value="click"
			onclick="javascript:goInsert();">
	</div>
	<br>
	<div>
		<TEXTAREA id="tt1" style="width: 330px; height: 600px;"></TEXTAREA>
		<TEXTAREA id="tt2" style="width: 330px; height: 600px;"></TEXTAREA>
		<TEXTAREA id="tt3" style="width: 330px; height: 600px;"></TEXTAREA>
		<TEXTAREA id="tt4" style="width: 330px; height: 600px;"></TEXTAREA>
		<TEXTAREA id="tt5" style="width: 330px; height: 600px;"></TEXTAREA>
		<table>
			<tr>
				<td id="ttt1">MMP_CD</td>
				<td id="ttt2">MSM_LT_CD</td>
				<td id="ttt3">DATE</td>
				<td id="ttt4">PT_DIV_CD</td>
				<td id="ttt5">DATA</td>
			</tr>
		</table>
	</div>
	<br>
	<br>
	<div>
		<input type="text" id="errorText" style="width: 100%; height: 100px;">
		<ul>
			<li style="width: 100%; text-align: center;"><font>에러코드</font></li>
		</ul>
	</div>
</body>
</html>