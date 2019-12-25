var myIcon = new BMap.Icon('/dist/resource/school.ico',new BMap.Size(32,32));//这里先不用第三个参数IconOptions
var scjIcon = new BMap.Icon('/dist/resource/scj.ico',new BMap.Size(32,32));//这里先不用第三个参数IconOptions
function getlist(){
       $.ajax({
           //请求后台getlist
           url:"/gxxxb/getSchoolList.do",
           type:"post",
           dataType: "json",
           async:true,
           data: {},
           success:function(result){
               var gxxm = result.data.list[0].gxxm;
               var tb = result.data.list[0].tb;
               var szd = result.data.list[0].szd;
               var ts = result.data.list[0].ts;
               var zs = result.data.list[0].zs;
               var wz = result.data.list[0].wz;
               var jd = result.data.list[0].jd;
               var wd = result.data.list[0].wd;
               console.log(result);
               //var point = new BMap.Point(108.95394, 34.27165);
               $.each(result.data.list,function(index,item){

                   var point = new BMap.Point(jd,wd);
                   // var content = item.gxxm +"<img src='" + item.tb + "'>" +item.szd+item.ts+item.zs+item.wz;
                   // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm(\'"+item.gxxm+"\')\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                   var content ="<header class='headerb'>\n" +
                       "\t\t<div class=\"biob\">\n" +
                       "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                       "\t\t\t<div class=\"descb\">\n" +
                       "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                       "\t\t\t\t<p>学校简介</p>\n" +
                       "\t\t\t</div>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"avatarcontainerb\">\n" +
                       "\t\t\t<img src=\""+item.tb+"\" alt=\"avatar\" class=\"avatarb\">\n" +
                       "\t\t\t<div class=\"hoverb\"> </div>\n" +
                       "\t\t</div>\n" +
                       "\t</header>\n" +
                       "\t<div class=\"contentb\">\n" +
                       "\t\t<div class=\"datab\">\n" +
                       "\t\t\t<ul>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                       "\t\t\t\t\t<span>访问</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t"+item.ts+"\n" +
                       "\t\t\t\t\t<span>特色</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t531\n" +
                       "\t\t\t\t\t<span>关注</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t</ul>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                       "\t</div>";
                   // var content = "<a class=\"link\" href=\""+item.wz+"\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                   console.log(content);
                   map.centerAndZoom(point, 7);
                   var marker = new BMap.Marker(point);        // 创建标注    
                   map.addOverlay(marker);
                   addClickHandler(content,marker,item.gxxm);

               });
           }
       });
   };
   function getzsd1(){
       map.clearOverlays();//清除图层覆盖物
       $.ajax({
           //请求后台getlist
           url:"/gxxxb/getSchoolzsd.do",
           type:"post",
           dataType: "json",
           sync:true,
           data: { zsd: "湖北"},
           success:function(result){
               // for(var i = 0; i < result.data.list.length; i++){
               //     var lng = Number(result.data.list[i].jd);
               //     var lat = Number(result.data.list[i].wd);
               //     gPoints[i] = new BMap.Point(lng,lat);
               // }
               // alert(result.data.list[0].gxxm);
               var gxxm = result.data.list[0].gxxm;
               var tb = result.data.list[0].tb;
               var szd = result.data.list[0].szd;
               var ts = result.data.list[0].ts;
               var zs = result.data.list[0].zs;
               var wz = result.data.list[0].wz;
               var jd = result.data.list[0].jd;
               var wd = result.data.list[0].wd;
               console.log(result);
               //var point = new BMap.Point(108.95394, 34.27165);
               $.each(result.data.list,function(index,item){

                   var point = new BMap.Point(item.jd,item.wd);
                   // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm(\'"+item.gxxm+"\')\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                   var content ="<header class='headerb'>\n" +
                       "\t\t<div class=\"biob\">\n" +
                       "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                       "\t\t\t<div class=\"descb\">\n" +
                       "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                       "\t\t\t\t<p>学校简介</p>\n" +
                       "\t\t\t</div>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"avatarcontainerb\">\n" +
                       "\t\t\t<img src=\""+item.tb +"\" alt=\"avatar\" class=\"avatarb\">\n" +
                       "\t\t\t<div class=\"hoverb\"> </div>\n" +
                       "\t\t</div>\n" +
                       "\t</header>\n" +
                       "\t<div class=\"contentb\">\n" +
                       "\t\t<div class=\"datab\">\n" +
                       "\t\t\t<ul>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                       "\t\t\t\t\t<span>访问</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t"+item.ts+"\n" +
                       "\t\t\t\t\t<span>特色</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t531\n" +
                       "\t\t\t\t\t<span>关注</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t</ul>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                       "\t</div>";
                   console.log(content);
                   map.centerAndZoom(point, 7);
                   var marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注    
                   map.addOverlay(marker);
                   addClickHandler(content,marker,item.gxxm);

               });
           }
       });
   };
   function getzsd(zsd){
       map.clearOverlays();//清除图层覆盖物
       $.ajax({
           //请求后台getlist
           url:"/gxxxb/getSchoolzsd.do",
           type:"post",
           dataType: "json",
           sync:true,
           data: { zsd: zsd},
           success:function(result){
               var gxxm = result.data.list[0].gxxm;
               var tb = result.data.list[0].tb;
               var szd = result.data.list[0].szd;
               var ts = result.data.list[0].ts;
               var zs = result.data.list[0].zs;
               var wz = result.data.list[0].wz;
               var jd = result.data.list[0].jd;
               var wd = result.data.list[0].wd;
               console.log(result);
               $.each(result.data.list,function(index,item){
                   var point = new BMap.Point(item.jd,item.wd);
                   // var content = "<a class=\"link\" href=\""+item.wz+"\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                   // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm(\'"+item.gxxm+"\')\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                   var content ="<header class='headerb'>\n" +
                       "\t\t<div class=\"biob\">\n" +
                       "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                       "\t\t\t<div class=\"descb\">\n" +
                       "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                       "\t\t\t\t<p>学校简介</p>\n" +
                       "\t\t\t</div>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"avatarcontainerb\">\n" +
                       "\t\t\t<img src=\""+item.tb +"\" alt=\"avatar\" class=\"avatarb\">\n" +
                       "\t\t\t<div class=\"hoverb\"> </div>\n" +
                       "\t\t</div>\n" +
                       "\t</header>\n" +
                       "\t<div class=\"contentb\">\n" +
                       "\t\t<div class=\"datab\">\n" +
                       "\t\t\t<ul>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                       "\t\t\t\t\t<span>访问</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t"+item.ts+"\n" +
                       "\t\t\t\t\t<span>特色</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t531\n" +
                       "\t\t\t\t\t<span>关注</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t</ul>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                       "\t</div>";
                   // var name=item.gxxm;
                   console.log(content);
                   map.centerAndZoom(point,7);
                   var marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注    
                   map.addOverlay(marker);
                   addClickHandler(content,marker,item.gxxm);

               });
           }
       });
   };
   function getschoolclass(classs){
       $.ajax({
           //请求后台getlist
           url:"/gxxxb/getSchoolclass.do",
           type:"post",
           dataType: "json",
           sync:true,
           data: { leibie: classs},
           success:function(result){
               var gxxm = result.data.list[0].gxxm;
               var tb = result.data.list[0].tb;
               var szd = result.data.list[0].szd;
               var ts = result.data.list[0].ts;
               var zs = result.data.list[0].zs;
               var wz = result.data.list[0].wz;
               var jd = result.data.list[0].jd;
               var wd = result.data.list[0].wd;
               console.log(result);
               $.each(result.data.list,function(index,item){
                   var point = new BMap.Point(item.jd,item.wd);
                   // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm("+item.gxxm +")\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                   var content ="<header class='headerb'>\n" +
                       "\t\t<div class=\"biob\">\n" +
                       "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                       "\t\t\t<div class=\"descb\">\n" +
                       "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                       "\t\t\t\t<p>学校简介</p>\n" +
                       "\t\t\t</div>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"avatarcontainerb\">\n" +
                       "\t\t\t<img src=\""+item.tb +"\" alt=\"avatar\" class=\"avatarb\">\n" +
                       "\t\t\t<div class=\"hoverb\"> </div>\n" +
                       "\t\t</div>\n" +
                       "\t</header>\n" +
                       "\t<div class=\"contentb\">\n" +
                       "\t\t<div class=\"datab\">\n" +
                       "\t\t\t<ul>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                       "\t\t\t\t\t<span>访问</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t"+item.ts+"\n" +
                       "\t\t\t\t\t<span>特色</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t\t<li>\n" +
                       "\t\t\t\t\t531\n" +
                       "\t\t\t\t\t<span>关注</span>\n" +
                       "\t\t\t\t</li>\n" +
                       "\t\t\t</ul>\n" +
                       "\t\t</div>\n" +
                       "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                       "\t</div>";
                   console.log(content);
                   map.centerAndZoom(point, 7);
                   var marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注    
                   map.addOverlay(marker);
                   addClickHandler(content,marker,item.gxxm);

               });
           }
       });
   };
