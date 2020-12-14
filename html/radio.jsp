<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>

<body>
    <!-- 자바영역 -->
    <%
        String Sex = request.getParameter("sex");
        String Year = request.getParameter("year");
        String[] Subject = request.getParameterValues("subject");
    %>
    <h1>성별 : <%=Sex%></h1>
    <h1>학년 : <%=Year%></h1>
    <%
    for(String sub : Subject) {
    %>
        <h1>관심있는 주제 : <%=sub%></h1>
    <%
    }
    %>
</body>


</html>