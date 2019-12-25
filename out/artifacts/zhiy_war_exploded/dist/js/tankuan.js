var labelType;      //当前显示哪一个div
var winHeight;      //屏幕当前高度
var winWidth;       //屏幕当前宽度
var tpye;

/*
*   初始化实时水情、实时雨情、台风路径滑动按钮
*@ahthor fmm 2015-06-15
*/
function initSQBtn() {
    //实时水情滑动按钮
    $("#sqSplitBtn").click(function () {
        switch (labelType) {
            case 1:
                $("#sqDiv").toggle("show");
                if ($(".sqDiv").width() - 400) {
                    $(".LabelList").hide("slow");
                    $("#sqSplitBtn").animate({ right: 0 });
                    $(".sqSplitDiv").css("background-position", "-28 0");
                } else {
                    $(".LabelList").show("slow");
                    $("#sqSplitBtn").animate({ right: 290 });
                    $(".sqSplitDiv").css("background-position", "0 0");
                }
                break;
            case 2:
                // $(".ssyqDiv").toggle("show");
                // if ($(".ssyqDiv").width() == 295) {
                //     $(".LabelList").hide("slow");
                //     $("#sqSplitBtn").animate({ right: 0 });
                //     $(".sqSplitBtn").css("background-position", "-28 0");
                // } else {
                //     $(".LabelList").show("slow");
                //     $("#sqSplitBtn").animate({ right: 290 });
                //     $(".sqSplitBtn").css("background-position", "0 0");
                // }
                break;
            default:
                break;
        }


    })
}
/*
*   显示综合应用模块
*@author fmm 2015-06-09
*/
function showApplyContainer() {
    $("#coverLayer").show("slow");
    $("#comApply").show("slow");
    $(".closeDiv").show("slow");
}

/*
*   隐藏综合应用模块
*@author fmm 2015-06-11
*/
function hideApplyContainer() {
    $("#coverLayer").hide("slow");
    $("#comApply").hide("slow");
    $(".closeDiv").hide("slow");
}
/***********************************实时水情start*******************************/
var sssqMarkerLayer = null;         //实时水情标注图层
var sssqRiverMarkerArray = null;    //实时水情河流标注数组，用来联系地图上添加的标注与实时水情表格数据
var sssqRverMarkerArray = null;     //实时水情水库标注数组，用来联系地图上添加的标注与实时水情表格数据
var Iswen = true;                 //是否查询实时水情--河流
var Isli = false;                 //是否查询实时水情--水库
var sssqMarkerDetailData = null;    //记录每个标注的详细信息
/*
*   实时水情复选框状态改变事件，选中时弹出实时水情详细信息窗体
*/
function sssqStateChange() {
    if ($('#sssq').prop('checked')) {
        if ($("#sssqLi").length == 0) {
            var html = "<li class='labeli' id='sssqLi' onclick='showContentDiv(1)'>学校信息</li>";
            $("#labelUL").append(html);
            labelType = 1;
            changeLabelColor();//改变结果框的颜色
        }
        Iswen = true;
        Isli = false;
        $(".sqDiv").show("slow");
        $(".ssyqDiv").hide();
        $(".tfDiv").hide(); ;
        $("#sqSplitBtn").animate({ right: 290 });
        $(".sqSplitDiv").show("slow");
        var liWidth = winWidth - 295; ;
        $(".LabelList").animate({ left: liWidth });
        $(".LabelList").show("slow");


    } else {
        $(".sqDiv").hide("slow");       //隐藏实时水情详细信息窗体   
        if ($("#ssyq").prop("checked") == false && $("#tflj").prop("checked") == false) {
            $(".sqSplitDiv").hide("slow");
        }
        $("#liInfo").attr("checked", false);
        $("#wenInfo").attr("checked", true);

        $("#sssqRiverTable").remove();
        $("#sssqRverTable").remove();
        $("#sssqLi").remove();
        if ($(".sqDiv").css("display") == "block") {
            // changeLabelType();
            // changeLabelShow();
        }
    }
}

/*
*   
*/
function changeLabelType() {
    var type = $("#labelUL li:last").text();
    switch (type) {
        case "学校信息":
            labelType = 1;
            break;
        case "我的收藏":
            labelType = 2;
            break;
        case "我的志愿":
            labelType = 3;
            break;
        default:
            break;
    }
}

function changeLabelShow() {
    switch (labelType) {
        case 1:
            $("#sqDiv").show();
            $("#ssyqDiv").hide();
            $("#tfDiv").hide();
            $(".sssqLi").css("background-color", "#D3D2D2");
            break;
        case 2:
            $(".sqDiv").hide();
            $(".ssyqDiv").show();
            $(".tfDiv").hide();
            $("#sssqLi").css("background-color", "#D3D2D2");
            break;
        default:
    }
}

