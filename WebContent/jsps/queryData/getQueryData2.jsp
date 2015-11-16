
<%@page import="org.apache.tomcat.util.http.ContentType"%>
<%@page import="java.util.Hashtable"%>
<%@page import="Data.query.QueryManager"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="javax.sql.RowSet"%>
<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@page import="java.sql.ResultSetMetaData"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="java.sql.Connection"%>
<%@page import="org.apache.jasper.tagplugins.jstl.core.Import"%>
<%@page import="Data.*"%>
<%@page import="Data.query.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
		String queryNumString = request.getParameter("queryNum");
		int queryNum = Integer.parseInt(queryNumString);

		QueryManager queryManager = new QueryManager();
		String queryString = queryManager.getQueryString(queryNum, request);

		Controller controller = new Controller();
		IQueryWork dataQuery = new CommonQuery2();

		ResultSet resultSet = controller.getData(queryString, dataQuery);
		String jsonResult = dataQuery.makeJson(resultSet);

		PrintWriter printWriter = response.getWriter();
		response.setContentType("text/json");
		response.setHeader("Cache-Control", "no-cache");
		printWriter.println(jsonResult);
		printWriter.close();
	%>
</body>
</html>