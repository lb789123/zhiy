<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="path" value="${pageContext.request.contextPath }" />
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="keywords" content="Map，志愿填报，高考，高考分数线，学校信息查询，大学信息，大学定位，专业，志愿，高三，高考志愿，地图，高考志愿填报，模拟填报">
	<meta name="description" content="一个提供全面的学校信息、专业信息、学校定位、专业分数线..，最优质、最便捷的高考志愿填报信息查询平台。">
	<link rel="dns-prefetch" href="//cdn.bootcss.com">
	<link rel="dns-prefetch" href="//s.happymmall.com">
	<link rel="dns-prefetch" href="//img.happymmall.com">
    <script>
     var _hmt = _hmt || [];
     (function() {
     var hm = document.createElement("script");
     hm.src = "https://hm.baidu.com/hm.js?bc210cd22928076d28296716d9dfcf01";
     var s = document.getElementsByTagName("script")[0]; 
     s.parentNode.insertBefore(hm, s);
     })();
     </script>
     <!-- <title>关于Map志愿 - Map志愿平台</title> -->
    <link rel="shortcut icon" href="/dist/favicon.ico">
    <link href="/dist/css/common.css?ecbf50208cc93a6780d5" rel="stylesheet">
    <link href="/dist/css/about.css?ecbf50208cc93a6780d5" rel="stylesheet">
    <script type="text/javascript" src="${path}/js/jquery.min.js"></script>
    <title>top</title>

<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
</head>
<body>
	<!-- 头 -->
<div class="nav">
    <div class="w">
        <div class="user-info">
        	<span class="user not-login">
                <span class="link js-login">登录</span>
                <span class="link js-register">注册</span>
            </span> 
            <span class="user login">
                <span class="link-text">
                    欢迎，<span class="username"></span>
                </span> 
                <span class="link js-logout">退出</span>
            </span>
        </div>
        <ul class="nav-list">
            <li class="nav-item">
                <a class="link" href="./cart.html"> <i class="fa fa-shopping-cart"></i>购物车(<span class="cart-count">0</span>)</a>
            </li>
            <li class="nav-item"> <a class="link" href="./order-list.html">我的订单</a>
 
            </li>
            <li class="nav-item"> <a class="link" href="./user-center.html">我的MMall</a>
 
            </li>
            <li class="nav-item"> <a class="link" href="./about.html">关于MMall</a>
            </li>
        </ul>
    </div>
</div>
<!-- 中间搜索框 -->
<div class="header">
    <div class="w"> <a class="logo" href="./index.html">Map志愿</a>
 
        <div class="search-con">
            <input class="search-input" id="search-input" placeholder="请输入学校名称或专业">
            <button class="btn search-btn" id="search-btn">搜索</button>
        </div>
    </div>
</div>
</body>
</html>