function changeLabelColor() {
    switch (labelType) {
        case 1:
            $(".sssqLi").css("background-color", "#D3D2D2");
            break;
        case 2:
            $("#sssqLi").css("background-color", "#D3D2D2");
            break;
        default:
    }

}
/*
*   根据类型查询水库或河流的实时水情
*@author fmm 2015-06-11
*/
function queryzsklInfo(type) {
    var zssf='湖北省';
    var zspc='第一批';
    var tmpHtml=null;
    $("#hlxxTab").append(tmpHtml);
    // var urlStr = encodeURI("Handler.ashx?method=sssq&oper=waterInfo&type=" + type + "&" + Math.random());
    $.ajax({
        type: "post",
        url: "http://localhost:8088/bklstdxxb/getBklstdxxbList.do",
        dataType: "json",
        data:{zssf:prov,gxxm:gxxm1,zskl:leibie,zspc:zspc1},
        async: false,
        success: function sssqOnsuccess1(data){
            var resInfoArray =data;
            if (resInfoArray == null) {
                alert("查询信息失败，请检查数据！");
                return;
            }
            addResInfoToTable(resInfoArray);        //将数据填到实时水情表格中，并将表格和标注联系起来
        }
    });
}

/*
*   将实时水情数据添加到表格中
*/
function addResInfoToTable(res) {
    var tmpHtml=null;
    var resInfoArray=res.data.list;
    //显示实时水情--河流信息
    // if (this.Isli) {
        tmpHtml = "<table id='sssqRiverTable'><tr><th>学校</th><th>招生省份</th><th>年份</th><th>文/理科</th><th>批次</th><th>平均分</th><th>最低分</th><th>最高分</th></tr>";
        for (var i = 0; i < resInfoArray.length; i++) {
            // var rowData = resInfoArray[i];
            var tr = "<tr class='sssqTrInfo c'><td>" + resInfoArray[i].gxxm + "</td><td>" + resInfoArray[i].zssf + "</td><td>" + resInfoArray[i].nf + "</td><td>" + resInfoArray[i].zskl + "</td><td>" +
                resInfoArray[i].zspc + "</td><td>" + resInfoArray[i].lqzdf + "</td><td>" + resInfoArray[i].lqpjf + "</td><td>" + resInfoArray[i].lqzgf + "</td></tr>"
            tmpHtml += tr;
        }
        tmpHtml += "</table>";
        $("#hlxxTab").append(tmpHtml);
        loadtoudantu();
        //设置结果列表的当前鼠标焦点项样式
        // $(".sssqTrInfo").hover(function () {
        //     $(this).css("cursor", "pointer");
        //     $(this).addClass("b");
        // }, function () {
        //     $(this).removeClass("b");
        // })
        // //单击结果列表项定位到标注点，并打开Popup标注
        // $(".sssqTrInfo").click(function () {
        //     $(this).addClass("a").siblings("tr").removeClass("a");
        //     var index = $(".sssqTrInfo").index($(this));
        //
        // })
}

/*
*   勾选河流或水库的操作
*/
function showWaterInfo(type1) {
    type=type1;
    switch (type) {
        case "文科":
            if ($('#wenInfo').prop('checked')) {
                leibie="文科";
                queryzsklInfo(type);
                queryzszyInfo(type);
                // queryzylInfo(type);
                loadshujutu();
                loadtoudantu();
                // loadzy();
            } else {
                $("#sssqRiverTable").remove();
                $("#sssqzszyTable").remove();
            }
            break;
        case "理科":
            if ($('#liInfo').prop('checked')) {
                leibie="理科";
                queryzsklInfo(type);
                queryzszyInfo(type);
                // queryzylInfo(type);
                loadshujutu();
                loadtoudantu();
                // loadzy();
            } else {
                $("#sssqRiverTable").remove();
                $("#sssqzszyTable").remove();
            }
            break;
        default:
    }
}

