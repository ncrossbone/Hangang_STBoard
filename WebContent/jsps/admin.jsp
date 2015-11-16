<%@page import="Data.*"%>
<%@ page import="java.sql.*" %>
<%@page import="java.io.PrintWriter"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>한강 수계 통합 유역관리 시스템 - DB Import Page</title>
<script type="text/javascript">
</script>
</head>
<body>
<%
try{
	 String url = "jdbc:postgresql://cetech.iptime.org:2022/woo";
	 String usr = "postgres";
	 String pwd = "postgres";

	 Class.forName("org.postgresql.Driver");
	 Connection conn = DriverManager.getConnection(url, usr, pwd);
	 Statement stmt = conn.createStatement();
	 ResultSet rs = stmt.executeQuery(" SELECT \"cd\", \"nm\", \"val\" FROM \"test\" ");
	 //System.out.println(rs);
	 while(rs.next())
	 {
		  out.println("<br>");
		  out.println(rs.getString("cd"));
		  out.println(rs.getString("nm"));
		  out.println(rs.getString("val"));
	 }

	 rs.close();
	 stmt.close();
	 conn.close();
	} catch (Exception e) {
	 out.println(e);
	}

%>
<table>
	<tr>
		<td><input type="text" id="t1" style="width:550px; height:200px;"></td>
		<td><input type="button" id="b1" value="click" onclick="javascript:goInsert();"></td>
	</tr>
</table>
</body>
</html>