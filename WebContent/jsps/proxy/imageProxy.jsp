<%@page import="Data.JsonClass"%>
<%@page import="util.ConvertImage"%>
<%@page session="false"%>
<%@page import="java.net.*,java.io.*"%>
<%@page import="Data.*"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	String todayDataString = request.getParameter("today");
	String prevMonthString = request.getParameter("prevMonth");
	String prevYearString = request.getParameter("prevYear");
	
	String pointName = URLDecoder.decode(request.getParameter("pointName"), "UTF-8");
	String x = request.getParameter("x");
	String y = request.getParameter("y");

	String chartType = "cht=bhs";
	float todayData = (Math.round(Float.parseFloat(todayDataString) * 100) / 100);
	float prevMonth = (Math.round(Float.parseFloat(prevMonthString) * 100) / 100);
	float prevYear = (Math.round(Float.parseFloat(prevYearString) * 100) / 100);
	
	String values = todayData + "," + prevMonth + "," + prevYear;
	String range = "&chds=a";
	String chartColor = "&chco=FFC6A5|FFFF42|DEF3BD";
	String background = "&chf=bg,s,65432100";
	String chartAxis = "&chxt=x,y&chxl=1:|" + URLEncoder.encode("현재", "UTF-8") + "|" + URLEncoder.encode("전월", "UTF-8") + "|" + URLEncoder.encode("전년", "UTF-8") + "";
	String chmNames = "&chm=N,000000,0,-1,12";
	String chxsNames = "&chxs=0N,000000"+"|"+"1N,000000";
	String chbhNames = "&amp;chbh=r,0.5";
	
	String charturl = "http://chart.apis.google.com/chart?" + chartType + "&chd=t:" + values + "&chs=170x100" + chartColor + chartAxis + range + background + chmNames + chxsNames + chbhNames;
	
	System.out.println(charturl);

	HttpURLConnection con = null;
	URL url = new URL(charturl);
	con = (HttpURLConnection)url.openConnection();
	con.setDoOutput(true);
	con.setRequestMethod("GET");
	String reqContenType = request.getContentType();
	if(reqContenType != null) {
		con.setRequestProperty("Content-Type", "text/html; charset=UTF-8");
	}
	else {
		con.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
	}
	 
	ConvertImage convertImage = new ConvertImage();
	String imageUrl = convertImage.getImageStreamAndUrl(con);
	imageUrl = convertImage.svgExportImage(imageUrl, pointName,"");
	
	String jsonResult = "{ \"fileName\" : \"" + imageUrl + "\",  \"pointName\" : \"" + pointName + "\",  \"x\" : \"" + x + "\",  \"y\" : \"" + y + "\"}";
	JsonClass jsonClass = JsonClass.getJsonClass();
	String jsonString = jsonClass.makeJsonData(jsonResult);
	
	PrintWriter printWriter = response.getWriter();
	response.setContentType("text/json"); 
	response.setHeader("Cache-Control", "no-cache"); 
	printWriter.println(jsonString); 
	printWriter.close();
%>
</body>
</html>