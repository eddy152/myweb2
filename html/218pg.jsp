<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/218pg.jsp</title>
    <style>
        div {
            color: white;
        }

        h2::first-letter {
            font-size: 30px;
            color: red;
            text-transform: uppercase;
        }

        h3::first-line {
            color: blue;
        }

        input:focus {
            background-color: red;
        }

        input:checked+div.d1 {
            background-color: gray;
        }

        input:checked+div.d2 {
            background-color: black;
        }
    </style>
</head>

<body>
    <h2>states pseudo-classes</h2>
    <h3>문제) 대한민국 수도는?</h3>
    <p>정답 작성 : <input type="text" id="answer" name="answer">
        <% String answer = request.getParameter("answer");
        if (answer == "서울") { %>
        <input type="button" value="정답" onclick="alert('정답입니다.')"></br>
        <% } else { %>
        <input type="button" value="정답" onclick="alert('오답입니다.')"></br>
        <% } %>
    <h2>answer</h2>
    힌트 보기 : <input type="checkbox">
    <div class="d1">
        남대문이 있는 곳이죠.
    </div>
    정답 보기 : <input type="checkbox">
    <div class="d2">
        서울
    </div>

</body>

</html>