function getschoolclassjiu(){
    $.ajax({
        //请求后台getlist
        url:"/gxxxb/getSchoolclassjiu.do",
        type:"post",
        dataType: "json",
        sync:true,
        success:function(result){
            var gxxm = result.data.list[0].gxxm;
            var tb = result.data.list[0].tb;
            var szd = result.data.list[0].szd;
            var ts = result.data.list[0].ts;
            var zs = result.data.list[0].zs;
            var wz = result.data.list[0].wz;
            var jd = result.data.list[0].jd;
            var wd = result.data.list[0].wd;
            console.log(result);
            $.each(result.data.list,function(index,item){
                var point = new BMap.Point(item.jd,item.wd);
                // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm("+item.gxxm +")\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                var content ="<header class='headerb'>\n" +
                    "\t\t<div class=\"biob\">\n" +
                    "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                    "\t\t\t<div class=\"descb\">\n" +
                    "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                    "\t\t\t\t<p>学校简介</p>\n" +
                    "\t\t\t</div>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"avatarcontainerb\">\n" +
                    "\t\t\t<img src=\""+item.tb +"\" alt=\"avatar\" class=\"avatarb\">\n" +
                    "\t\t\t<div class=\"hoverb\"> </div>\n" +
                    "\t\t</div>\n" +
                    "\t</header>\n" +
                    "\t<div class=\"contentb\">\n" +
                    "\t\t<div class=\"datab\">\n" +
                    "\t\t\t<ul>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                    "\t\t\t\t\t<span>访问</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t"+item.ts+"\n" +
                    "\t\t\t\t\t<span>特色</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t531\n" +
                    "\t\t\t\t\t<span>关注</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t</ul>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                    "\t</div>";
                console.log(content);
                map.centerAndZoom(point, 7);
                var marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注    
                map.addOverlay(marker);
                addClickHandler(content,marker,item.gxxm);

            });
        }
    });
};
function getschoolclasser(){
    $.ajax({
        //请求后台getlist
        url:"/gxxxb/getSchoolclasser.do",
        type:"post",
        dataType: "json",
        sync:true,
        success:function(result){
            var gxxm = result.data.list[0].gxxm;
            var tb = result.data.list[0].tb;
            var szd = result.data.list[0].szd;
            var ts = result.data.list[0].ts;
            var zs = result.data.list[0].zs;
            var wz = result.data.list[0].wz;
            var jd = result.data.list[0].jd;
            var wd = result.data.list[0].wd;
            console.log(result);
            $.each(result.data.list,function(index,item){
                var point = new BMap.Point(item.jd,item.wd);
                // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm("+item.gxxm +")\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                var content ="<header class='headerb'>\n" +
                    "\t\t<div class=\"biob\">\n" +
                    "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                    "\t\t\t<div class=\"descb\">\n" +
                    "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                    "\t\t\t\t<p>学校简介</p>\n" +
                    "\t\t\t</div>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"avatarcontainerb\">\n" +
                    "\t\t\t<img src=\""+item.tb +"\" alt=\"avatar\" class=\"avatarb\">\n" +
                    "\t\t\t<div class=\"hoverb\"> </div>\n" +
                    "\t\t</div>\n" +
                    "\t</header>\n" +
                    "\t<div class=\"contentb\">\n" +
                    "\t\t<div class=\"datab\">\n" +
                    "\t\t\t<ul>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                    "\t\t\t\t\t<span>访问</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t"+item.ts+"\n" +
                    "\t\t\t\t\t<span>特色</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t531\n" +
                    "\t\t\t\t\t<span>关注</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t</ul>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                    "\t</div>";
                console.log(content);
                map.centerAndZoom(point, 7);
                var marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注    
                map.addOverlay(marker);
                addClickHandler(content,marker,item.gxxm);

            });
        }
    });
};
   var opts = {
       width : 320,     // 信息窗口宽度
       height: 320,     // 信息窗口高度
       // title : "大学信息" , // 信息窗口标题
       enableMessage:true//设置允许信息窗发送短息
   };
   function getschool(keyword){
       gxxm1=keyword;
       $.ajax({
           //请求后台getlist
           url:"/gxxxb/getSchool.do",
           type:"post",
           dataType: "json",
           async:true,
           data: {Gxxm:keyword},
           success:function(result){
               var gxxm = result.data.gxxm;
               var tb = result.data.tb;
               var szd = result.data.szd;
               var ts = result.data.ts;
               var zs = result.data.zs;
               var wz = result.data.wz;
               var jd = result.data.jd;
               var wd = result.data.wd;
               console.log(result);
               //var point = new BMap.Point(108.95394, 34.27165);
                   var point = new BMap.Point(jd,wd);
                   // var content = item.gxxm +"<img src='" + item.tb + "'>" +item.szd+item.ts+item.zs+item.wz;
               // var content = "<h4 style='margin:0 0 5px 0;padding:0.2em 0'><a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm(\'"+gxxm+"\')\">"+gxxm +"</a></h4>"+ szd + ts+ zs + wz;
               var content ="<header class='headerb'>\n" +
                   "\t\t<div class=\"biob\">\n" +
                   "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                   "\t\t\t<div class=\"descb\">\n" +
                   "\t\t\t\t<h3>@"+gxxm+"</h3>\n" +
                   "\t\t\t\t<p>学校简介</p>\n" +
                   "\t\t\t</div>\n" +
                   "\t\t</div>\n" +
                   "\t\t<div class=\"avatarcontainerb\">\n" +
                   "\t\t\t<img src=\""+tb+"\" alt=\"avatar\" class=\"avatarb\">\n" +
                   "\t\t\t<div class=\"hoverb\"> </div>\n" +
                   "\t\t</div>\n" +
                   "\t</header>\n" +
                   "\t<div class=\"contentb\">\n" +
                   "\t\t<div class=\"datab\">\n" +
                   "\t\t\t<ul>\n" +
                   "\t\t\t\t<li>\n" +
                   "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+wz+"\">官网</a>\n" +
                   "\t\t\t\t\t<span>访问</span>\n" +
                   "\t\t\t\t</li>\n" +
                   "\t\t\t\t<li>\n" +
                   "\t\t\t\t\t"+ts+"\n" +
                   "\t\t\t\t\t<span>特色</span>\n" +
                   "\t\t\t\t</li>\n" +
                   "\t\t\t\t<li>\n" +
                   "\t\t\t\t\t531\n" +
                   "\t\t\t\t\t<span>关注</span>\n" +
                   "\t\t\t\t</li>\n" +
                   "\t\t\t</ul>\n" +
                   "\t\t</div>\n" +
                   "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                   "\t</div>";
               // var content = "<a class=\"link\" href=\""+wz+"\">"+gxxm +"</a>"+ szd + ts+ zs + wz;
                   console.log(content);
                   map.centerAndZoom(point, 7);
                   var marker = new BMap.Marker(point,{icon:myIcon});        // 创建标注    
                   map.addOverlay(marker);
               marker.disableMassClear(); //mark不被清除
                   addClickHandler(content,marker,gxxm);
                   //显示学校信息框
               var p={lng:jd,lat:wd};
                   openInfop(content,p);
               // var val = document.getElementById("val").value.split(",");
               //展示学校框
               var box = document.getElementById("sssq");
               box.checked = true;
               sssqStateChange();
           }
       });
   };
   //点击将信息内容加入白标注中
   function addClickHandler(content,marker,gxxm){
       marker.addEventListener("click",function(e){
           gxxm1=gxxm;
           openInfo(content,e);
           $('.followb').on("click", function(){
               $('.followb').css('background-color','#34CF7A');
               $('.followb').html('<div class="icon-ok"></div> 已关注');
           });}
       );
   }
   function openInfo(content,e){
       var p = e.target;
       var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
       var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
       map.openInfoWindow(infoWindow,point); //开启信息窗口

   }
