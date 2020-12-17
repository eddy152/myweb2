<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>

<body>
    <!-- 자바영역 -->
    <%
        String user_id = request.getParameter("user_id");
        String bdaytime = request.getParameter("bdaytime");
        String sex = request.getParameter("sex");
        String email = request.getParameter("myemail");
        String emailYN = request.getParameter("emailYN");
        String phone = request.getParameter("phone");
        String phone2 = request.getParameter("phone2");
        String phone3 = request.getParameter("phone3");
        String job = request.getParameter("job");
        String[] hobby = request.getParameterValues("hobby");
        String introduce = request.getParameter("introduce");
        %>
    <h1>아 이 디 :
        <%=user_id%></h1>
    <h1>생일 :
        <%=bdaytime%></h1>
    <h1>성별 :
        <%=sex%></h1>
    <h1>이메일 :
        <%=email%></h1>
    <h1>이메일 수신동의 :
        <%=emailYN%></h1>
    <h1>휴대폰 : <% if (phone2 == "") { %> null
        <%
} else {%>
        <%=phone%> - <%=phone2%> - <%=phone3%> </h1>
    <%
    }
    %>
    <h1>직업 :
        <%=job%></h1>
    <%
    for(String hob : hobby) {
    %>
    <h1>취미 :
        <%=hob%></h1>
    <%
    }
    %>
    <h1>자기소개 :
        <%=introduce%></h1>
</body>

</html>