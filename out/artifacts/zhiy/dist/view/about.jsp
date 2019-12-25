<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="path" value="${pageContext.request.contextPath }" />
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="en">
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
        <title>关于Map志愿 - Map志愿平台</title>
    <link rel="shortcut icon" href="/dist/favicon.ico">
    <link href="/dist/css/common.css?ecbf50208cc93a6780d5" rel="stylesheet">
    <link href="/dist/css/about.css?ecbf50208cc93a6780d5" rel="stylesheet">
        <style type="text/css">
            .table {
                width: 100%;
                height: 100%;
            }

            iframe {
                width: 100%;
                height: 100%;
            }

            .tdTop {
                text-align: center;
                height: 150px;
            }

            .tdLeft {
                width: 180px;
                padding: 5px;
            }

            .tdSearch {
                height: 80px;
            }

            body {
                text-align: center;
            }
        </style>
</head>
    <body>
        <table class="table" align="center" border="0">
        <tr class="trTop">
            <td colspan="2" class="tdTop">
                <iframe frameborder="0" scrolling="no" src="${path}/dist/view/top.jsp" name="top">
                </iframe>
            </td>
        </tr>
        <tr>
            <td>
                <iframe frameborder="0" src="${path}/dist/view/aboutbody.jsp" name="aboutbody"></iframe>
            </td>
        </tr>
        <tr>
            <td>
                <iframe frameborder="0" src="${path}/dist/view/footer.jsp" name="footer"></iframe>
            </td>
        </tr>
    </table>
    </body>
</html>