function openInfop(content,p){
    var point = new BMap.Point(p.lng, p.lat);
    var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口

}
   function Clear(){//清除
       map.clearOverlays();//清除图层覆盖物
       document.getElementById("keyword").value="";//清除搜索框结构
   }
function getshoucang(){
    var username;
    $.ajax({
        type: "post",
        url: "/user/get_username.do",
        dataType: "json",
        async: false,
        success: function user(data) {
            username = data.data.username
        }
    });
    var _this       = this;
    // 获取收藏夹列表
    $.ajax({
        type: "post",
        url     : "/scj/getshoucang.do",
        data    : {
            username : username
        },
        dataType: "json",
        async: false,
        success:function(result){
            // for(var i = 0; i < result.data.list.length; i++){
            //     var lng = Number(result.data.list[i].jd);
            //     var lat = Number(result.data.list[i].wd);
            //     gPoints[i] = new BMap.Point(lng,lat);
            // }
            // alert(result.data.list[0].gxxm);
            var gxxm = result.data.list[0].gxxm;
            var tb = result.data.list[0].tb;
            var szd = result.data.list[0].szd;
            var ts = result.data.list[0].ts;
            var zs = result.data.list[0].zs;
            var wz = result.data.list[0].wz;
            var jd = result.data.list[0].jd;
            var wd = result.data.list[0].wd;
            console.log(result);
            //var point = new BMap.Point(108.95394, 34.27165);
            $.each(result.data.list,function(index,item){

                var point = new BMap.Point(item.jd,item.wd);
                // var content = item.gxxm +"<img src='" + item.tb + "'>" +item.szd+item.ts+item.zs+item.wz;
                // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm(\'"+item.gxxm+"\')\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                var content ="<header class='headerb'>\n" +
                    "\t\t<div class=\"biob\">\n" +
                    "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                    "\t\t\t<div class=\"descb\">\n" +
                    "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                    "\t\t\t\t<p>学校简介</p>\n" +
                    "\t\t\t</div>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"avatarcontainerb\">\n" +
                    "\t\t\t<img src=\""+item.tb +"\" alt=\"avatar\" class=\"avatarb\">\n" +
                    "\t\t\t<div class=\"hoverb\"> </div>\n" +
                    "\t\t</div>\n" +
                    "\t</header>\n" +
                    "\t<div class=\"contentb\">\n" +
                    "\t\t<div class=\"datab\">\n" +
                    "\t\t\t<ul>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                    "\t\t\t\t\t<span>访问</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t"+item.ts+"\n" +
                    "\t\t\t\t\t<span>特色</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t531\n" +
                    "\t\t\t\t\t<span>关注</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t</ul>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                    "\t</div>";
                // var content = "<a class=\"link\" href=\""+item.wz+"\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                console.log(content);
                map.centerAndZoom(point, 12);
                var marker = new BMap.Marker(point,{icon:scjIcon});        // 创建标注    
                map.addOverlay(marker);
                addClickHandler(content,marker,item.gxxm);

            });
        }
    });
}
//关注后标签变色
$(document).ready(
    function check(){
        var username;
        $.ajax({
            type: "post",
            url: "http://localhost:8088/user/get_username.do",
            dataType: "json",
            async: false,
            success: function user(data) {
                username = data.data.username
            }
        });
        // alert(sc.username+sc.gxmc+sc.kb+sc.pc+sc.zymc);
        $.ajax({
            type: "post",
            url: "http://localhost:8088/scj/cherckxx.do",
            dataType: "json",
            data:{username:username,gxmc:gxxm1},
            async: false,
            success: function sssqOnsuccess2(data){
                if(data.msg==1){
                    $('.followb').css('background-color','#34CF7A');
                    $('.followb').html('<div class="icon-ok"></div> 已关注');
                }
            }
        });
    },
    function iniciar(){
        $('.followb').on("click", function(){
            scxx();
            $('.followb').css('background-color','#34CF7A');
            $('.followb').html('<div class="icon-ok"></div> 已关注');
        });
    }
);
function scxx() {
    var username;
    $.ajax({
        type: "post",
        url: "http://localhost:8088/user/get_username.do",
        dataType: "json",
        async: false,
        success: function user(data) {
            username = data.data.username
        }
    });

    // alert(sc.username+sc.gxmc+sc.kb+sc.pc+sc.zymc);
    $.ajax({
        type: "post",
        url: "http://localhost:8088/scj/shoucangxx.do",
        dataType: "json",
        data:{username:username,gxmc:gxxm1},
        async: false,
        success: function sssqOnsuccess2(data){
            alert(data.msg);
        }
    });
}
//按分数查询学校
function getchaxun() {

    var ksfs = document.getElementById("fenshuinput").value;
    var skx = document.getElementById("fenshuxian").value;
    var zy = document.getElementById("ke").value;
    var kel = document.getElementById("tfleibie").value;
    alert(zy);
    if (zy == null)
        chaxunzhiyuan(ksfs, skx, kel, zy);
    else chaxunxuexiao(ksfs, skx, kel);
}
function chaxunxuexiao(ksfs,skx,kel){
    map.clearOverlays();//清除图层覆盖物
    var tmpHtml=null;
    $("#tfTab").append(tmpHtml);
    var tr=null;
    var s;
    tmpHtml = "<table id='tfxxTab'><tr><th style='width: 130px'>学校</th><th>招生省份</th><th>文/理科</th><th>分差</th></tr>";
    // alert(prov,ksfs,skx,kel);
    $.ajax({
        //请求后台getlist
        url:"/bklstdxxb/chaxunschool.do",
        type:"post",
        dataType: "json",
        async:true,
        data: {zssf:prov,ksfs:ksfs,skx:skx,zskl:kel},
        success:function(result){
            s=result;
            $.each(result.data.list,function(index,item){

                var point = new BMap.Point(item.jd,item.wd);
                // var content = item.gxxm +"<img src='" + item.tb + "'>" +item.szd+item.ts+item.zs+item.wz;
                // var content = "<a class=\"link\" href=\"javascript:void(0)\" onclick=\"gxxm(\'"+item.gxxm+"\')\">"+item.gxxm +"</a>"+ item.szd + item.ts+ item.zs + item.wz;
                var content ="<header class='headerb'>\n" +
                    "\t\t<div class=\"biob\">\n" +
                    "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                    "\t\t\t<div class=\"descb\">\n" +
                    "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                    "\t\t\t\t<p>学校简介</p>\n" +
                    "\t\t\t</div>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"avatarcontainerb\">\n" +
                    "\t\t\t<img src=\""+item.tb+"\" alt=\"avatar\" class=\"avatarb\">\n" +
                    "\t\t\t<div class=\"hoverb\"> </div>\n" +
                    "\t\t</div>\n" +
                    "\t</header>\n" +
                    "\t<div class=\"contentb\">\n" +
                    "\t\t<div class=\"datab\">\n" +
                    "\t\t\t<ul>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                    "\t\t\t\t\t<span>访问</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t"+item.ts+"\n" +
                    "\t\t\t\t\t<span>特色</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t\t<li>\n" +
                    "\t\t\t\t\t531\n" +
                    "\t\t\t\t\t<span>关注</span>\n" +
                    "\t\t\t\t</li>\n" +
                    "\t\t\t</ul>\n" +
                    "\t\t</div>\n" +
                    "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                    "\t</div>";
                    tr = "<tr class='tfTrInfo c'><td>"+"<li class=\"tu\"><img src=\""+item.tb +"\" style=\"width:20px;height:20px\"></li><li class=\"tu\">"+item.gxxm+"</li></td><td>"+prov+"</td><td>"+kel+"</td><td>"+item.fencha+"</td></tr>";
                    tmpHtml += tr;
                console.log(content);
                map.centerAndZoom(point, 7);
                var marker = new BMap.Marker(point);        // 创建标注  
                map.addOverlay(marker);
                addClickHandler(content,marker,item.gxxm);
            });
            tmpHtml += "</table>";
            $("#tfTab").append(tmpHtml);
            $("#tfTab").show();
            $(".tfTrInfo").hover(function () {
                $(this).css("cursor", "pointer");
                $(this).addClass("b");
            }, function () {
                $(this).removeClass("b");
            });
            //单击结果列表项定位到标注点，并打开Popup标注
            $(".tfTrInfo").click(function () {
                $(this).addClass("a").siblings("tr").removeClass("a");
                var index = $(".tfTrInfo").index($(this));
                for (var i = 0; i < s.data.list.length; i++) {
                    var rowData = s.data.list[i];
                    if(i==index){
                        var new_point = new BMap.Point(rowData.jd,rowData.wd);
                        map.panTo(new_point); //转到该点位置
                        var content ="<header class='headerb'>\n" +
                            "\t\t<div class=\"biob\">\n" +
                            "    \t<img src=\"/dist/resource/up.jpg\" alt=\"background\" class=\"bgb\">\n" +
                            "\t\t\t<div class=\"descb\">\n" +
                            "\t\t\t\t<h3>@"+item.gxxm +"</h3>\n" +
                            "\t\t\t\t<p>学校简介</p>\n" +
                            "\t\t\t</div>\n" +
                            "\t\t</div>\n" +
                            "\t\t<div class=\"avatarcontainerb\">\n" +
                            "\t\t\t<img src=\""+item.tb+"\" alt=\"avatar\" class=\"avatarb\">\n" +
                            "\t\t\t<div class=\"hoverb\"> </div>\n" +
                            "\t\t</div>\n" +
                            "\t</header>\n" +
                            "\t<div class=\"contentb\">\n" +
                            "\t\t<div class=\"datab\">\n" +
                            "\t\t\t<ul>\n" +
                            "\t\t\t\t<li>\n" +
                            "\t\t\t\t\t<a style=\"color:#bdc3c7 \" href=\""+item.wz+"\">官网</a>\n" +
                            "\t\t\t\t\t<span>访问</span>\n" +
                            "\t\t\t\t</li>\n" +
                            "\t\t\t\t<li>\n" +
                            "\t\t\t\t\t"+item.ts+"\n" +
                            "\t\t\t\t\t<span>特色</span>\n" +
                            "\t\t\t\t</li>\n" +
                            "\t\t\t\t<li>\n" +
                            "\t\t\t\t\t531\n" +
                            "\t\t\t\t\t<span>关注</span>\n" +
                            "\t\t\t\t</li>\n" +
                            "\t\t\t</ul>\n" +
                            "\t\t</div>\n" +
                            "\t\t<div class=\"followb\"> <div class=\"icon-twitter\"></div>关注</div>\n" +
                            "\t</div>";
                        //显示学校信息框
                        openInfop(content,new_point);
                    }
                }
            })
        }
    });

};

function chaxunzhiyuan(ksfs,skx,kel,zy){};
function clear(){
    map.clearOverlays();//清除图层覆盖物
}