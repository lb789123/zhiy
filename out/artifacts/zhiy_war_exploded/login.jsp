<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" url="http://java.sun.com/jsp/jstl/core"%>
<c:set var="path" value="${pageContext.request.contextPath }" />
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<title>用户登录</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="${path}/js/jquery.min.js"></script>
<style type="text/css">

</style>
<script type="text/javascript">
	function CheckForm(){
		var loginName=document.getElementById("username").value;
		var loginPwd=document.getElementById("password").value;
		if(loginName.length==0){
			alert("请输入用户名");
			return false;
		}else
		{
			var pattern = /^[0-9a-zA-Z]+$/;
			if(!pattern.test(document.getElementById("loginName").value))
			{
				alert('\n用户名只可输入数字或者字母!');
				return false;
			}
		}
		if(loginPwd.length==0){
			alert("请输入密码");
			return false;
		}
		$.ajax({
			url:"${pageContext.request.contextPath}/login/accessLogin",
			data:{
				loginName:loginName,
				loginPwd:loginPwd
			},//给服务器的参数
			type:"POST",
			dataType:"json",			success:function(data){
				if("success"==data.str){
					alert("登录成功");
					var url="${pageContext.request.contextPath}/index.jsp";
					window.location.href=url; 
				}else{
					alert("登录失败,请输入正确的用户名和密码");
					var url="${pageContext.request.contextPath}/user/login.do";
					window.location.href=url; 
				}
			}
		});
	}
</script>

</head>
<body>
		<table>
			<tr>
				<td colspan="2" align="center"><h3>用户登录</h3></td>
			</tr>
			<tr>
				<td id>用户名:</td>
				<td><input type="text" id="username" name="username"
					placeholder="请输入用户名" /></td>
			</tr>
			<tr>
				<td>密码:</td>
				<td><input type="password" id="password" name="password"
					placeholder="请输入密码" /></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><input type="button" value="登录"
					id="submitBtn" onclick="CheckForm()"/></td>
			</tr>
		</table>
	<div class="login-footer">
	       <a href="${path}/admin/login">我是超级管理员</a>
		<div class="wrapper">版权所有 © bumingwei 保留一切权利。</div>
	</div>
</body>
</html>