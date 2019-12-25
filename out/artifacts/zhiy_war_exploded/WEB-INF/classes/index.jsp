<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2>Hello World!</h2>
<p>ceshi</p>
<form action="../user/login.do" method="post">
<table>
    <tr>
        <td align="center"><h3>用户登录</h3></td>
    </tr>
    <tr>
        <td>用户名:</td>
        <td><input type="text" id="username" name="username"
                   placeholder="请输入用户名" /></td>
    </tr>
    <tr>
        <td>密码:</td>
        <td><input type="password" id="password" name="password"
                   placeholder="请输入密码" /></td>
    </tr>
    <tr>
        <td align="center"><input type="button" value="登录" id="submitBtn"/></td>
    </tr>
</table>
</form>
</body>
</html>