/*
*
*@author fmm 2015-06-12
*/
function showSssqTab(type) {
    switch (type) {
        case "学校":{
            $("#skxxTab").show();
            $("#hlxxTab").hide();
            $("#qushitu").hide();

        }
            break;
        case "分数线":{
            $("#skxxTab").hide();
            $("#hlxxTab").show();
            $("#qushitu").hide();
        }
            break;
        case "分数图":{
            $("#hlxxTab").hide();
            $("#skxxTab").hide();
            $("#qushitu").show();
        }
            break;
        default:
    }
}
function queryzszyInfo(type) {
    $.ajax({
        type: "post",
        url: "http://localhost:8088/zyfsx/getzyList.do",
        dataType: "json",
        data:{ksdq:province,gxmc:gxxm1,kb:leibie,pc:zspc1},
        async: false,
        success: function sssqOnsuccess2(data){
            var resInfoArray =data;
            if (resInfoArray == null) {
                alert("查询信息失败，请检查数据！");
                return;
            }
            var tmpHtml=null;
            $("#sssqzszyTable").append(tmpHtml);
            addResInfoToTable2(resInfoArray);        //将数据填到实时水情表格中，并将表格和标注联系起来
        }
    });
}
function addResInfoToTable2(res) {
    var tmpHtml=null;
    // $("#sssqzszyTable").append(tmpHtml);
    var resInfoArray=res.data.list;
    // if (this.Isli) {
    tmpHtml = "<table id='sssqzszyTable'>"+"<tr><th>专业</th><th>收藏</th></tr>";
    for (var i = 0; i < resInfoArray.length; i++) {
        var rowData = resInfoArray[i];
        var tr = "<tr id='scTrzyInfo' class='scTrzyInfo c'><td>"+rowData.zymc+"</td><td>"+"<a class=\"link\" href=\"javascript:void(0)\" onclick=sczy(\'"+rowData.zymc+"\')>" +"收藏"+"</a></td></tr>";
        tmpHtml += tr;
    }
    tmpHtml += "</table>";
    $("#sssqzszyTable").append(tmpHtml);
    // //设置结果列表的当前鼠标焦点项样式
    // $("#scTrzyInfo").hover(function () {
    //     $(this).css("cursor", "pointer");
    //     $(this).addClass("b");
    // }, function () {
    //     $(this).removeClass("b");
    // })
    // //单击结果列表项定位到标注点，并打开Popup标注
    // $(".scTrzyInfo").click(function () {
    //     $(this).addClass("a").siblings("tr").removeClass("a");
    //     // var index = $(".scTrInfo").index($(this));
    //     var tddd= $("#zytd").html();
    //     loadzyxiantu(tddd);
    // })
    // 设置结果列表的当前鼠标焦点项样式
    $(".scTrzyInfo").hover(function () {
        $(this).css("cursor", "pointer");
        $(this).addClass("b");
    }, function () {
        $(this).removeClass("b");
    });
    //单击结果列表项定位到标注点，并打开Popup标注
    $(".scTrzyInfo").click(function () {
        $(this).addClass("a").siblings("tr").removeClass("a");
        var index = $(".scTrzyInfo").index($(this));
        for (var i = 0; i < resInfoArray.length; i++) {
            var rowData = resInfoArray[i];
            if(i==index){
                var tddd=rowData.zymc;
                loadzyxiantu(tddd);
            }
        }
    })
}
// var myChart = echarts.init(document.getElementById('tanchuan'));
function queryzszyfsInfo(tddd) {
    $.ajax({
        type: "post",
        url: "http://localhost:8088/zyfsx/getzyfsList.do",
        dataType: "json",
        data:{ksdq:province,gxmc:gxxm1,kb:leibie,pc:zspc1,zymc:tddd},
        async: false,
        success: function sssqOnsuccess3(data){
            var resInfoArray =data.data.list;
            if (resInfoArray == null) {
                alert("查询信息失败，请检查数据！");
                return;
            }
            // addResInfoToTable(resInfoArray);        //将数据填到实时水情表格中，并将表格和标注联系起来
            // 基于准备好的dom，初始化echarts实例
            var title=tddd+"专业近5年专业分数线图";
            var datax= new Array();
            var datay= new Array();
            for (var i = 0; i < resInfoArray.length; i++) {
                datax[i]=resInfoArray[i].nf;
                datay[i]=resInfoArray[i].zgf;
                if(resInfoArray.length>=5&&(i-4==0))
                    break;
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption({
                title: {
                    text: title
                },
                xAxis: {
                    type: 'category',
                    data: datax
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: datay,
                    type: 'line'
                }]
            });
        }
    });
}
function sczy(type) {
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
    var pc=$(".sssqpcmc").val();//目前无法识别
    // alert(pc);
    if(pc=="本科三批") var zspc1="第三批";
    else if(pc=="本科二批") var zspc1="第二批";
    else var zspc1="第一批";
    var sc={
        username:username,
        gxmc:gxxm1,
        kb:leibie,
        pc:zspc1,
        zymc:type
    };
    // alert(sc.username+sc.gxmc+sc.kb+sc.pc+sc.zymc);
    $.ajax({
        type: "post",
        url: "http://localhost:8088/scj/shoucangzy.do",
        dataType: "json",
        data:sc,
        async: false,
        success: function sssqOnsuccess2(data){
            alert(data.msg);
        }
    });
}
function showContentDiv(type) {
    switch (type) {
        case 1:
            $(".sqDiv").show();
            $(".ssyqDiv").hide();
            $(".tfDiv").hide();
            labelType = 1;
            $("#sssqLi").css("background-color", "#D3D2D2");
            $("#ssyqLi").css("background-color", "#BBC9DE");
            $("#tfljLi").css("background-color", "#BBC9DE");
            break;
        case 2:
            $(".sqDiv").hide();
            $(".ssyqDiv").show();
            $(".tfDiv").hide();
            labelType = 2;
            $("#sssqLi").css("background-color", "#BBC9DE");
            $("#ssyqLi").css("background-color", "#D3D2D2");
            $("#tfljLi").css("background-color", "#BBC9DE");
            break;
        case 3:
            $(".sqDiv").hide();
            $(".ssyqDiv").hide();
            $(".tfDiv").show();
            //$(".tfRightDiv").show();
            labelType = 3;
            $("#sssqLi").css("background-color", "#BBC9DE");
            $("#ssyqLi").css("background-color", "#BBC9DE");
            $("#tfljLi").css("background-color", "#D3D2D2");
            break;
        default:
            break;
    }
}